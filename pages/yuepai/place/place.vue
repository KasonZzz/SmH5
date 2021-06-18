<template>
	<view class="wrap">
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		<view @click="detail(res)" class="content" v-for="(res,index) in list">
			<view class="img">
				<image :src="res.urlsList[0]" mode="aspectFill" style="width: 100%;height: 400rpx;border-radius: 10rpx;"></image>
			</view>
			<view class="text">
				<view class="title">{{res.ccontent}}</view>
				<view class="contents">{{res.cintroduce}}</view>
				<view class="place">
					<view style="color: deeppink;">
					<u-icon name="map"></u-icon>{{res.cfaceplace}}
					<u-icon style="margin-left: 20rpx;" name="home"></u-icon>{{res.ctype}}
					</view>
					<view class="view">
						<u-icon name="eye"></u-icon>{{res.view}}
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import * as api from '@/api/api.js'
	export default {
		data() {
			return {
				scrollTop: 0,
				u_id:'', 
				u_ava:'',
				u_name:'', 
				u_gender:'',
				list:[],
				//src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607954852580&di=42d0c00442f565935779591a6a7a9353&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201712%2F31%2F20171231113658_HXMAc.jpeg'
			}
		},
		//返回顶层
		onPageScroll(e) {
			//console.log("触发返回顶部");
			this.scrollTop = e.scrollTop;
		},
		onLoad() {
			this.get();
		},
		onShow(){
			this.get();
		},
		onPullDownRefresh: function() {
			this.get();
		},
		methods: {
			get(){
				uni.showLoading({
					title: '加载中'
				})
				api.request({
					url:'/changdi/getChangdiAll',
					method:'GET',
				}).then(res=>{
					this.list = res.data
					uni.hideNavigationBarLoading();
					uni.stopPullDownRefresh();
					uni.hideLoading();
				})
			},
			detail(res){
				uni.navigateTo({
					url:'detail?id='+res.id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		background: #eeeeee;
	}

	.content {
		background: white;
		padding: 20rpx;
		margin-bottom: 20rpx;

		.img {
			text-align: center;
		}

		.text {
			position: relative;

			.title {
				font-size: 35rpx;
			}

			.contents {
				margin-top: 10rpx;
				margin-bottom: 10rpx;
			}

			.place {
				display: flex;

				.view {
					position: absolute;
					right: 0;
				}
			}
		}
	}
</style>
