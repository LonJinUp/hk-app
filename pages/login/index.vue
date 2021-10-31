<template>
	<view class="login">
		<view class="logo">
			<u-image width="100%" height="100%" src="/static/logo.png"></u-image>
		</view>
		<view class="login-name">商家管理系统</view>
		<view class="login-form">
			<view class="items" v-for="(item,index) in loginConfig" :key='index'>
				<view class="label font-color">{{item.label}}</view>
				<view class="input-box">
					<u-input autocomplete="new-password"  v-model="form[item.code]" height="100" :type="item.type"  />
				</view>
			</view>
			<view class="password">
				忘记密码
			</view>
			<view class="login-btn" @click="login">登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					account: '',
					password: ''
				},
				loginConfig: [
					{label: '账号', value: '', type: 'text', placeholder: '请输入账号', code: 'account'},
					{label: '密码', value: '', type: 'password', placeholder: '请输入账号', code: 'password'}
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			login() {
				const {account,password} = this.form
				if(account && password){
					uni.redirectTo({
					    url: '/pages/index/index'
					});
				}else{
					this.utils.showToast('请输入账号和密码')
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.login{
		width: 100%;
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
		padding-top:100rpx;
		.logo{
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
			margin: 0 auto;
			background-color: #F7F8FB;
			overflow: hidden;
		}
		.login-name{
			color: #001833;
			text-align: center;
			margin-top: 30rpx;
			font-size: 40rpx;
			font-weight: bold;
		}
		.login-form{
			width: 600rpx;
			margin: 0 auto;
			margin-top: 60rpx;
			.items{
				margin-bottom: 30rpx;
				.label{
					font-weight: bold;
					margin-bottom: 14rpx;
				}
				.input-box{
					background: #F7F8FB;
					border-radius: 30rpx;
					width: 100%;
					height: 100rpx;
					box-sizing: border-box;
					padding: 0 20rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
			.password{
				color: #757575;
				font-size: 26rpx;
				text-align: right;
			}
			.login-btn{
				background: #FF7465;
				border-radius: 60rpx;
				width: 100%;
				height: 120rpx;
				font-size: 32rpx;
				font-weight: bold;
				line-height: 120rpx;
				color: #fff;
				text-align: center;
				margin-top: 70rpx;
				
			}
		}
		
	}
	
    input::-webkit-input-placeholder { color:#9195ad; }

</style>
