<template>
  <div class="container">
    <div class="info-card">
      <image class="avatar" :src="myInfo.avatar || '/static/images/avatar.png'" />
      <div class="basic">
        <div class="username">{{myInfo.nick || '未设置'}}</div>
        <div class="user-id">用户ID：{{myInfo.userID}}</div>
      </div>
    </div>
		<div>
			个性签名: {{myInfo.selfSignature || '暂无'}}
		</div>
		
		<div  @click="open('../profile/main')">修改资料</div>
		<br>
		<br>
		<div  @click="logout" >退出登录</div>
    
 
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState({
      myInfo: state => state.user.myInfo
    })
  },
  methods: {
	open(url){
			uni.navigateTo({
			    url: url
			});
	},
    logout () {
      this.$store.dispatch('resetStore')
      wx.$app.logout()
      wx.hideLoading()
      wx.reLaunch({
        url: '../login/main'
      })
    }
  }
}
</script>

<style lang='stylus'>
.cell-group
  margin-top 10px
.logout
  color $danger
.signature
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  max-width 50vw
  color $secondary
.container
  height 100vh
  background-color $background
  .info-card
    display flex
    padding 16px
    background-color $white
    .avatar
      width 80px
      height 80px
      border-radius 8px
      margin-right 14px
    .basic
      .username
        font-size 24px
        line-height 36px
        font-weight 600
      .user-id
        font-size 12px
        color $secondary
</style>
