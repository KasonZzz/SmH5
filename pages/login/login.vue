<template>
	<view class="content">
		<view class="header">
			<image mode="aspectFill" src="../../static/pub-detail/mote.png"></image>
		</view>

		<view class="list">
			<view class="list-call">
				<image class="img" src="/static/shilu-login/1.png"></image>
				<input class="sl-input" v-model="phone" type="number" maxlength="11" placeholder="输入手机号" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="sl-input" v-model="password" type="text" maxlength="32" placeholder="输入密码"
					password="true" />
			</view>

		</view>

		<view class="button-login" hover-class="button-hover" @tap="bindLogin()">
			<text>登录</text>
		</view>
		<!-- 		<view style="text-align: center;">
			<view>------请您先授权微信登录------</view>
		</view>
		<view style="text-align: center;margin-top: 50rpx;">
			<u-button class="" @click="getUserProfile" size="medium" type="success" shape="circle">授权登录</u-button>
		</view> -->

		<view class="login-footer" style="margin-top: 200rpx;">
			<view class="footer-tip flex">其他登录方式</view>
			<view class="footer-other flex">
				<view class="other-list">
					<image src="../../static/ic-QQ@2x.png" mode="aspectFill" @tap="login_qq"></image>
				</view>
				<view class="other-list">
					<image src="../../static/ic-weixin@2x.png" mode="aspectFill" @tap="getUserProfile"></image>
				</view>
			</view>
		</view>


		<view class="agreenment">
			<navigator url="forget" open-type="navigate">忘记密码</navigator>
			<text>|</text>
			<navigator url="reg" open-type="navigate">注册账户</navigator>
		</view>
	</view>
</template>

<script>
	import * as api from '@/api/api.js'
	//import * as request from '@/api/request.js'
	export default {
		data() {
			return {
				phone: '',
				sex: '',
				userinfo: {
					nickName: '',
					avatarUrl: '',
					gender: ''
				},
				SessionKey: '',
				OpenId: '',
				nickName: null,
				avatarUrl: null,
				gender: null,
				canIUseGetUserProfile: false,
			};
		},

		onLoad() {
			this.login();
			if (uni.getUserProfile()) {
				this.canIUseGetUserProfile = true;
			}
		},
		methods: {
			login() {
				//console.log("1111111111");
				uni.login({
					provider: 'weixin',
					success: (res) => {
						console.log("code===" + res.code)
						api.request({
							url: '/userLogin/getOpenIdByCode',
							method: 'GET',
							data: {
								code: res.code
							},
						}).then(res => {
							this.OpenId = res.data.openid;
							this.SessionKey = res.data.session_key;
							console.log(res);
						});
					}
				})
			},
			getUserProfile: function(res) {
				let that = this
				uni.getUserProfile({
					desc: '注册登录',
					success: (res) => {
						console.log(res.userInfo)
						this.userinfo = res.userInfo;
						this.userinfo.nickname = res.userInfo.nickName;
						this.userinfo.avatarUrl = res.userInfo.avatarUrl;
						if (res.userInfo.gender == '1') {
							this.sex = '男'
						} else if (res.userInfo.gender == '0') {
							this.sex = '女'
						}
						this.userinfo.gender = this.sex;
						api.request({
							url: '/userLogin/wxRegisterAndLogin',
							method: "POST",
							data: {
								//userInfo:this.userinfo,
								openId: that.OpenId,
								nickName: this.userinfo.nickname,
								avatarUrl: this.userinfo.avatarUrl,
								gender: this.sex
							},
						}).then(res=>{
							//console.log(res);
							uni.setStorage({
								key: 'userInfo',
								data: {
									userId: res.data.message,
									username: that.userinfo.nickname,
									avatarUrl: that.userinfo.avatarUrl,
									gender: that.sexs
								},
								success: (res) => {
									//console.log('登录成功')
								}
							});
							//微信登录成功后 ,得下发token
							uni.setStorage({
								key: "token",
								data: res.data.data,
								success: (res) => {
									//console.log("存放的值"+res.data);
								}
							});
							
							uni.reLaunch({
								url: '../quanzi/quanzi'
							})
						})
					},
					fail: (res) => {
						this.$refs.uToast.show({
							title: '您取消了授权！',
							type: 'error'
						})
					}
				})

			},

			login_qq() {
				uni.showToast({
					icon: 'none',
					title: 'QQ登录暂未开放'
				});
				return;
				//var vm = this;
				/* uni.getProvider({
					service: 'oauth',
					success: function(res) {
						console.log(res.provider) //qq,xiaomi,sinaweibo,weixin
						vm.log.log1 = res.provider
						if (~res.provider.indexOf('qq')) {
							uni.login({
								provider: 'qq',
								success: function(loginRes) {
									uni.request({
										method: 'GET',
										baseURL: 'https://graph.qq.com/user/get_user_info',
										url: '',
										data: {
											openid: loginRes.authResult.openid,
											access_token: loginRes.authResult.access_token,
											appid: '101832674'
										},
										load: true
									}).then((data) => {
										console.log(data)
										uni.setStorage({
											key: 'userInfo',
											data: {
												name: data.nickname,
												picUrl: data.figureurl_qq
											}
										});
										uni.switchTab({
											url: "../../tabBar/me/me"
										})
									}, (err) => {
										console.log(err)
									});
								}
							});
						}
					}
				}); */
			},

			/* wxGetUserInfo: function(res) {
				let that = this;
				if (!res.detail.iv) {
					uni.showToast({
						title: "您取消了授权,失败",
						icon: "none"
					});
					return false;
				}
				console.log('-------用户授权，并获取用户基本信息和加密数据------')
				console.log(res);
				this.userinfo = res.detail.userInfo;
				this.userinfo.nickname = res.detail.userInfo.nickName;
				this.userinfo.avatarUrl = res.detail.userInfo.avatarUrl;
				if (res.detail.userInfo.gender == '1') {
					this.sex = '男'
				} else if (res.detail.userInfo.gender == '0') {
					this.sex = '女'
				}
				this.userinfo.gender = this.sex;
				// console.log(this.userinfo.nickName);
				api.request({
					url: api.baseUrl + '/userinfo',
					method: "GET",
					data: {
						//userInfo:this.userinfo,
						openid: this.OpenId,
						nickName: this.userinfo.nickname,
						avatarUrl: this.userinfo.avatarUrl,
						gender: this.sex
					},
				}).then(res => {
					//console.log(res);
					uni.setStorage({
						key: 'userinfo',
						data: {
							openid: that.OpenId,
							nickName: that.userinfo.nickname,
							avatarUrl: that.userinfo.avatarUrl,
							gender: that.sex
						},
						success: (res) => {
							console.log('登录成功')
						}
					})

					uni.reLaunch({
						url: '../quanzi/quanzi'
					})
				})

			}, */





			init() {
				uni.getStorage({
					key: 'phone',
					success: (res) => {
						//console.log(res);
						this.phone = res.data
					},
				});
			},

			//电话号码登录
			bindLogin() {
				alert(222);
				if (this.phone.length != 11) {
					uni.showToast({
						icon: 'none',
						title: '手机号不正确'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码不正确'
					});
					return;
				}
				api.request({
					url: '/userLogin/login',
					data: {
						phone: this.phone,
						password: this.password
					},
					method: 'POST',
					//dataType: 'json',
				}).then(res => {
					//console.log(res.data.data)
					if (!res.data.flag) {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						});
					} else {
						//成功后的逻辑
						let userInfo = {
							userId: res.data.data.userId,
							username: res.data.data.username,
							avatarUrl: res.data.data.avatarUrl,
							gender: res.data.data.gender,
							phone: res.data.data.phone,
							//token:res.data.data.token,
						}
						uni.setStorage({
							key: "userInfo",
							data: userInfo,
							success: (res) => {
								console.log("存放的值"+res.data);
							}
						});
						uni.setStorage({
							key: "token",
							data: res.data.data.token,
							success: (res) => {
								//console.log("存放的值"+res.data);
							}
						});
						uni.setStorage({
							key: 'phone',
							data: userInfo.phone,
							success: (res) => {
								//console.log("存放的值"+res.data);
							}
						});
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						});
						uni.reLaunch({
							url: '../quanzi/quanzi'
						});
						//uni.navigateBack();
					}
				});


			}

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header {
		width: 200rpx;
		height: 200rpx;
		background: rgba(63, 205, 235, 1);
		box-shadow: 0rpx 12rpx 13rpx 0rpx rgba(63, 205, 235, 0.47);
		border-radius: 50%;
		margin-top: 30rpx;
		margin-left: auto;
		margin-right: auto;
	}

	.header image {
		width: 200rpx;
		height: 200rpx;
		border-radius: 100rpx;
	}

	.list {
		display: flex;
		flex-direction: column;
		padding-top: 50rpx;
		padding-left: 70rpx;
		padding-right: 70rpx;
	}

	.list-call {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100rpx;
		color: #333333;
		border-bottom: 0.5px solid #e2e2e2;
	}

	.list-call .img {
		width: 40rpx;
		height: 40rpx;
	}

	.list-call .sl-input {
		flex: 1;
		text-align: left;
		font-size: 32rpx;
		margin-left: 16rpx;
	}

	.button-login {
		color: #FFFFFF;
		font-size: 34rpx;
		width: 470rpx;
		height: 100rpx;
		background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1));
		box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(164, 217, 228, 0.2);
		border-radius: 50rpx;
		line-height: 100rpx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100rpx;
	}

	.button-hover {
		background: linear-gradient(-90deg, rgba(63, 205, 235, 0.8), rgba(188, 226, 158, 0.8));
	}

	.agreenment {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		margin-top: 80rpx;
		color: #FFA800;
		text-align: center;
		height: 40rpx;
		line-height: 40rpx;
	}

	.agreenment text {
		font-size: 24rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
	}

	/* 
	 */

	.flex {
		display: flex;
	}

	.login {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.login-main {
		flex: 1;
		padding: 0 70upx;

		.login-logo {
			width: 248upx;
			height: 242upx;
			padding-bottom: 50upx;
			margin: 200upx auto 0 auto;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.logo-tip {
			text-align: center;
			padding-top: 25upx;
			font-size: 32upx;
			font-weight: 200;
			color: rgba(51, 51, 51, 1);
			padding-bottom: 50upx;
		}

		.login-list {
			margin-top: 35upx;
			height: 100upx;
			align-items: center;
			padding: 0 30upx;

			&.border-all {
				&:after {
					border: 1px solid #D0D0D0;
					border-radius: 100upx;
				}
			}

			.iconfont {
				width: 65upx;
				font-size: 44upx;
				align-items: center;

				&:after {
					margin-left: 20upx;
					content: '';
					width: 2upx;
					height: 35upx;
					background: #D0D0D0;
					display: block;
				}
			}

			.login-input {
				flex: 1;

				input {
					font-size: 28upx;
					color: #333333;
					padding-left: 20upx;
				}
			}

			.code-sx {
				content: '';
				width: 2upx;
				height: 25upx;
				background: #D0D0D0;
				margin-right: 25upx;
			}

			.codeimg {
				font-size: 24upx;
				color: #999999;
			}
		}

		.login-btn {
			margin-top: 70upx;
			height: 96upx;
			width: 100%;
			background: linear-gradient(-90deg, rgba(80, 85, 168, 1), rgba(104, 110, 210, 1));
			border-radius: 47upx;
			font-size: 34upx;
			color: #ffffff;
		}

		.login-tip {
			padding-top: 26upx;
			font-size: 22upx;
			color: #666666;
			text-align: center;

			navigator {
				margin-left: 10upx;
				display: inline-block;
				color: #5055A8;
			}
		}
	}

	.login-footer {
		padding: 0 70upx;

		.footer-tip {
			align-items: center;
			font-size: 24upx;
			color: #999999;
			text-align: center;

			&:before {
				flex: 1;
				content: '';
				height: 2upx;
				background: #D0D0D0;
				margin-right: 30upx;
			}

			&:after {
				margin-left: 30upx;
				flex: 1;
				content: '';
				height: 2upx;
				background: #D0D0D0;
			}

		}

		.footer-other {
			padding: 40upx 0 100upx 0;
			justify-content: center;

			.other-list {
				width: 80upx;
				height: 80upx;
				margin: 0 75upx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
