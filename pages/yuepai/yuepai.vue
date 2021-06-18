<template>
	<view class="wrap">
		<u-toast ref="uToast" />
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		<view class="content">
			<u-grid :col="4">
				<u-grid-item @click="model">
					<u-avatar src="../../../static/model.png"></u-avatar>
					<view class="grid-text">热榜</view>
				</u-grid-item>
				<u-grid-item @click="photo">
					<u-avatar src="../../../static/cx.png"></u-avatar>
					<view class="grid-text">作品相册</view>
				</u-grid-item>
				<u-grid-item @click="place">
					<u-avatar src="../../../static/dd.png"></u-avatar>
					<view class="grid-text">拍摄场地</view>
				</u-grid-item>
				<u-grid-item @click="qiandao">
					<u-avatar src="../../../static/cd.png"></u-avatar>
					<view class="grid-text">每日签到</view>
				</u-grid-item>
			</u-grid>
		</view>
		<view style="background: white;">
			<u-dropdown>
				<u-dropdown-item v-model="value1" title="想找" :options="options1" @change="change1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="性别" :options="options2" @change="change2"></u-dropdown-item>
				<u-dropdown-item v-model="value3" title="地点" :options="options3" @change="change3"></u-dropdown-item>
			</u-dropdown>
		</view>

		<view class="comment" v-for="(res, index) in yuepaiList">
			<view class="left" @click="userinfo(res.pid)">
				<image :src="res.pava" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="top">
					<view class="name">{{ res.pname }}
						<u-icon v-if="res.pgender == '男'" size="25" name="../../../static/boy.png"></u-icon>
						<u-icon v-if="res.pgender == '女'" size="25" name="../../../static/girl.png"></u-icon>
					</view>
					<view class="identity">{{res.identity}}</view>
				</view>
				<view class="title" @click="console(res.id)">{{res.title}}·{{res.payment}}</view>
				<view class="content" @click="console(res.id)">
					{{ res.content }}
				</view>
				<!-- 图片 -->
				<view class="reply-box">
					<view style="margin-top: 20upx;display: grid;">
						<scroll-view scroll-x="true" class="pic"
							style="width: 100%;overflow:hidden;white-space:nowrap;">

							<!-- 							<view class="reply-box" v-if="res.urlsList.length != 0">
								<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList" :src="res1" mode="aspectFill" style="width:220rpx;height:220rpx;margin-bottom: 10rpx;margin-right: 10rpx;"></image>
								 
							</view> -->


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
						<view style="margin-top: 10rpx;display: flex;align-items: center;">
							<view @click="console(res.id)">
								<u-tag style="margin-left: 10rpx;" v-for="(inss,indess) in res.pTags" class="tag"
									shape="circle" :text="inss" mode="plain" />
							</view>
							<view @click="console(res.id)" style="position: absolute;right: 0;font-size: 30rpx;">
								<u-icon name="eye"></u-icon>{{res.view}}
							</view>
						</view>

					</view>

				</view>
			</view>
		</view>

		<u-loadmore :status="status" />
	</view>
</template>

<script>
	import * as api from '@/api/api.js'
	export default {
		data() {
			return {
				yuepaicount: '',
				page: '1',
				flag: true,
				status: 'loadmore',
				u_id: '',
				scrollTop: 0,
				yuepaiList: [],
				userStatus: '',
				//标签索引
				value1: '',
				value2: '',
				value3: '',
				text1: '',
				text2: '',
				text3: '',
				//标签
				options1:[{
						label: '全部',
						value: '',
					},
					{
						label: '油工',
						value: '油工',
					},
					{
						label: '瓦工',
						value: '瓦工',
					},
					{
						label: '木工',
						value: '木工',
					},
					{
						label: '电工',
						value:  '电工',
					},
					{
						label: 'boss',
						value:  'boss',
					},
					{
						label: '水暖工',
						value: '水暖工',
					},
					{
						label: '杂工',
						value: '杂工',
					}
				],
				options2: [{
						label: '全部',
						value: '',
					},
					{
						label: '男',
						value: '男',
					},
					{
						label: '女',
						value: '女',
					},
				],
				options3: [{
						label: '全部',
						value: '',
					},
					{
						label: '国内',
						value: '国内',
					},
					{
						label: '国外',
						value: '国外',
					},
				],
			}
		},
		onLoad() {
			this.init();
			this.getYuepai();
		},
		onShow() {
			this.init();
			this.getYuepai();
		},
		//触底事件
		onReachBottom() {
		//	console.log("触底了");
			let a = (this.yuepaicount / 10)
			if (this.page < a) {
				setTimeout(() => {
					this.page++
					api.request({
						url: '/yuePai/getAllYuePaiInfo',
						method: 'POST',
						data: {
							text1: this.text1,
							text2: this.text2,
							text3: this.text3,
							currentPage: this.page
						},
					}).then(res => {
						this.yuepaiList = res.data.records;
						this.yuepaicount = res.data.total;
						if (this.page >= a) {
							this.status = 'nomore'
							return
						}
					});

					this.status = 'loading'
				}, 1000)
			}
			
		},
		//下拉刷新事件
		onPullDownRefresh: function() {
			this.page = '1'
			this.flag = true
			this.getYuepai();
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			init() {
				uni.getStorage({
					key: 'userInfo',
					success: (res) => {
						this.u_id = res.data.userId
						api.request({
							url: '/userInfo/findUserInfoById',
							method: 'GET',
							data: {
								userId: this.u_id
							},
						}).then(res=>{
							this.userStatus = res.data.data.status;
							//console.log("res.data.data.statu"+res.data.data.status);
						})
					},
					/* fail: (res) => {
						uni.showToast({
							title: '您尚未登录，请登录后操作！'
						})
					} */
				})
				//读取约课总数
				uni.request({
					url: api.baseUrl + '/getyuepai',
					method: 'GET',
					success: (res) => {
						this.yuepaicount = res.data[0].count
						//console.log(this.yuepaicount)
					}
				})
			},
			//拍摄场地
			place() {
			/* 	uni.navigateTo({
					url: '../jigong/jigong'
				}) */
				uni.navigateTo({
					url: 'place/place'
				})
				
			},
			model() {
				uni.navigateTo({
					url: 'model/model'
				})
			},
			photo() {
				uni.navigateTo({
					url: 'photo/photo'
				})
			},
			qiandao() {
				//console.log("状态为"+this.userStatus);
				if (this.userStatus == 0) {
					api.request({
						url: '/userInfo/qianDaoById',
						method: 'GET',
						data: {
							userId: this.u_id
						},
					}).then( res =>{
						if (res.data.data == 1) {
							this.$refs.uToast.show({
								title: '签到成功,积分+1',
								type: 'success'
							})
							this.init();
						} else if (res.data.data == 0) {
							this.$refs.uToast.show({
								title: '签到失败',
								type: 'error'
							})
						}
					})
				} else {
					this.$refs.uToast.show({
						title: '您今天已完成签到！',
						type: 'warning'
					})
				}

			},
			previewImage(current, photos) {

				uni.previewImage({
					current,
					urls: photos
				})
			},
			userinfo(res) {
				console.log(res)
				uni.navigateTo({
					url: '../user/userinfo/userinfo?uid=' + res
				})
			},
			//点击详情页
			console(res) {
				//console.log(res)
				uni.navigateTo({
					url: './detail/detail?id=' + res
				})
			},
			//发布
			btnClick() {
				uni.navigateTo({
					url: './publish/publish'
				})
			},
			//读取约课动态
			getYuepai() {
				//	console.log(this.text1 + this.text2+this.text3+"============");
				uni.showLoading({
					title: '加载中'
				})
				api.request({
					url: '/yuePai/getAllYuePaiInfo',
					method: 'POST',
					data: {
						text1: this.text1, //想找
						text2: this.text2, //性别
						text3: this.text3, //地点
						currentPage: this.page //页码 
					},
				}).then(res => {
					//console.log(res.data)
					this.yuepaiList = res.data.records;
					this.yuepaicount = res.data.total;
					uni.hideNavigationBarLoading();
					uni.stopPullDownRefresh();
					uni.hideLoading();
				});
			},
			//点击下拉标签事件
			change1(res) {
				//console.log(res + "111111111111111111111111")
				this.text1 = res
				this.page = '1'
				api.request({
					url: '/yuePai/getAllYuePaiInfo',
					method: 'POST',
					data: {
						text1: this.text1,
						text2: this.text2,
						text3: this.text3,
						currentPage: this.page
					},
				}).then(res => {
					this.yuepaicount = res.data.total;
					this.yuepaiList = res.data.records;
				})
			},
			change2(res) {
				//console.log(res + "222222222222222222222")
				this.page = '1'
				this.text2 = res
				//console.log(this.text2)
				api.request({
					url: '/yuePai/getAllYuePaiInfo',
					method: 'POST',
					data: {
						text1: this.text1,
						text2: this.text2,
						text3: this.text3,
						currentPage: this.page
					},
				}).then(res => {
					this.yuepaicount = res.data.total;
					this.yuepaiList = res.data.records;
				})
			},
			change3(res) {
				//console.log(res + "333333333333333")
				this.page = '1'
				this.text3 = res
				api.request({
					url: '/yuePai/getAllYuePaiInfo',
					method: 'POST',
					data: {
						text1: this.text1,
						text2: this.text2,
						text3: this.text3,
						currentPage: this.page
					},
				}).then(res => {
					this.yuepaicount = res.data.total;
					this.yuepaiList = res.data.records;
				})
			},

		}

	}
</script>

<style lang="scss" scoped>
	.wrap {
		background: #eeeeee;
	}

	.content {
		display: flex;
	}

	.btn {
		float: left;
		width: 200rpx;
		height: 200rpx;
		border: 2px solid red;
		border-radius: 10rpx;
	}

	.comment {
		display: flex;
		padding: 30rpx;
		background: white;
		margin-bottom: 20rpx;

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
			height: fit-content;

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
				position: relative;
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

	.reg-img {
		width: 222rpx;
		height: 116rpx;
		margin-right: 18rpx;
	}

	.my-reg {
		padding: 20rpx 30rpx;
		border-bottom: 20rpx solid #F5F6F9;
		display: flex;
		overflow-y: hidden;
		overflow-x: scroll
	}

	.my-regs {
		display: flex;
		margin-right: 8px;
	}

	.top1 {
		width: 100%;
		height: 400rpx;
		position: relative;

		>image {
			width: 100%;
			height: 100%;
		}

		>.top2 {
			background-color: rgba(0, 0, 0, 0.7);
			display: flex;
			color: #fff;
			align-items: center;
			justify-content: center;
			padding: 0 14rpx;
			//height: 40rpx;
			right: 0;
			top: 358rpx;
			position: absolute;
			//bottom: 30rpx;
			//right: 30rpx;
			font-size: 30rpx;
			border-radius: 4rpx;
		}
	}
</style>
