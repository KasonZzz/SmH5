<template>

	<view class="wrap">
		<u-notice-bar type="error" mode="horizontal" :list="list"></u-notice-bar>
		<u-toast ref="uToast" />
		<view class="user">
			<view>
				<u-avatar size="100" :src="model.ava"></u-avatar>
			</view>
			<view class="name">
				<view style="font-size: 40rpx;">{{model.name}}
					<u-icon v-if="model.gender == '男'" size="40" name="../../../static/boy.png"></u-icon>
					<u-icon v-if="model.gender == '女'" size="40" name="../../../static/girl.png"></u-icon>
				</view>
				<view style="color: #a5a7a7;">{{model.identity}}</view>

			</view>
		</view>
		<u-gap height="20" bg-color="#eeeeee"></u-gap>
		<view class="info">
			<view class="input">
				<u-input v-model="model.content" placeholder="请输入约课理由" :type="type" :border="border" :height="height"
					:auto-height="autoHeight" />
			</view>
			<u-line color="#eeeeee" />
			<view style="display: flex;align-items: center;padding: 20rpx;">
				<view>
					<u-icon size="50" name="chat"></u-icon>
				</view>
				<view style="margin-left: 20rpx;color: coral;">
					我的联系方式，对方将会看到
				</view>
			</view>
			<u-line color="#eeeeee" />
			<view style="display: flex;align-items: center;padding: 20rpx;">
				<view class="icon iconfont icon-xiaochengxu_tubiao" style="font-size: 26px; color: #95CD5C"></view>
				<view style="margin-left: 20rpx;display: flex;align-items: center;">
					手机号:
					<u-input :value="model.phone" v-model="model.phone" type="number" />
				</view>
			</view>
			<u-line color="#eeeeee" />
			<view style="display: flex;align-items: center;padding: 20rpx;">
				<!-- <view>
					<u-icon size="50" name="../../../static/con.png"></u-icon>
				</view> -->
				<view class="icon iconfont icon-weixin2" style="font-size: 26px; color: #09BB07"></view>
				<view style="margin-left: 20rpx;display: flex;align-items: center;">
					微信号:
					<u-input type="text" :value="model.wechat" v-model="model.wechat" />
				</view>
			</view>
			<u-line color="#eeeeee" />
			<view style="display: flex;align-items: center;padding: 20rpx;">
				<view class="icon iconfont icon-QQ" style="font-size: 26px; color: #68A5E1"></view>
				<view style="margin-left: 20rpx;display: flex;align-items: center;">
					QQ号:
					<u-input type="number" :value="model.qq" v-model="model.qq" />
				</view>
			</view>
			<u-line color="#eeeeee" />
		</view>

		<view class="submit" @click="submit">
			<view class="text">提交约课请求(将消耗1积分)</view>
		</view>
	</view>
</template>

<script>
	import * as api from '@/api/api.js'
	export default {
		data() {
			return {
				id: '',
				u_id: '',
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				value: '',
				type: 'textarea',
				border: false,
				height: 100,
				autoHeight: true,
				model: {
					content: '',
					name: '',
					ava: '',
					gender: '',
					identity: '',
					phone: '',
					wechat: '',
					qq: ''
				},
				list: [
					'安全提醒：切勿独自与陌生人在室内约课！！！谨防上当受骗！！！'
				],
				m_name: '',
				m_ava: '',
				m_gender: '',
				m_id: ''
			}
		},
		onLoad(res) {
			this.model.name = res.name;
			this.model.ava = res.ava;
			this.model.gender = res.gender;
			this.model.identity = res.identity;
			this.id = res.id; //约课表的id
			this.u_id = res.u_id; //约课表用户id
		},
		onShow() {
			this.init();
		},
		methods: {
			init() {
				uni.getStorage({
					key: 'userInfo',
					success: (res) => {
						this.model.phone = res.data.phone;
						this.model.wechat = res.data.wechat;
						this.model.qq = res.data.qq;
						this.m_name = res.data.username;
						this.m_ava = res.data.avatarUrl
						this.m_gender = res.data.gender
						this.m_id = res.data.userId
					},
					fail: (res) => {
						uni.showToast({
							title: '请登录后操作！',
						})
						uni.navigateTo({
							url: '../user/login'
						})
					}
				})
			},
			submit() {
				console.log("this.model.phone" + this.model.phone + "==========" + this.model.wechat);
				//console.log(this.model)
				if (this.model.content == '') {
					this.$refs.uToast.show({
						title: '内容不能为空',
						type: 'error'
					})
				} else if (this.model.phone == '' || this.model.wechat == undefined) {
					this.$refs.uToast.show({
						title: '电话和微信必填!!!',
						type: 'error'
					})
				} else {
					api.request({
						url: '/mesCheck/getData',
						method: 'GET',
						data: {
							content: this.model.content,
						},
					}).then(res => {
						//console.log(res);

						if (res.data.errcode == 0) {
							console.log("内容检查成功");
							api.request({
								url: '/suby/submitYuePai',
								method: 'POST',
								data: {
									yid: this.id, //约课文章id
									uid: this.u_id, //约课文章用户id
									uava: this.model.ava,
									uname: this.model.name,
									ugender: this.model.gender,
									uidentity: this.model.identity, //身份
									mid: this.m_id, //自己的id
									mname: this.m_name,
									mava: this.m_ava,
									mgender: this.m_gender,
									content: this.model.content, //约课内容
									phone: this.model.phone, //电话
									wechat: this.model.wechat, //微信
									qq: this.model.qq //qq
								},
							}).then(res => {
								if (res.data.data == 1) {
									this.$refs.uToast.show({
										title: '发起约课成功',
										type: 'success'
									})
									setTimeout(() => {
										uni.switchTab({
											url: 'yuepai'
										})
									}, 2000)

								} else if (res.data.data == 0) {
									this.$refs.uToast.show({
										title: '网络开了小差',
										type: 'error'
									})
								}
							})

						} else {
							this.$refs.uToast.show({
								title: '内容包含敏感词汇!请检查!',
								type: 'error'
							})
							return;
						}
					});


				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user {
		display: flex;
		align-items: center;
		padding: 20rpx;

		.name {
			margin-left: 20rpx;
		}
	}

	.info {
		.input {
			padding: 20rpx;
		}
	}

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
</style>
