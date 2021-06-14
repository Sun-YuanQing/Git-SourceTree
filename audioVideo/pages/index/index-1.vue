<template>
	<view class="content">
		<video ref="localVideo" playsInline autoPlay muted></video>
		<video ref="remoteVideo" playsInline autoPlay></video>
		<Button @click="start">开始</Button>
		<Button @click="call">呼叫</Button>
		<Button @click="hangup">挂断</Button>
	</view>
</template>

<script>
	var localVideo;
	var remoteVideo;
	var localStream;
	var peerConnA;
	var peerConnB;
	export default {
		data() {
			return {
			
			}
		},
		mounted() {
			localVideo = this.$refs['localVideo'];
			remoteVideo = this.$refs['remoteVideo']
			
			
		},
		onLoad() {
		},
		methods: {
			 getUserMedia:  (constraints, success, error) => {
				try {

					
					if (navigator.getUserMedia) { //旧版API
						navigator.getUserMedia(constraints, success, error);
					} else if (navigator.mozGetUserMedia) { //Firefox API   
						navigator.mozGetUserMedia(constraints, success, error);
					} else if (navigator.webkitGetUserMedia) { //webkit内核浏览器 API  
						navigator.webkitGetUserMedia(constraints, success, error);
					} else if (navigator.mediaDevices.getUserMedia) { //最新版API  
						navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
					}
				
				} catch (e) {
					console.log("getUserMedia错误:" + e);
				}
			},
			 success(stream) {
				console.log(JSON.stringify(stream));
				localVideo.srcObject = stream;
				localStream = stream;
				video.play();
				var VideoTrack = stream.getVideoTracks()
				console.log(VideoTrack);
			},
			
			 error(err) {
				console.log(err);
			},
			start(){
				this.getUserMedia({
					audio: true,
					video: true
				}, this.success, this.serror)
			},
			call: async () => {

				//视频轨道
				const videoTracks = localStream.getVideoTracks();
				//音频轨道
				const audioTracks = localStream.getAudioTracks();
				//判断视频轨道是否有值
				if (videoTracks.length > 0) {
					//输出摄像头的名称
					console.log(`使用的视频设备为: ${videoTracks[0].label}`);
				}
				//判断音频轨道是否有值
				if (audioTracks.length > 0) {
					//输出麦克风的名称
					console.log(`使用的音频设备为: ${audioTracks[0].label}`);
				}

				let configuration = {
					"iceServers": [{
						"url": "stun:stun.l.google.com:19302"
					}]
				};

				peerConnA = new RTCPeerConnection(configuration);
				peerConnA.addEventListener('icecandidate', this.onIceCandidateA);

				peerConnB = new RTCPeerConnection(configuration);
				peerConnB.addEventListener('icecandidate', this.onIceCandidateB);

				peerConnA.addEventListener('iceconnectionstatechange', this.onIceStateChangeA);
				peerConnB.addEventListener('iceconnectionstatechange', this.onIceStateChangeB);

				peerConnB.addEventListener('track', this.gotRemoteStream);

				localStream.getTracks().forEach((track) => {
					peerConnA.addTrack(track, localStream);
				});

				try {
					const offer = await peerConnA.createOffer();
					await this.onCreateOfferSuccess(offer);

				} catch (e) {
					this.onCreateSessionDescriptionError(e);
				}

			},
			hangup: () => {
				console.log('结束会话');
				peerConnA.close();
				peerConnB.close();
				peerConnA = null;
				peerConnB = null;
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
