<template>
	<!-- 我发起的约课详细记录-->
	<view class="wrap">
		<view class="user" @click="yuepai">
			<view>
				<u-avatar size="100" :src="model.ava"></u-avatar>
			</view>
			<view style="margin-left: 20rpx;">
				<view style="font-size: 35rpx;">{{model.name}}</view>
				<view style="font: 20rpx;">{{model.identity}}</view>
			</view>
		</view>
		<view class="info">
			约课请求：{{model.content}}
		</view>
		<view class="detail">
			<view>{{model.date}}</view>
			<view v-if="model.status==0" style="color: #2B85E4;margin-right: 20rpx;">对方尚未查看您的联系方式</view>
			<view v-if="model.status==1" style="color: #4CD964;margin-right: 20rpx;">对方已获取您的的联系方式</view>
		</view>
		<u-gap height="20" bg-color="#eeeeee"></u-gap>
		<view class="yuepai">
			<view>收到的约课</view>
			<view style="display: flex;margin-top: 15rpx;width: 100%;flex-flow: wrap;">
				<u-avatar v-for="(res,index) in avaList" style="margin-right: 15rpx;" size="50" :src="res.uava"></u-avatar>
				
				<!-- 小程序支持,App不支持这种写法 -->
			<!-- 	<u-row gutter="16">
					<u-col span="1" v-for="(ins,indes) in avaList">
						<u-avatar size="50" :src="ins.uava"></u-avatar>
					</u-col>
				</u-row> -->
				
			</view>
		</view>
	</view>
</template>

<script>
	import * as api from '@/api/api.js'
	export default {
		data() {
			return {
				id:'',
				status: 1,
				avaList: [],
				model: {
					name: '',
					ava: '',
					content: '',
					status: '',
					identity: '',
					date:''
				},
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			}
		},
		onLoad(res) {
			this.model.ava = res.ava
			this.model.name = res.name
			this.model.content = res.content
			this.model.status = res.status
			this.model.identity = res.identity
			this.model.date = res.date
			this.id = res.yid//约课文章id
			this.init();
		},
		methods: {
            init(){
				api.request({
					url:'/yava/getYavaById',
					method:'GET',
					data:{
						id:this.id
					},
				}).then(res=>{
					this.avaList = res.data
				})
			},
			yuepai(){
				uni.navigateTo({
					url:'detail/detail?id='+this.id
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

	.yuepai {
		padding: 20rpx;

	}
</style>
