<template>
	<view class="content">
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		<WaterfallsFlow :wfList='list' @itemTap="detail"  />
	</view>
</template>

<script>
	import * as api from '@/api/api.js'
	import WaterfallsFlow from '@/components/WaterfallsFlow/WaterfallsFlow.vue'
	export default {
		components: {
			WaterfallsFlow
		},
		onLoad() {
			this.get();
		},
		onShow(){
			//this.get();
		},
		
		data() {
			return {
				list: [],
				scrollTop: 0,
			};
		},
		//已经关闭下拉刷新
		onPullDownRefresh: function() {
			this.get();
		},
		//返回顶层
		onPageScroll(e) {
			//console.log("触发返回顶部");
			this.scrollTop = e.scrollTop;
		},
		methods: {
			get() {
				//this.$refs.uWaterfall.clear();
				uni.showLoading({
					title: '加载中'
				})
				api.request({
					url: '/zuopin/getZuopinAll',
					method: 'GET',
				}).then(res=>{
					//console.log(res)
					
					this.list = res.data
					uni.hideNavigationBarLoading();
					uni.stopPullDownRefresh();
					uni.hideLoading();
				})
			},
			detail(res) {
				uni.navigateTo({
					url: 'detail?id=' + res.id
				})
			}
		}
	};
</script>
<style>
	page {
		background-color: #eee;
	}
</style>
<style lang="scss" scoped>
	.content {
		padding: 10px;

		.cnt {
			padding: 10px;
			position: relative;
			align-items: center;

			.title {
				font-size: 15px;
			}

			.text {
				font-size: 15px;
				margin-top: 5px;
				display: flex;
				position: relative;
			}


		}
	}
</style>
