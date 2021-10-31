<template>
	<view class="my">
		<!-- info -->
		<view class="userinfo">
			<view class="logo">
				<image src="/static/user.jpg"></image>
			</view>
			<view class="name">
				<view>荆龙</view>
				<view>18534625325</view>
			</view>
		</view>

		<view class="border"></view>


		<!-- 钱包 -->
		<view class="qian">
			<image src="/static/images/bgs.jpg"></image>
			<view class="number">¥1877.88 <text>今日营收</text></view>
			<navigator class="btn" hover-class="none" >查看详情</navigator>
		</view>

		<!-- list -->
		<view class="list">

			<navigator hover-class="none" class="items" >
				<view class="icon">
					<image src="/static/images/list-1.png"></image>
				</view>
				<view class="title">创建订单</view>
				<image src="/static/images/right.jpg" class="right"></image>
			</navigator>
			<navigator class="items" hover-class="none" >
				<view class="icon">
					<image src="/static/images/list-2.png"></image>
				</view>
				<view class="title">值班信息</view>
				<image src="/static/images/right.jpg" class="right"></image>
			</navigator>
			<navigator class="items" hover-class="none" >
				<view class="icon">
					<image src="/static/images/list-2.png"></image>
				</view>
				<view class="title">创建会员</view>
				<image src="/static/images/right.jpg" class="right"></image>
			</navigator>
			<navigator class="items" hover-class="none" >
				<view class="icon">
					<image src="/static/images/list-2.png"></image>
				</view>
				<view class="title">优惠资讯</view>
				<image src="/static/images/right.jpg" class="right"></image>
			</navigator>
			<navigator class="items" hover-class="none" >
				<view class="icon">
					<image src="/static/images/list-3.png"></image>
				</view>
				<view class="title">库存查看</view>
				<image src="/static/images/right.jpg" class="right"></image>
			</navigator>
			<navigator class="items" hover-class="none" url="/pages/income/index">
				<view class="icon">
					<image src="/static/images/list-4.png" style="width:40rpx;height:40rpx"></image>
				</view>
				<view class="title">企业资讯</view>
				<image src="/static/images/right.jpg" class="right"></image>
			</navigator>
		</view>

	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.my{
	  width: 100%;
	  padding-top: 30rpx;
	  padding-bottom: 30rpx;
	}
	.userinfo{
	  width: 100%;
	  height: auto;
	  box-sizing: border-box;
	  padding:10rpx 30rpx;
	  display: flex;
	  align-items: center;
	  justify-content: flex-start;
	}
	
	.userinfo .logo{
	  width: 120rpx;
	  height: 120rpx;
	  overflow: hidden;
	  border-radius: 50%;
	}
	
	.userinfo .logo image{
	  width: 100%;
	  height: 100%;
	}
	
	.userinfo .name{
	  flex: 1;
	  height: 100%;
	  box-sizing: border-box;
	  padding-left: 30rpx;
	}
	.userinfo .name view:first-child{
	  color: #001833;
	  letter-spacing: 1px;
	  font-size: 30rpx;
	  font-weight: bold;
	}
	
	.userinfo .name view:last-child{
	  color: #AAAAAA;
	  font-size: 26rpx;
	  margin-top: 20rpx;
	}
	
	.border{
	  width: 686rpx;
	  background: #F2F2F2;
	  margin: 30rpx auto;
	  height: 1px;
	}
	
	.money{
	  width: 100%;
	  box-sizing: border-box;
	  padding: 0 30rpx;
	  display:flex;
	  align-items: center;
	  justify-content: space-between;
	}
	
	.money .items{
	  flex: 1;
	  display: flex;
	  align-items: center;
	  flex-direction: column;
	  justify-content: center;
	}
	
	.money .items image{
	  width: 50rpx;
	  height: 50rpx;
	}
	
	.money .items .n{
	  color: #757575;
	  text-align: center;
	  font-size: 24rpx;
	  margin-top: 6rpx;
	  letter-spacing: 0.5px;
	}
	
	.money .items .v{
	  font-size: 28rpx;
	  color: #010101;
	  text-align: center;
	  font-weight: bold;
	}
	
	.qian{
	  width: 686rpx;
	  height: 300rpx;
	  margin: 30rpx auto;
	  position: relative;
	}
	
	.qian image{
	  width: 100%;
	  height: 100%;
	}
	
	.qian .number{
	  width: 100%;
	  position: absolute;
	  top: 70rpx;
	  color: #fff;
	  font-weight: bold;
	  text-align: center;
	  font-size: 60rpx;
	  letter-spacing: 0.5px;
	  line-height: 60rpx;
	  text{
		  font-size: 20rpx;
		  margin-left: 6rpx;
	  }
	}
	.qian .btn{
	  width: 220rpx;
	  height: 80rpx;
	  border-radius: 40rpx;
	  position: absolute;
	  left: 0;
	  right: 0;
	  bottom: 50rpx;
	  margin: 0 auto;
	  text-align: center;
	  background-color: #fff;
	  color: #001833;
	  line-height: 80rpx;
	  font-weight: 400;
	  letter-spacing: 0.5px;
	}
	
	.list{
	  width: 686rpx;
	  margin: 0 auto;
	}
	
	.list .items{
	  width: 100%;
	  display: flex;
	  align-items: center;
	  justify-content: flex-start;
	  position: relative;
	  margin-bottom: 30rpx;
	}
	
	.list .items .icon{
	  background: #FFF7ED;
	  border-radius: 16rpx;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  width: 110rpx;
	  height: 110rpx;
	  margin-right: 20rpx;
	}
	
	.list .items .icon image{
	  width: 50rpx;
	  height: 50rpx;
	}
	
	.list .items .title{
	  color: #001833;
	  font-size: 30rpx;
	}
	
	.list .items .right{
	  width: 14rpx;
	  height: 24rpx;
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  margin: auto 0;
	  right: 10rpx;
	}
</style>
