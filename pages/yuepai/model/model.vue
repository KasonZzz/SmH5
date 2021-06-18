<template>
	<view style="background: #eeeeee;">
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		<view style="background: white;">
			<u-dropdown>
				<u-dropdown-item v-model="value1" title="目的" :options="options1" @change="change1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="性别" :options="options2" @change="change2"></u-dropdown-item>
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
					{{ res.content }}</view>
				<view class="reply-box">
					<view style="margin-top: 20upx;display: grid;">
						<scroll-view scroll-x="true" class="pic" style="width: 100%;overflow:hidden;white-space:nowrap;">
							
<!-- 							<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList" :src="res1" mode="aspectFill"
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
						<view
							v-if="res.urlsList.length == 3 || res.urlsList.length == 6"
							style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
							<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList"
								:src="res1" mode="aspectFill"
								style="width:180rpx;height:220rpx;margin-bottom: 10rpx;"></image>
						</view>
						<view
							v-if="res.urlsList.length == 5"
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
								<u-tag style="margin-left: 10rpx;" v-for="(inss,indess) in res.ptagsList" class="tag" shape="circle" :text="inss" mode="plain" />
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
				page:'1',
				count:'',
				status: 'loadmore',
				scrollTop: 0,
				yuepaiList: [],
				value1: 0,
				value2: 0,
				text1: '',
				text2: '',
				options1: [{
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
				]

			}
		},
		onLoad() {
			this.getYuepai();
			//this.get();
			//this.init();

		},
		onPullDownRefresh: function() {
			this.page='1'
			this.getYuepai();
		},
		onReachBottom(){
			let a = (this.count/10)
			//console.log(a)
			if(this.page<a){
				setTimeout(()=>{
					this.page++;
					api.request({
						url: '/yuePai/yuePaiModelSelect',
						method: 'POST',
						data: {
							text1: this.text1,
							text2: this.text2,
							text3: this.text3,
							currentPage: this.page
						},
					}).then(res=>{
						this.yuepaiList = res.data.records;
						this.count = res.data.total;
						if(this.page>=a){
							this.status = 'nomore'
						}
					});
					this.status = 'loading'
				},1500)
			}
		},
		onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
		methods: {
			change1(res) {
				this.text1 = res;
				//console.log(res+"/////////////////");
					this.page = '1'
					api.request({
						url: '/yuePai/yuePaiModelSelect',
						method: 'POST',
						data: {
							text1: this.text1,
							text2: this.text2,
							text3: this.text3,
							currentPage: this.page
						},
					}).then(res=>{
						this.yuepaiList = res.data.records;
						this.count = res.data.total;
					})
				
			},
			change2(res) {
				this.text2 = res;
					this.page = '1'
					api.request({
						url: '/yuePai/yuePaiModelSelect',
						method: 'POST',
						data: {
							text1: this.text1,
							text2: this.text2,
							text3: this.text3,
							currentPage: this.page
						},
					}).then(res=>{
						this.yuepaiList = res.data.records;
						this.count = res.data.total;
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
					url: '../../user/userinfo/userinfo?uid='+res
				})
			},
			//点击详情页
			console(res) {
				uni.navigateTo({
					url:'../detail/detail?id='+res
				})
			},
			//读取约课动态
			getYuepai() {
				uni.showLoading({
					title: '加载中'
				})
				api.request({
					url: '/yuePai/yuePaiModelSelect',
					method: 'POST',
					data: {
						text1: this.text1,
						text2: this.text2,
						currentPage:this.page
					},
				}).then(res=>{
					this.yuepaiList = res.data.records;
					this.count = res.data.total;
					uni.hideNavigationBarLoading();
					uni.stopPullDownRefresh();
					uni.hideLoading();
					/* uni.request({
						////读取模特热榜条数
						url:api.baseUrl+'/users/hotmodel',
						method:'GET',
						success: (res) => {
							this.count = res.data[0].count
							//console.log(this.count)
						}
					}) */
				});
				// uni.request({
				// 	url: 'https://zk525795.xyz/users/model',
				// 	method: 'GET',
				// 	success: (res) => {
				// 		//console.log(res.data)
				// 		this.yuepaiList = res.data
				// 		uni.hideNavigationBarLoading();
				// 		uni.stopPullDownRefresh();
				// 		uni.hideLoading();
				// 	}
				// })
			}
		}

	}
</script>

<style lang="scss" scoped>
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
				display: flex;
				font-size: 24rpx;
				color: #9a9a9a;
				position: relative;

				.reply {
					color: #5677fc;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
