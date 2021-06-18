<template>
	<view>
		<!-- 首页轮播图 -->
		<!-- 	<view class="wrap">
			<u-swiper :list="list" :title="true"></u-swiper>
		</view> -->
		<!-- 去掉外边框 -->
		<u-swiper :list="list" :title="true"></u-swiper>

		<!-- 通知滚动 -->
		<view>
			<u-notice-bar mode="horizontal" :list="list1"></u-notice-bar>

			<!-- <u-notice-bar mode="horizontal" :is-circular="false" :list="list1"></u-notice-bar> -->

			<!-- <u-notice-bar mode="vertical" :list="list1"></u-notice-bar> -->
		</view>


		<view class="bg">

			<u-grid :col="3" :border="true">
				<u-grid-item bg-color="#8295a7">
					<text style="color: #ffffff;font-size: 20px;">1</text>
					<text style="color: #ffffff;font-size: 14px;">今日上班(个工)</text>
				</u-grid-item>
		<!-- 	<u-line color="red" :direction="row" :length="50"/> -->
				
		
				<u-grid-item bg-color="#8295a7">
					<text style="color: #ffffff;font-size: 20px;">2</text>
					<text style="color: #ffffff;font-size: 14px;">今日加班(小时)</text>
				</u-grid-item>
	
				<u-grid-item bg-color="#8295a7">
					<text style="color: #ffffff;font-size: 20px;">560</text>
					<text style="color: #ffffff;font-size: 14px;">今日收入(元)</text>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 首页中间方块 -->
		<view>
			<u-grid :col="3">
				<u-grid-item @click="getNum" :index="1">
					<view class="icon iconfont icon-icon-test" style="font-size: 26px; color: #000000"></view>
					<view class="grid-text">记工流水</view>
				</u-grid-item>
				<u-grid-item>
					<view class="icon iconfont icon-zhangbentongji" style="font-size: 26px; color: #000000"></view>
					<view class="">记工统计</view>
				</u-grid-item>
				<u-grid-item>

					<view class="icon iconfont icon-kaoqinbiao" style="font-size: 26px; color: #000000"></view>
					<view class="grid-text">考勤表</view>
				</u-grid-item>
				<u-grid-item>
					<view class="icon iconfont icon-gongziguanli1" style="font-size: 26px; color: #000000"></view>
					<view class="grid-text">未结工资</view>
				</u-grid-item>
				<u-grid-item>
					<view class="icon iconfont icon-biji" style="font-size: 26px; color: #000000"></view>
					<view class="grid-text">代班记工</view>
				</u-grid-item>
				<u-grid-item>
					<view class="icon iconfont icon-gongzijilubiaopeizhi" style="font-size: 26px; color: #000000">
					</view>
					<view class="grid-text">记工管理</view>
				</u-grid-item>
				<u-grid-item>
					<view class="icon iconfont icon-yunduanbeifen" style="font-size: 26px; color: #000000"></view>
					<view class="grid-text">备份</view>
				</u-grid-item>
				<u-grid-item>
					<view class="icon iconfont icon-huishouzhan1" style="font-size: 26px; color: #000000"></view>
					<view class="grid-text">回收站</view>
				</u-grid-item>
				<u-grid-item>
					<view class="icon iconfont icon-yiwen" style="font-size: 26px; color: #000000"></view>
					<view class="grid-text">记工说明</view>
				</u-grid-item>
			</u-grid>
		</view>
	<view style="margin-top: 22upx;">
		<u-divider color="#c5c5c5" half-width="120" border-color="#e2e2e2">记工永久免费</u-divider>
	</view>
		<view class="agreenment">
			<view class="button-login1" hover-class="button-hover1" @tap="goto()">
				<text>记一笔工</text>
			</view>
			<!-- <text>|</text> -->
		<!-- 	<view class="button-login" hover-class="button-hover" @tap="bindLogin()">
				<text>登录</text>
			</view> -->
		</view>
	
			
			
		
		

		<!-- 	<view class="but">
			<u-button class="custom-style" type="success" :size="mini" shape="circle" @click="goto">方法跳转到about页面</u-button>
		</view> -->

	</view>

</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],

				list1: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				]
			}

		},
		methods: {
			// 回调参数为包含多个元素的数组，每个元素分别反应每一列的选择情况
			getNum(e) {
				console.log(e);
			},
			goto() {
				//console.log(url)
				uni.navigateTo({
					url: "./stajigong/stajigong"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	
	.agreenment {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		margin-top: 80rpx;
		color: #FFA800;
		text-align: center;
		height: 40rpx;
		line-height: 40rpx;
	}
	.button-login1 {
		color: #FFFFFF;
		font-size: 32rpx;
		width: 250rpx;
		height: 100rpx;
		background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1));
		box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(164, 217, 228, 0.2);
		border-radius: 50rpx;
		line-height: 100rpx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 5rpx;
	}
	
	.button-hover1 {
		background: linear-gradient(-90deg, rgba(63, 205, 235, 0.8), rgba(188, 226, 158, 0.8));
	}
	.button-login {
		color: #FFFFFF;
		font-size: 32rpx;
		width: 300rpx;
		height: 100rpx;
		background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1));
		box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(164, 217, 228, 0.2);
		border-radius: 50rpx;
		line-height: 100rpx;
		text-align: center;
		margin-left: auto;
		margin-right: 10px;
		margin-top: 5rpx;
	}

	.button-hover {
		background: linear-gradient(-90deg, rgba(63, 205, 235, 0.8), rgba(188, 226, 158, 0.8));
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.custom-style {
		color: #606266;
		width: 400rpx;

	}

	.but {
		margin-top: 200rpx;

	}

	.wrap {
		padding: 40rpx;
	}
</style>
