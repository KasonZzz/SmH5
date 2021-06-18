<template>
	
	<view class="wrap">
		<u-toast ref="uToast" />
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30"
			style="margin-left: 20rpx;margin-right: 20rpx;margin-top: 15rpx;">
			<view class="u-m-r-10" @click="userinfo(model.pid)">
				<u-avatar :src="model.pava" size="140"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{model.pname}}
					<u-icon v-if="model.pgender == '男'" size="40" name="../../../static/boy.png"></u-icon>
					<u-icon v-if="model.pgender == '女'" size="40" name="../../../static/girl.png"></u-icon>
				</view>
				<view class="u-font-14 u-tips-color">{{model.identity}}

				</view>
			</view>
			<view class="u-m-l-10 u-p-10" v-if="model.pid != m_id">
				<u-button v-if="mode == 0" type="primary" shape="circle" size="mini" @click="focus(u_id)">关注</u-button>
				<u-button v-if="mode == 1" type="success" shape="circle" size="mini" @click="ufocus(u_id)">已关注
				</u-button>
			</view>
		</view>
		<view style="margin-left: 20rpx;margin-right: 20rpx;">
			<u-line color="primary" />
			<view class="btn">
				<u-grid :col="3" :border='border'>
					<u-grid-item>
						<u-avatar src="../../../static/weizhi.png"></u-avatar>
						<view class="grid-text">{{model.faceplace}}</view>
					</u-grid-item>
					<u-grid-item>
						<u-avatar src="../../../static/qizhi.png"></u-avatar>
						<view class="grid-text">{{model.title}}</view>
					</u-grid-item>
					<u-grid-item>
						<u-avatar src="../../../static/qian.png"></u-avatar>
						<view class="grid-text">{{model.payment}}</view>
					</u-grid-item>
				</u-grid>
			</view>
			<u-line color="primary" />
		</view>

		<view class="content">
			<view class="text">{{model.content}}</view>
			<view style="color: gray;" v-if="model.ptime!=''">约课时间：{{model.ptime}}</view>
			<view style="color: gray;" v-if="model.money!=0">费用：{{model.money}}</view>
			<view class="reply-box" v-if="model.urlsList.length != 0">
				<!-- 	<view class="img" style="margin-bottom: 20rpx;" v-for="(res,index) in model.urlsList">
					<u-image @click="previewImage(index,model.urlsList)" :src="res" mode="widthFix"></u-image>
				</view> -->
				<view v-if="model.urlsList.length == 1"
					style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
					<image @click="previewImage(index1,model.urlsList)" v-for="(res, index1) in model.urlsList"
						:src="res" mode="aspectFill" style="width: 100%;"></image>
				</view>
				<view v-if="model.urlsList.length == 2 || model.urlsList.length == 4"
					style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
					<image @click="previewImage(index1,model.urlsList)" v-for="(res, index1) in model.urlsList"
						:src="res" mode="aspectFill" style="width:334rpx;height:334rpx;margin-bottom: 10rpx;"></image>
				</view>
				<view
					v-if="model.urlsList.length == 3 || model.urlsList.length == 6 || model.urlsList.length == 7"
					style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
					<image @click="previewImage(index1,model.urlsList)" v-for="(res, index1) in model.urlsList"
						:src="res" mode="aspectFill" style="width:220rpx;height:220rpx;margin-bottom: 10rpx;"></image>
				</view>
				<!-- <view v-if="model.urlsList.length == 5 || model.urlsList.length == 8" -->
				<view v-if="model.urlsList.length == 5 "
					style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
					<image @click="previewImage(index1,model.urlsList)" v-for="(res, index1) in model.urlsList"
						:src="res" mode="aspectFill" style="width:220rpx;height:220rpx;margin-bottom: 10rpx;"></image>
					<view style="width:220rpx;height:220rpx;"></view>
				</view>
			</view>

			<view class="bottom">
				<view class="time">{{model.pubDate}}</view>
				<view class="view">阅读量{{model.view}}</view>
			</view>

			<view class="tags">
				<u-tag class="tag" v-for="(res1,index1) in model.ptagsList" shape="circle" :text="res1"
					mode="plain" />
			</view>

		</view>

		<u-gap height="20" bg-color="#eaeaea"></u-gap>

		<view class="number">
			<view style="margin-bottom: 15rpx;">收到的约课{{model.ynum}}条</view>
			<!-- 小程序支持,App不支持这种写法 -->
			<!-- 	<u-row gutter="16">
				<u-col span="1" v-for="(ins,indes) in ava">
					<u-avatar size="50" :src="ins.uava"></u-avatar>
				</u-col>
			</u-row> -->
			<view style="display: flex;margin-top: 15rpx;width: 100%;flex-flow: wrap;">
				<u-avatar v-for="(res,index) in ava" style="margin-right: 15rpx;" size="50" :src="res.uava"></u-avatar>
			</view>
		</view>




		<view class="navigation">
			<view class="right">
				<view v-if="model.b==null" class="cart btn u-line-1" @click="getSc(id)">收藏</view>
				<view v-else class="buy btn u-line-1" @click="unSc(id)">收藏</view>

			</view>
			<view class="right">

				<view class="buy btn u-line-1" @click="yuepai">发起约课</view>
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
				m_id: '',
				m_ava: '',
				m_gender: '',
				m_name: '',
				inverted: true,
				mode: null,
				model: {},
				ava: [],
				border: false,
			}
		},
		//获取传参值
		onLoad(res) {
			this.id = res.id;
			//console.log(this.id)
			this.init();

			//this.view();

		},
		onShow() {
			this.init();
			//this.view();
			api.request({
				url: '/yuePai/updateYuePaiBrowse',
				method: 'GET',
				data: {
					id: this.id
				}
			})
		},
		methods: {
			getSc(res) {
				let y_id = res
				api.request({
					url: '/shoucangY',
					method: 'POST',
					data: {
						id: y_id,
						u_id: this.m_id //自己的id
					},
				}).then(res => {
					if (res.data.code == '1') {
						this.init();
						this.$refs.uToast.show({
							title: '收藏成功',
							type: 'success',
							duration: '1000'
						})
					}
				});
			},
			unSc(res) {
				let y_id = res
				api.request({
					url: '/unshoucangY',
					method: 'POST',
					data: {
						id: y_id,
						u_id: this.m_id
					},
				}).then(res => {
					if (res.data.code == '1') {
						this.init();
						this.$refs.uToast.show({
							title: '取消收藏',
							type: 'warning',
							duration: '1000'
						})
					}
				});
			},
			init() {
				uni.getStorage({
					key: 'userInfo',
					success: (res) => {
						this.m_id = res.data.userId
						this.m_ava = res.data.avatarUrl
						this.m_name = res.data.username
						this.m_gender = res.data.gender
						api.request({
							url: '/yuePai/isScYuePaiById',
							method: 'GET',
							data: {
								id: this.id,//约课表中主键id
								uid: this.m_id//自己的id
							},
						}).then(res1 => {
							//console.log(res1)
							this.model = res1.data
							api.request({
								url: '/follow/isFollowByUserId',
								method: 'GET',
								data: {
									userId: this.model.pid,
									myId: this.m_id, //自己的id
								},
							}).then(res => {
								//	console.log(res)
								if (res.data.data) {
									this.mode = 1
								} else {
									this.mode = 0
								}
							});
						});

						api.request({
							url: '/yava/getYavaById',
							method: 'GET',
							data: {
								id: this.id
							},
						}).then(res => {
							this.ava = res.data
						})
					},
					/* 	fail: (rea) => {
							uni.showToast({
								title: '您尚未登录，请登录后操作！'
							})
							uni.navigateTo({
								url: '../../user/login'
							})
						} */
				})
			},
			home() {
				uni.switchTab({
					url: '../yuepai'
				})
			},
			yuepai() {
				uni.navigateTo({
					url: '../submit?name=' + this.model.pname + '&ava=' + this.model.pava + '&gender=' + this
						.model.pgender +
						'&identity=' + this.model.identity + '&id=' + this.id + '&u_id=' + this.model.pid

				})
			},
			focus(res) {
				this.mode = 1
				uni.request({
					url: api.baseUrl + '/users/focus',
					method: 'POST',
					data: {
						u_id: this.m_id,
						f_id: this.model.p_id,
						f_ava: this.model.p_ava,
						f_name: this.model.p_name,
						f_gender: this.model.p_gender,
						m_ava: this.m_ava,
						m_name: this.m_name,
						m_gender: this.m_gender
					}
				})
				this.$refs.uToast.show({
					title: '关注成功',
					type: 'success'
				})
			},
			ufocus(res) {
				this.mode = 0
				uni.request({
					url: api.baseUrl + '/users/ufocus',
					method: 'POST',
					data: {
						u_id: this.model.p_id,
						f_id: this.m_id
					}
				})
				this.$refs.uToast.show({
					title: '您已取消关注',
					type: 'warning'
				})
			},
			userinfo(res) {
				uni.navigateTo({
					url: '../../user/userinfo/userinfo?uid=' + res
				})
			},
			//图片预览
			previewImage(current, photos) {

				//console.log(current)
				//console.log(photos)
				uni.previewImage({
					current,
					urls: photos
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		height: 100%;
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
		height: 8vh;
		align-items: center;
		justify-content: space-around;

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
			//margin-left: 90rpx;
			margin-right: 20rpx;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #ef9ab6;
				//margin-right: 30rpx;
			}

			.buy {
				background-color: #fecf87;
			}
		}
	}

	.number {
		margin-top: 10rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-bottom: 8vh;
	}

	.wrap {
		//padding: 20rpx;
		height: 100%;
	}

	.title {
		display: inline;
		margin-left: 15rpx;
	}

	.titles {
		padding: 10rpx;
	}

	.content {
		margin-top: 10rpx;
		margin-bottom: 25rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;

		.bottom {
			display: list-item;
		}

		.text {
			margin-bottom: 15rpx;
		}

		.img {}

		.time {
			float: left;
		}

		.view {
			float: right;
		}

		.tags {
			margin-top: 10rpx;
		}

		.tag {
			padding: 10rpx;
		}
	}

	.pic {
		.img_wrapper {
			width: 190upx;
			height: 150upx;
			margin-right: 15upx;
			display: inline-block;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.example {
		margin-top: 10rpx;
		margin-bottom: 50rpx;
		padding-bottom: 50rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
</style>
