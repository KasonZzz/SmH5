<template>
	<view>
		<view class="comment" v-for="(res, index) in yuepaiList">
			<u-modal v-model="show" :show-cancel-button="true" :content="content" @confirm="confirm" @cancel="cancel">
			</u-modal>
			<view class="left" @click="userinfo(res)">
				<image :src="res.pava" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="top">
					<view class="name">{{ res.pname }}
						<u-icon v-if="res.pgender == '男'" size="40" name="../../../static/boy.png"></u-icon>
						<u-icon v-if="res.pgender == '女'" size="40" name="../../../static/girl.png"></u-icon>
					</view>
					<view class="identity" @click="console(res)" >{{res.identity}}</view>
				</view>
				<view class="title" @click="console(res)">{{res.title}}·{{res.payment}}
					<view>
						<u-button type="error" size="mini" shape="circle" @click="shanchu(res.id)">删除</u-button>
					</view>
				</view>
				<view class="content" @click="console(res)">
					{{ res.content }}
				</view>
				<view class="reply-box">
					<view style="margin-top: 20upx;display: grid;">
						<scroll-view scroll-x="true" class="pic"
							style="width: 100%;overflow:hidden;white-space:nowrap;">
							<!-- <image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList" :src="res1"
								mode="aspectFill"
								style="width:220rpx;height:220rpx;margin-bottom: 10rpx;margin-right: 10rpx;"></image> -->
								<view v-if="res.urlsList.length == 1"
									style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
									<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList"
										:src="res1" mode="aspectFill" style="width: 100%;"></image>
								</view>
								<view v-if="res.urlsList.length == 2 || res.urlsList.length == 4"
									style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
									<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList"
										:src="res1" mode="aspectFill"
										style="width:280rpx;height:334rpx;margin-bottom: 10rpx;"></image>
								</view>
								<view v-if="res.urlsList.length == 3 || res.urlsList.length == 6"
									style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
									<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList"
										:src="res1" mode="aspectFill"
										style="width:180rpx;height:220rpx;margin-bottom: 10rpx;"></image>
								</view>
								<view v-if="res.urlsList.length == 5"
									style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
									<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList"
										:src="res1" mode="aspectFill"
										style="width:180rpx;height:220rpx;margin-bottom: 10rpx;"></image>
									<view style="width:180rpx;height:220rpx;"></view>
								</view>
								
								
						</scroll-view>
					</view>
				</view>
				<view class="bottom">
					<view class="time">{{res.pubDate}}
						<view style="margin-top: 10rpx;display: flex;">
							<view class="tip" style="margin-left: 10rpx;" v-for="(inss,indess) in res.ptagsList">
								<u-tag class="tag" shape="circle" :text="inss" mode="plain" />
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import * as  api from '@/api/api.js'
	export default {
		data() {
			return {
				u_id: '',
				yuepaiList: [],
				y_id: '',
				show: false,
				content: '您确认要删除该内容吗？'
			}
		},
		onLoad(res) {
			this.u_id = res.id;
			this.getYuepai();

		},
		methods: {
			shanchu(res) {
				this.y_id = res
				this.show = true;
			},
			confirm() {
				//let that = this;
				api.request({
					url: '/yuePai/delYuepaiById',
					method: 'GET',
					data: {
						id: this.y_id
					},
				})
				this.getYuepai();
			},
			cancel() {
				uni.showToast({
					title: '您已取消！'
				})
			},
			previewImage(current, photos) {
				uni.previewImage({
					current,
					urls: photos
				})
			},
			userinfo(res) {
				uni.navigateTo({
					url: '../user/userinfo/userinfo?uid=' + res.pid
				})
			},
			//点击详情页
			console(res) {
				uni.navigateTo({
					url: './detail/detail?id=' + res.id
				})
			},
			//发布

			//读取约课动态
			getYuepai() {
				uni.showLoading({
					title: '加载中'
				})
				api.request({
					url: '/yuePai/getYuepaiInfoById',
					method: 'GET',
					data: {
						uid: this.u_id
					},
				}).then(res => {
					this.yuepaiList = res.data
					uni.hideLoading()
				});
			},
		}

	


	}
</script>

<style lang="scss" scoped>
	.comment {
		display: flex;
		padding: 30rpx;

		.pic {
			.img_wrapper {
				width: 220upx;
				height: 150upx;
				margin-right: 15upx;
				display: inline-block;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.left {
			image {
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
				background-color: #f2f2f2;
			}
		}

		.right {
			flex: 1;
			padding-left: 20rpx;
			font-size: 30rpx;

			.title {
				margin-bottom: 20rpx;
				margin-top: 15rpx;
				font-size: 35rpx;
				color: gray;
				display: flex;
				justify-content: space-between;
			}

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;

				.name {
					color: #5677fc;
				}

				.like {
					display: flex;
					align-items: center;
					color: #9a9a9a;
					font-size: 26rpx;

					.num {
						margin-right: 4rpx;
						color: #9a9a9a;
					}
				}

				.highlight {
					color: #5677fc;

					.num {
						color: #5677fc;
					}
				}
			}

			.content {
				margin-bottom: 10rpx;
			}

			.reply-box {
				//background-color: rgb(242, 242, 242);
				//border-radius: 12rpx;

				.item {
					padding: 20rpx;
					border-bottom: solid 2rpx $u-border-color;

					.username {
						font-size: 24rpx;
						color: #999999;
					}
				}

				.all-reply {
					padding: 20rpx;
					display: flex;
					color: #5677fc;
					align-items: center;

					.more {
						margin-left: 6rpx;
					}
				}
			}

			.test {
				float: left;
				padding: 15rpx;
			}

			.img {
				display: flex;
			}

			.bottom {
				//margin-top: 20rpx;
				display: flex;
				font-size: 24rpx;
				color: #9a9a9a;

				.reply {
					color: #5677fc;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
