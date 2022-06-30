
window.onload = function() {
	var socket;
	var PeerConnection = (window.PeerConnection || 
		window.webkitPeerConnection00 || 
		window.webkitRTCPeerConnection || 
		window.mozRTCPeerConnection);
	// navigator.getUserMedia = navigator.getUserMedia || 
	// 	navigator.webkitGetUserMedia || 
	// 	navigator.mozGetUserMedia;
	var localstream = null;
	var rpc = new Array();
	var dpc = new Array();
	var vrpc = new Array();
	var camer_stream = {audio:true, video:{
							mandatory: {
						      maxWidth: 640,
						      maxHeight: 360
					    	}
						}}
	var rconn_count = 1;
	var servers = {"iceServers": 
			[
				{"url":"stun:1.1.1.1"}, //这里1.1.1.1对应你的公网IP
				{"url":"turn:1.1.1.1?transport=tcp", 
				"credential":"user", 
				"username":"passwd"},
			]
	};
	console.log("获取本地视频源...");
	navigator.mediaDevices.getUserMedia(camer_stream, getUMsuccess, function() {}); 
}
function getUMsuccess(stream){
	console.log("获取本地视频源成功！");
	vid1.src = webkitURL.createObjectURL(stream); //本地视频显示
	localstream = stream; //本地流
}
function connect () {
	socket = new WebSocket("ws://192.168.0.112"  + ":8889");
	setSocketEvents(socket); //设置WebSocket监听事件

}
function setSocketEvents(Socket) {
	Socket.onopen = function() { //连接成功处理方法
		console.log("Socket已连接！");
		send(JSON.stringify({"command":"login", "username":username.value}))
	};
	
	Socket.onmessage = function(Message) { //接收信息处理方法
		var obj = JSON.parse(Message.data);
		var command = obj.command;
		switch(command)
		{
			case "createWork" : {
				if (obj.ret == "success") console.log("创建会议室成功！");
				else if(obj.ret == "exist") console.log("会议室已存在！");
				else console.log("创建会议室失败！");
				break;
			}
			case "login" : {
				obj.ret == "success" ? 
				console.log("登录成功！") : 
				console.log("登录失败！");
				break;
			}
			case "join" : {
				obj.ret == "success" ? 
				console.log("加入会议室成功！") : 
				console.log("加入会议室失败！");
				break;
			}
			case "sec" : {
				console.log("没有权限！");
				break;
			}
			case "conn" : {
				Conn(obj);
				break;
			}
			default : {
				console.log(Message.data);
			}
		}
	};
	
	Socket.onclose = function() {
		console.log("Socket连接已断开！");
	}
}
function createWork() {
	console.log("创建会议室:" + work.value);
	var obj = JSON.stringify({"command":"createWork", 
							"wname":work.value});
	send(obj);
}
function join() {
	console.log("加入会议室:" + work.value);
	var obj = JSON.stringify({"command":"join", 
							"wname":work.value, 
							"username":username.value});
	send(obj);
}
function startwork(){
	console.log("会议开始:" + work.value);
	var obj = JSON.stringify({"command":"start", 
							"wname":work.value});
	send(obj);
}
function Conn(jd){
	/////////////////////////
	//      发起端代码     //
	/////////////////////////
	if (jd.ret == "main")
	{
		if (jd.type=="start"){
			console.log("发起连接:wname:" + jd.wname + 
				",sname:" + jd.suser +
				",dname:" + jd.duser);
			rpc[jd.duser] = new webkitRTCPeerConnection(servers);
			var trpc = rpc[jd.duser]; 
			vrpc[jd.duser] = ++rconn_count;
			trpc.addStream(localstream);
			trpc.onaddstream = function(e){
				try{
					document.getElementById('vid' + vrpc[jd.duser]).src 
						= webkitURL.createObjectURL(e.stream);
					console.log("连接远程媒体成功！");
				}catch(ex){
					console.log("连接远程媒体失败！",ex);
				}
			};
			trpc.onicecandidate = function(event){
				if (event.candidate) {
					var obj = JSON.stringify({
						"command":"conn", 
						"type":"ice_data", 
						"suser":jd.suser, 
						"duser":jd.duser, 
						"wname":jd.wname, 
						"ret":"msg", 
						"data":JSON.stringify(event.candidate)
					});
					send(obj);
				}
			};
		  	trpc.createOffer(function(desc){
		  		trpc.setLocalDescription(desc);
		  		var obj = JSON.stringify({
		  			"command":"conn", 
		  			"type":"offer", 
		  			"suser":jd.suser, 
		  			"duser":jd.duser, 
		  			"wname":jd.wname, 
		  			"ret":"msg", 
		  			"data":JSON.stringify(desc)
		  		});
				send(obj);
		  	});
		}else if(jd.type=="answer"){
			rpc[jd.suser].setRemoteDescription(
					new RTCSessionDescription(JSON.parse(jd.data))
				);
		}else if(jd.type=="ice_data"){
			console.log("main_candidate",jd.data);
			rpc[jd.suser].addIceCandidate(
					new RTCIceCandidate(JSON.parse(jd.data))
				);
		}
	/////////////////////////
	//      接收端代码     //
	/////////////////////////
	}else if(jd.ret == "msg"){
		if (jd.type=="offer"){
			console.log("接受连接:wname:" + jd.wname + 
				",sname:" + jd.suser + 
				",dname:" + jd.duser);
			dpc[jd.suser] = new webkitRTCPeerConnection(servers);
			var trpc = dpc[jd.suser];
			trpc.setRemoteDescription(
					new RTCSessionDescription(JSON.parse(jd.data))
				);
			trpc.addStream(localstream);
			trpc.onicecandidate = function(event){
				if (event.candidate) {
					var obj = JSON.stringify({
						"command":"conn", 
						"type":"ice_data", 
						"suser":jd.duser, 
						"duser":jd.suser, 
						"wname":jd.wname, 
						"ret":"main", 
						"data":JSON.stringify(event.candidate)
					});
					send(obj);
				}
			};
			trpc.createAnswer(function(desc){
				trpc.setLocalDescription(desc);
				var obj = JSON.stringify({
					"command":"conn", 
					"type":"answer", 
					"suser":jd.duser, 
					"duser":jd.suser, 
					"wname":jd.wname, 
					"ret":"main", 
					"data":JSON.stringify(desc)
				});
				send(obj);
			});
		}else if(jd.type=="ice_data"){
			console.log("client_candidate",jd.data);
			dpc[jd.suser].addIceCandidate(
					new RTCIceCandidate(JSON.parse(jd.data))
				);
		}
	}
}
function send(data){
	try{
		socket.send(data);
	}catch(ex){
		console.log("消息发送失败！");
	}
}