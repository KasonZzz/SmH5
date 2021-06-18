<template>
	<!-- 收到的约课请求 -->
	<view>
		<u-notice-bar type="error" mode="horizontal" :list="list2"></u-notice-bar>
		<view @click="rinfo(res)" class="wrap" v-for="(res,index) in list">
			<view class="user">
				<view>
					<u-avatar size="100" :src="res.mava"></u-avatar>
				</view>
				<view style="margin-left: 20rpx;font-size: 35rpx;">
					{{res.mname}}
					<u-icon v-if="res.mgender == '男'" size="40" name="../../../static/boy.png"></u-icon>
					<u-icon v-if="res.mgender == '女'" size="40" name="../../../static/girl.png"></u-icon>
				</view>
			</view>
			<view class="info">
				{{res.content}}
			</view>
			<view class="detail">
				<view>{{res.date}}</view>
				<view v-if="res.status==0" style="color: #2B85E4;margin-right: 20rpx;">您尚未查看对方的联系方式</view>
				<view v-if="res.status==1" style="color: #4CD964;margin-right: 20rpx;">您已获取对方的联系方式</view>
			</view>
			<u-line color="gray" />
		</view>
	</view>
</template>

<script>
	import * as api from '@/api/api.js'
	export default {
		data() {
			return {
				openid: '',
				list: [],
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				list2:[
				   '安全提醒：切勿独自与陌生人在室内约课！！！谨防上当受骗！！！'
				],
			}
		},
		onShow() {
			this.init();
		},
		methods: {
			rinfo(res) {
				//console.log('req')
				uni.navigateTo({
					url: 'rinfo?ava=' + res.mava + '&name=' + res.mname + '&content=' + res.content + '&status=' + res.status +
						'&yid=' + res.yid + '&phone=' + res.phone + '&wechat=' + res.wechat + '&qq=' + res.qq + '&id=' + res.id
				})
			},
			init() {
				uni.getStorage({
					key: 'userInfo',
					success: (res) => {
						this.openid = res.data.userId;
						api.request({
							url: '/suby/getYuePaiMessageByUid',
							method: 'GET',
							data: {
								userId: this.openid
							},
						}).then(res=>{
							this.list = res.data
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.info {
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.detail {
		display: flex;
		margin-left: 20rpx;
		margin-top: 20rpx;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
</style>
