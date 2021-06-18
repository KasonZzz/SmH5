<template>
	<!-- 收到的约课请求详细记录 -->
	<view class="wrap">
		<u-toast ref="uToast" />
		<view class="user" @click="yuepai">
			<view>
				<u-avatar size="100" :src="model.ava"></u-avatar>
			</view>
			<view style="margin-left: 20rpx;">
				<view style="font-size: 35rpx;">{{model.name}}</view>
				<view style="font: 20rpx;">{{model.identity}}</view>
			</view>
		</view>
		<view class="info" @click="yuepai">
			约课请求：{{model.content}}
		</view>
		<view class="detail">
			<view>2020-12-31</view>
			<view v-if="model.status==0" style="color: #2B85E4;margin-right: 20rpx;">您尚未查看对方的联系方式</view>
			<view v-if="model.status==1" style="color: #4CD964;margin-right: 20rpx;">您已获取对方的联系方式</view>
		</view>
		<u-gap height="20" bg-color="#eeeeee"></u-gap>
		<view class="info">
			<view class="input">
				<u-input v-model="model.content" placeholder="请输入约课理由" :disabled="true" type="text" :border="border" :height="height" :auto-height="autoHeight" />
			</view>
			<u-line color="#eeeeee" />
			<view style="display: flex;align-items: center;padding: 20rpx;">
				<view>
					<u-icon size="50" name="chat"></u-icon>
				</view>
				<view style="margin-left: 20rpx;">
					对方的联系方式，请点击接受查看信息
				</view>
			</view>
			<u-line color="#eeeeee" />
			<view style="display: flex;align-items: center;padding: 20rpx;">
				<view class="icon iconfont icon-xiaochengxu_tubiao" style="font-size: 26px; color: #95CD5C"></view>
				<view style="margin-left: 20rpx;display: flex;align-items: center;">
					手机号:
					<u-input v-if="model.status==0" :password-icon="false" disabled="true" :value="model.phone" v-model="model.phone" :type="type"
					 placeholder="手机号为必填项" />
					<u-input v-if="model.status==1" disabled="true" :value="model.phone" v-model="model.phone" type="text" />
				</view>
			</view>
			<u-line color="#eeeeee" />
			<view style="display: flex;align-items: center;padding: 20rpx;">
			<!-- 	<view>
					<u-icon size="50" name="../../../static/con.png"></u-icon>
				</view> -->
				<view class="icon iconfont icon-weixin2" style="font-size: 26px; color: #09BB07"></view>
				<view style="margin-left: 20rpx;display: flex;align-items: center;">
					微信号:
					<u-input v-if="model.status==0" :password-icon="false" disabled="true" :value="model.wechat" v-model="model.wechat" :type="type" />
					<u-input v-if="model.status==1" disabled="true" :value="model.wechat" v-model="model.wechat" type="text" />
				</view>
			</view>
			<u-line color="#eeeeee" />
			<view style="display: flex;align-items: center;padding: 20rpx;">
				<!-- <view>
					<u-icon size="50" name="../../../static/con.png"></u-icon>
				</view> -->
				<view class="icon iconfont icon-QQ" style="font-size: 26px; color: #68A5E1"></view>
				<view style="margin-left: 20rpx;display: flex;align-items: center;">
					QQ号:
					<u-input v-if="model.status==0" :password-icon="false" disabled="true" :value="model.qq" v-model="model.qq" :type="type" />
					<u-input v-if="model.status==1" disabled="true" :value="model.qq" v-model="model.qq" type="text" />
				</view>
			</view>
			<u-line color="#eeeeee" />
		</view>
		<view class="submit" @click="submit" v-if="model.status==0">
			<view class="text">点击查看信息(将扣除1积分)</view>
		</view>
	</view>
</template>

<script>
	import * as api from '@/api/api.js'
	export default {
		data() {
			return {
				id: '',
				yid:'',
				openid:'',
				type: 'password',
				status: 1,
				integral:'',
				avaList: [],
				model: {
					name: '',
					ava: '',
					content: '',
					status: '',
					phone: '',
					wechat: '',
					qq: '',
				},
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			}
		},
		onLoad(res) {
			console.log(res);
			this.model.ava = res.ava
			this.model.name = res.name
			this.model.content = res.content
			this.model.status = res.status
			this.model.phone = res.phone
			this.model.wechat = res.wechat
			this.model.qq = res.qq
			this.id = res.id,
			this.yid = res.yid,
			this.init();
		},
		methods: {
			init(){
			    uni.getStorage({
			    	key:'userInfo',
					success:(res)=>{
						this.openid = res.data.userId;
						api.request({
							url: '/userInfo/findUserInfoById',
							method: 'GET',
							data: {
								userId: this.openid
							},
						}).then(res=>{
							this.integral = res.data.data.integral;
							 console.log(res.data.data.integral)
						})
					}
			    })	
			},
			submit() {
				if(this.integral>0){
					api.request({
						url: '/suby/updateStatusById',
						method: 'GET',
						data: {
							id: this.id,  //suby表中的主键id
							userId:this.openid
						},
					}).then(res=>{
						if (res.data.data == 1) {
							this.$refs.uToast.show({
								title: '查看成功',
								type: 'success'
							})
							this.type = 'text';
							//this.model.status = 1;
						} else if (res.data.data == 0) {
							this.$refs.uToast.show({
								title: '网络开了小差！',
								type: 'error'
							})
						}
					});
				}else if(this.integral<=0){
					this.$refs.uToast.show({
						title: '对不起，您的积分不足！',
						type: 'error'
					})
				}
				
			},
			yuepai(){
				uni.navigateTo({
					url:'detail/detail?id='+this.yid//约课文章id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.submit {
		width: 100%;
		position: fixed;
		bottom: 0;
		height: 100rpx;
		text-align: center;
		display: grid;
		background: #554d84;
		align-items: center;

		.text {
			color: white;
		}
	}

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

	.info {
		.input {
			padding: 20rpx;
		}
	}
</style>
