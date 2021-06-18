<template>
	<view class="content">
		<WaterfallsFlow :wfList='list' @itemTap="detail" />
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
			this.get();
		},
		data() {
			return {
				list: []
			};
		},
		onPullDownRefresh: function() {
			this.get();
		},
		methods: {
			get() {
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
