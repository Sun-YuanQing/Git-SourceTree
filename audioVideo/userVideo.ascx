<%@ Control Language="C#" AutoEventWireup="true" CodeFile="userVideo.ascx.cs" Inherits="userVideo" %>
<div id="appUserVideo" class="userVideo f-center " v-show="userVideo">
    <div id="content" class="f-column">
        <video id="video" height="228" width="300" controls></video>
        <input type="button" id="btn" value="拍照" class="btn" onclick="oBtn()">
		<canvas id="canvas" height="228" width="300"></canvas>
    </div>
</div>
<script type="text/javascript">
    var userVideo = new Vue({
        el: '#appUserVideo',
        data() {
            return {
                imageSrc: "",
                userVideo: true
            }
        },
        watch: {
            imageSrc(val) {
                this.imageSrc = val;
                this.$emit('increment', val)
            }
        },
        mounted() {

        },
        methods: {
            onShow() {
                this.userVideo = !this.userVideo;
            }

        }
    });
</script>
<style type="text/css">
    .userVideo {
        position: absolute;
        background-color: rgba(0, 0, 0,0.6);
        width: 750px;
        height: 100vh;
        box-sizing: border-box;
        top:0px;
        right:0px;
        z-index:10;
    }

    .content {
        width: 500px;
        height: 60%;
        box-sizing: border-box;
    }
</style>
