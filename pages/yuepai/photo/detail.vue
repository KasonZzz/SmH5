<template>
	<view class="wrap">
		<u-line color="black" />
		<view class="user" @click="userinfo(list.zid)">
			<view>
				<u-avatar size="140" :src="list.zava"></u-avatar>
			</view>

			<view class="name" style="margin-left: 20rpx;font-size: 35rpx;">{{list.zname}}
				<u-icon v-if="list.zgender == '男'" size="25" name="../../../static/boy.png"></u-icon>
				<u-icon v-if="list.zgender == '女'" size="25" name="../../../static/girl.png"></u-icon>
			</view>
		</view>
		<u-gap height="15" bg-color="#eeeeee"></u-gap>
		<view class="content">
			<view style="margin-bottom: 15rpx;">
				<text>{{list.zcontent}}</text>
			</view>
			<view v-if="list.zplace!=''" class="place" style="color: #abafb1;font-size: 25rpx;">地点：{{list.zplace}}
			</view>
			<view v-if="list.zequipment!=''" class="equipment"
				style="color: #abafb1;font-size: 25rpx;margin-bottom: 15rpx;">设备：{{list.zequipment}}</view>
			<view class="img">
				<!-- 				<u-image @click="previewImage(index,list.urlsList)" v-for="(res,index) in list.urlsList" :src="res" mode="widthFix"></u-image> -->
				<view class="reply-box" v-if="list.urlsList.length != 0">
					<view v-if="list.urlsList.length == 1"
						style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
						<image @click="previewImage(index,list.urlsList)" v-for="(res, index) in list.urlsList"
							:src="res" mode="aspectFill" style="width: 100%;"></image>
					</view>
					<view v-if="list.urlsList.length == 2 || list.urlsList.length == 4"
						style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
						<image @click="previewImage(index,list.urlsList)" v-for="(res, index) in list.urlsList"
							:src="res" mode="aspectFill" style="width:334rpx;height:334rpx;margin-bottom: 10rpx;">
						</image>
					</view>
					<view v-if="list.urlsList.length == 3 || list.urlsList.length == 6 || list.urlsList.length == 7"
						style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
						<image @click="previewImage(index,list.urlsList)" v-for="(res, index) in list.urlsList"
							:src="res" mode="aspectFill" style="width:220rpx;height:220rpx;margin-bottom: 10rpx;">
						</image>
					</view>
					<view v-if="list.urlsList.length == 5 || list.urlsList.length == 8"
						style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
						<image @click="previewImage(index,list.urlsList)" v-for="(res, index) in list.urlsList"
							:src="res" mode="aspectFill" style="width:220rpx;height:220rpx;margin-bottom: 10rpx;">
						</image>
						<view style="width:220rpx;height:220rpx;"></view>
					</view>
					<view v-if="list.urlsList.length == 9"
						style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
						<image @click="previewImage(index,list.urlsList)" v-for="(res, index) in list.urlsList"
							:src="res" mode="aspectFill" style="margin-bottom: 10rpx;width:220rpx;height:220rpx;">
						</image>
					</view>
				</view>
			</view>
			<view class="time">
				<view>{{list.pubDate}}</view>
				<view>阅读{{list.view}}</view>
			</view>
			<view class="tags">
				<u-tag style="margin-left: 15rpx;" v-for="(res1,index1) in list.ztagsList" shape="circle" :text="res1"
					mode="plain" />
			</view>
		</view>



	</view>
</template>

<script>
	import * as api from '@/api/api.js'
	export default {
		data() {
			return {
				id: '',
				list: [],
				src: 'https://thirdwx.qlogo.cn/mmopen/vi_32/7tEdeN11bEaexRMhQbXOk5wiazdOHHvyUJTzq67167p5A1ibrOpBeGlrxjiahwibwEHlxY2dxibI6THgv8mbSPdJWLw/132',
				res1: 'https://zk525795.xyz/uploadC/wx03f68dc344b5b7ac.o6zAJs22MrX7Flh3zzYg2AmKcwY8.Vq8fhcSaS8HF559f6fc4c693b35de01cac8572e2c1b1.jpg',
				text: '青春'
			}
		},
		onLoad(res) {
			//console.log(res.id)
			this.id = res.id;
			this.get();
		},
		onShow() {
			api.request({
				url: '/zuopin/addZuopinView',
				method: 'GET',
				data: {
					id: this.id
				}
			})
		},
		methods: {
			userinfo(res) {
				uni.navigateTo({
					url: '../../user/userinfo/userinfo?uid=' + res
				})
			},
			previewImage(current, photos) {
				uni.previewImage({
					current,
					urls: photos
				})
			},
			get() {
				api.request({
					url: '/zuopin/getZuopinDetail',
					method: 'GET',
					data: {
						id: this.id
					},
				}).then(res => {
					this.list = res.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		height: 100%;
	}

	.user {
		padding: 20rpx;
		display: flex;
		align-items: center;
		//border: 1px solid lightcoral;
	}

	.content {
		padding: 20rpx;
		margin-bottom: 100rpx;

		.time {

			display: flex;
			justify-content: space-between;
			margin-bottom: 15rpx;
		}

		.tags {
			display: flex;

		}

	}

	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		position: fixed;
		z-index: 999;
		left: 0;
		right: 0;
		bottom: 0;

		.left {
			display: flex;
			font-size: 20rpx;
			padding: 15rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;
			margin-left: 90rpx;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #ef9ab6;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #fecf87;
			}
		}
	}
</style>
