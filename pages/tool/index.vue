<template>
	<view class="tool">
		<!-- header -->
		<view class="userinfo">
			<view class="logo">
				<image src="/static/user.jpg"></image>
			</view>
			<view class="name">
				<view>当前店铺：北郊店
					<image src="/static/images/qie.png" class="change" mode=""></image>
				</view>
				<view>登录ID：182873</view>
			</view>
			<view class="message">
				<image class="icon" src="/static/images/message.png" mode=""></image>
				<text>本周店铺进行双十一大促，活动时间有限，抓紧参与！！抓紧参与</text>
			</view>
		</view>
		<!-- header end -->
		<view class="order-wapper main">
			<view class="title">
				<view>订单数据</view>
				<view class="more">订单管理 <image src="/static/images/more.png" mode=""></image></view>
			</view>
			<view class="number-box">
				<view class="items">
					<view class="num">0</view>
					<view class="more">待付款 <image src="/static/images/more.png" mode=""></image> </view>
				</view>
				<view class="items">
					<view class="num">0</view>
					<view class="more">待发货 <image src="/static/images/more.png" mode=""></image> </view>
				</view>
				<view class="items">
					<view class="num">0</view>
					<view class="more">售后 <image src="/static/images/more.png" mode=""></image> </view>
				</view>
			</view>
		</view>
		<view class="order-wapper main">
			<view class="title">
				<view>营业数据</view>
				<view class="more"> <image src="/static/images/more.png" mode=""></image></view>
			</view>
			<view class="number-box">
				<view class="items">
					<view class="tit">支付金额</view>
					<view class="num">$299</view>
					<view class="more">昨日：$291</view>
				</view>
				<view class="items">
					<view class="tit">订单数量</view>
					<view class="num">182</view>
					<view class="more">昨日：192</view>
				</view>
				<view class="items">
					<view class="tit">售后订单</view>
					<view class="num">0</view>
					<view class="more">昨日：0 </view>
				</view>
			</view>
		</view>
		<view class="order-wapper main">
			<view class="title">
				<view>产品数据</view>
			</view>
			<view class="number-box">
				<view class="items">
					<view class="num">66</view>
					<view class="more">销售中 <image src="/static/images/more.png" mode=""></image> </view>
				</view>
				<view class="items">
					<view class="num">192</view>
					<view class="more">待上架 <image src="/static/images/more.png" mode=""></image></view>
				</view>
				<view class="items">
					<image class="add" src="/static/images/add.png" mode=""></image>
					<view class="more">新增商品 <image src="/static/images/more.png" mode=""></image></view>
				</view>
			</view>
		</view>
		<view class="order-wapper main">
			<view class="title">
				<view>常用工具</view>
			</view>
			<view class="nav-box">
				<view class="items" v-for="(item,index) in navList" :key='index'>
					<view class="icon-box">
						<image :src="item.icon" mode=""></image>
					</view>
					<view class="name">{{item.name}}</view>
				</view>
				<view style="height: 0px;" class="items"></view>
				<view style="height: 0px;" class="items"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				navList:[
					{name: '创建会员', icon: '/static/images/vip.png', path: ''},
					{name: '扫描二维码', icon: '/static/images/qrcode.png', path: ''},
					{name: '最新优惠', icon: '/static/images/yh.png', path: ''},
					{name: '到货确认', icon: '/static/images/dh.png', path: ''},
					{name: '上班打卡', icon: '/static/images/sb.png', path: ''},
					{name: '店铺盘点', icon: '/static/images/order.png', path: ''},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		width: 100%;
		height: 100%;
		background: #ededed;
		
	}
	.tool{
		padding-bottom: 30rpx;
		.nav-box{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			
			.items{
				width: 25%;
				margin-top: 30rpx;
				.icon-box{
					width: 70rpx;
					height: 70rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					background: rgba(255,116,101,0.1);
					border-radius: 10rpx;
					margin: 0 auto;
					image{
						width: 30rpx;
						height: 30rpx;
					}
				}
				.name{
					width: 100%;
					font-size: 24rpx;
					text-align: center;
					color: #353535;
					margin-top: 10rpx;
				}
			}
		}
		
		.order-wapper{
			padding: 30rpx 20rpx;
			border-radius: 20rpx;
			margin-bottom: 40rpx;
			box-sizing: border-box;
			background-color: #fff;
			.title{
				font-size: 28rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.more{
					color: #858585;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					font-size: 26rpx;
					
					image{
						width: 30rpx;
						height: 30rpx;
					}
				}
			}
			.number-box{
				display: flex;
				justify-content: center;
				margin-top: 30rpx;
				.items{
					flex: 1;
					.add{
						width: 60rpx;
						height: 60rpx;
						margin: 0 auto;
						display: block;
						transform: translateY(-10rpx);
						margin-bottom:6rpx;
					}
					
					.num{
						width: 100%;
						text-align: center;
						font-weight: bold;
						margin-bottom: 20rpx;
					}
					.tit{
						width: 100%;
						text-align: center;
						font-size: 24rpx;
						margin-bottom: 20rpx;
					}
					.more{
						display: flex;
						align-items: center;
						justify-content: center;
						color: #858585;
						font-size: 24rpx;
						image{
							width: 26rpx;
							height: 26rpx;
						}
					}
				}
			}
		}
		.userinfo{
		  width: 100%;
		  height: auto;
		  box-sizing: border-box;
		  padding:30rpx 30rpx;
		  display: flex;
		  align-items: center;
		  justify-content: flex-start;
		  border-bottom-left-radius: 8rpx;
		  border-bottom-right-radius: 8rpx;
		  background: #FF7465;
		  padding-bottom: 80rpx;
		  position: relative;
		  margin-bottom: 80rpx;
		  .message{
			  width: 686rpx;
			  height: 80rpx;
			  background-color: #fff;
			  border-radius: 20rpx;
			  position: absolute;
			  left: 0;
			  right: 0;
			  margin:  0 auto;
			  bottom: -40rpx;
			  box-sizing: border-box;
			  padding: 0 20rpx;
			  display: flex;
			  align-items: center;
			  justify-content: flex-start;
			  .icon{
				  width: 40rpx;
				  height: 40rpx;
				  margin-right: 10rpx;
			  }
			  font-size: 24rpx;
			  text{
				  flex:1;
				  overflow:hidden; 
				  text-overflow:ellipsis; 
				  white-space:nowrap;
				  color: #858585;
			  }
		  }
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
		  color: #fff;
		  letter-spacing: 1px;
		  font-size: 30rpx;
		  font-weight: bold;
		  display: flex;
		  align-items: center;
		  justify-content: flex-start;
		  .change{
			  width: 30rpx;
			  height: 30rpx;
			  margin-left: 10rpx;
		  }
		}
		
		.userinfo .name view:last-child{
		  color: #fff;
		  font-size: 26rpx;
		  margin-top: 20rpx;
		}
		
	}
</style>
