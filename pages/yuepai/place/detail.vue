<template>
	<view class="wrap">
		
		<view class="img">
			<u-image :src="res.urlsList[0]" mode="aspectFill" height="400"></u-image>
		</view>
		<view class="title">
			<view class="text">
				<view>{{res.ccontent}}</view>
			</view>
			<view class="icon">
				<u-icon name="map"></u-icon>{{res.cfaceplace}}
				<u-icon style="margin-left: 20rpx;" name="home"></u-icon>{{res.ctype}}
			</view>
		</view>
		<u-line color="#eeeeee" />
		<view class="tags">
			<view class="text">适合主题</view>
			<view class="tip">
				<u-tag style="margin-right: 15rpx;" v-for="(inss,indess) in res.ctagsList" class="tag" shape="circle" :text="inss"
				 mode="plain" />
			</view>
		</view>
		<u-line color="#eeeeee" />
		<view class="user">
			<view class="text">推荐人</view>
			<view class="info" @click="userinfo(res.cid)">
				<view class="left">
					<u-avatar size="80" :src="res.cava"></u-avatar>
				</view>
				<view class="right">
					<view class="top">
						<view class="name" style="margin: 12rpx;">{{res.cname}}
							<u-icon size="30" name="../../../static/boy.png"></u-icon>
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-line color="#eeeeee" />
		<view class="introduce">
			<view class="text">场地描述</view>
			<view>
				<text style="color: gray;">{{res.cintroduce}}</text>
			</view>
		</view>
		<u-line color="#eeeeee" />
		<view class="traffic">
			<view class="text">地址与交通</view>
			<view style="margin-bottom: 15rpx;">
				<text style="color: gray;">{{res.ctraffic}}</text>
			</view>
			<view>
	<!-- 			<u-image @click="previewImage(index1,res.urlsList)" v-for="(res1,index1) in res.urlsList" :src="res1" mode="widthFix"></u-image> -->
	<view class="reply-box" v-if="res.urlsList.length != 0">
		<view v-if="res.urlsList.length == 1"
			style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
			<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList" :src="res1"
				mode="aspectFill" style="width: 100%;"></image>
		</view>
		<view v-if="res.urlsList.length == 2 || res.urlsList.length == 4"
			style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
			<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList" :src="res1"
				mode="aspectFill" style="width:334rpx;height:334rpx;margin-bottom: 10rpx;"></image>
		</view>
		<view v-if="res.urlsList.length == 3 || res.urlsList.length == 6 || res.urlsList.length == 7"
			style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
			<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList" :src="res1"
				mode="aspectFill" style="width:220rpx;height:220rpx;margin-bottom: 10rpx;"></image>
		</view>
		<view v-if="res.urlsList.length == 5 || res.urlsList.length == 8"
			style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
			<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList" :src="res1"
				mode="aspectFill" style="width:220rpx;height:220rpx;margin-bottom: 10rpx;"></image>
			<view style="width:220rpx;height:220rpx;"></view>
		</view>
		<view v-if="res.urlsList.length == 9"
			style="padding: 20rpx;display: flex;justify-content: space-between;flex-wrap: wrap;">
			<image @click="previewImage(index1,res.urlsList)" v-for="(res1, index1) in res.urlsList" :src="res1"
				mode="aspectFill" style="margin-bottom: 10rpx;width:220rpx;height:220rpx;"></image>
		</view>
	</view>
			</view>
		</view>
		<view class="time">
			<view>{{res.pubDate}}</view>
			<view>
				<u-icon name="eye"></u-icon>{{res.view}}
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
				res: [],
			}
		},
		onLoad(res) {
			this.id = res.id
			//console.log(this.id)
			this.get();
		},
	
		onShow() {
			api.request({
				url: '/changdi/addChangdiView',
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
					url:'/changdi/getChangdiDetail',
					method: 'GET',
					data: {
						id: this.id
					},
				}).then(res=>{
					this.res = res.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		height: 100%;
	}

	.title {
		display: flex;
		justify-content: space-between;
		//border: 1px solid lightcoral;
		padding: 20rpx;

		.text {
			font-size: 30rpx;
		}
	}

	.tags {
		padding: 20rpx;
		//border: 1px solid lightcoral;

		.text {
			margin-bottom: 15rpx;
		}
	}

	.user {
		padding: 20rpx;
		//border: 1px solid lightcoral;

		.text {
			margin-bottom: 15rpx;
		}

		.info {
			display: flex;
			width: fit-content;
		}
	}

	.introduce {
		padding: 20rpx;

		.text {
			margin-bottom: 15rpx;
		}
	}

	.traffic {
		padding: 20rpx;
		//margin-bottom: 70rpx;

		.text {
			margin-bottom: 15rpx;
		}
	}

	.btn {
		display: flex;
		justify-content: space-around;
		height: 80rpx;
		width: 100%;
		bottom: 0;
		position: fixed;
		background: lightsteelblue;

		.btns {
			margin-top: 1.5vh;
		}
	}

	.time {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-bottom: 5vh;
	}
</style>
