<template>
	<view>
		<u-toast ref="uToast" />
		<u-calendar v-model="show" :mode="mode" @change="change"></u-calendar>
		<view class="time" @click="show=true">
			<view class="times">日期：</view>
			<view class="input">
				<u-input @click="show=true" v-model="jg_time" type="select" placeholder="日期" :border="border" />
			</view>
		</view>
		<view class="time">
			<view class="times">上班时长</view>
			<view class="input" style="margin-top: 5px;">
				<u-radio-group v-model="value1" @change="radioGroupChange">
					<u-radio active-color="#00d100" @change="radioChange" v-for="(item, index) in list1" :key="index"
						:name="item.name" :disabled="item.disabled">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
		</view>
		<u-line v-if="value1 == '小时' " color="#eeeeee" />
		<view class="money" v-if="value1 == '小时'">
			<view class="moneys">时长(小时)</view>
			<view class="input">
				<u-input type="text" @blur="Listeningfocus()"  v-model="officehour" placeholder="请输入具体上班小时,例如:1" :border="border" />
			</view>
		</view>
		<u-line v-if="value1 == '小时' " color="#eeeeee" />
		<view class="money" v-if="value1 == '小时'">
			<view class="moneys">单价(元)</view>
			<view class="input">
				<u-input type="text" v-model="officehourmoney" placeholder="请输入每小时多少钱,例如:50" :border="border" />
			</view>
		</view>
		<u-gap height="15" bg-color="#eeeeee"></u-gap>
		<u-line color="#eeeeee" />
		<view class="price">
			<view class="prices">是否加班</view>
			<view class="input">
				<u-input input-align="center" :border="border" v-model="isovertime" type="select"
					:select-open="actionSheetShow" @click="actionSheetShow = true"></u-input>
			</view>
		</view>
		<u-line v-if="isovertime == '有加班' " color="#eeeeee" />
		<view class="money" v-if="isovertime == '有加班'">
			<view class="moneys">时长(小时)</view>
			<view class="input">
				<u-input type="text" v-model="overtime" placeholder="请输入加班几小时(例如:1)" :border="border" />
			</view>
		</view>
		<u-line v-if="isovertime == '有加班' " color="#eeeeee" />
		<view class="money" v-if="isovertime == '有加班'">
			<view class="moneys">单价(元)</view>
			<view class="input">
				<u-input type="text" v-model="overtimecost" placeholder="请输入加班每小时单价(例如:50)" :border="border" />
			</view>
		</view>
		<u-gap height="15" bg-color="#eeeeee"></u-gap>

		<u-line color="#eeeeee" v-if="value1 !== '小时' " />
		<view class="cost" v-if="value1 !== '小时' ">
			<view class="costs">工资标准</view>
			<view class="input">
				<u-input type="text" v-model="wagelevel" placeholder="请填写一天多少钱(例如:400)" :border="border" />
			</view>
		</view>
		<u-gap height="15" bg-color="#eeeeee"></u-gap>
		<view class="cost">
			<view class="costs">当日工钱</view>
			<view class="input">
				<u-input type="text" v-model="todayincome" placeholder="上面填写完毕后,会自动计算" :border="border" />
			</view>
		</view>
		<u-line color="#eeeeee"/>
		<view class="identity">
			<view class="identity">老板名称</view>
			<view class="input">
					<u-input type="text" v-model="todayincome" placeholder="同一个老板名称,需保持一致(必填)" :border="border" />
			</view>
		</view>
		<u-line color="#eeeeee"/>
		<view class="identity">
			<view class="identity">项目名称</view>
			<view class="input">
					<u-input type="text" v-model="todayincome" placeholder="同一个工地名称,需保持一致(必填)" :border="border" />
			</view>
		</view>
		<u-gap height="15" bg-color="#eeeeee"></u-gap>
		<view class="content">
			<view style="margin-bottom: 15rpx;">备注、上传照片(最多6张，选填）：</view>
			<u-line color="#eeeeee" />
			<u-input v-model="model.content" :type="type" placeholder="请描述你的约课要求(5字以上)" :border="border"
				:height="height" :auto-height="autoHeight" />
		</view>
		<!-- <u-gap height="10" bg-color="#eeeeee"></u-gap> -->
		<!-- <view style="margin-left: 20rpx;margin-top: 15rpx;">上传照片(最多6张，选填)</view> -->
		<view style="padding: 20rpx;">
			<u-upload ref="uUpload" @on-success="bbb" @on-uploaded="aaa" :file-list="l" :action="action"
				:auto-upload="false" max-count="6"></u-upload>
		</view>
		<!-- 	<u-gap height="15" bg-color="#eeeeee"></u-gap> -->

		<view class="btn" @click="submit">
			<view class="btns">发布约课</view>
		</view>

		<u-action-sheet :list="actionSheetList" v-model="actionSheetShow" @click="actionSheetCallback"></u-action-sheet>
	</view>
</template>

<script>
	import * as api from '@/api/api.js'
	import http from '@/api/http.js'
	export default {
		data() {
			return {
				todayincome:'',//今日收入
				wagelevel: '', //工资标准，就是一天多少钱
				officehour: '', //上班如果是按小时计算，就显示此值
				officehourmoney: '', //上班如果是按小时计算，就显示一小时多少钱
				isovertime: '无加班', //加班选择
				overtime: '', //加班时长
				overtimecost: '', //加班费用
				show: false, //日历组件
				mode: 'date', //日历组件
				jg_time: '',
				fileName: [],
				imgList: [],
				u_id: '',
				u_ava: '',
				u_gender: '',
				u_name: '',
				action: http.baseUrl + '/upload/uploadYuepaiImg',
				value: '',
				type: 'textarea',
				border: false,
				height: 100,
				autoHeight: true,
				actionSheetShow: false,
				actionSheetList: [{
						text: '无加班'
					},
					{
						text: '有加班'
					}

				],
				value1: '1个工', //单选框组件 
				list1: [{ //单选框组件
						name: '1个工',
						disabled: false
					},
					{
						name: '半个工',
						disabled: false
					},
					{
						name: '小时',
						disabled: false
					},
					{
						name: '休息',
						disabled: false
					}
				],
			}
		},
		onLoad(res) {
			//console.log(res.title)
			/* this.model.title = res.title; */
			this.init();
		},
		  onShow() {  
		      /* console.log("aaa"); */
		        }, 
		methods: {
			 Listeningfocus(type,index){
			     console.log("触发");
			   },
		
			radioChange(e) {
				console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				console.log(e);
			},
/* 			calendar() {
				console.log("点击日历");
				this.show = true;
			}, */
			change(e) {
				this.jg_time = e.result;
				console.log(e);
			},

			//index   图片在数组中索引  data  是上传成功后服务器的回调
			bbb(data, index, lists, name) {
				this.fileName.push(data)
				console.log("进入BBBBBBB" + this.fileName);
				//	console.log(index + "index");
				//console.log(res.data + "data");
				//console.log(this.fileName + "fileName");
				//console.log("bbb执行"+data);
			},
			//图片上传完成后执行此方法
			aaa() {
				console.log("进入AAAAAAAAAAA" + this.fileName);
				uni.hideLoading();
				//let files = [];
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				// files = this.$refs.uUpload.lists.filter(val => {
				// 	return val.progress == 100;
				// })
				// 如果您不需要进行太多的处理，直接如下即可
				//files = this.$refs.uUpload.lists;
				// let name = [];
				// for (var i = 0; i < files.length; i++) {
				// 	name[i] = files[i].url
				// }
				//console.log(name)
				api.request({
					url: '/yuePai/saveYuepaiInfo',
					method: 'POST',
					data: {
						//urls: name,//图片名称列表
						//urlsList: this.fileName,//图片名称列表
						urls: JSON.stringify(this.fileName), //图片名称列表
						pid: this.u_id,
						pname: this.u_name,
						pava: this.u_ava,
						pgender: this.u_gender,
						ptime: this.model.p_time,
						pplace: this.model.p_place,
						pchengben: this.model.p_chengben,
						title: this.model.title,
						identity: this.model.identity,
						content: this.model.content,
						faceplace: this.model.faceplace,
						payment: this.model.price,
						money: this.model.money,
						ptags: JSON.stringify(this.list2)
					},
				}).then(res => {
					if (res.data.data == 1) {
						uni.reLaunch({
							url: 'successYuepai'
						})
					} else if (res.data.data == 0) {
						uni.hideLoading()
						this.$refs.uToast.show({
							title: '发表失败',
							type: 'error'
						})
					}
				});
			},
			//信息初始化
			init() {
				uni.getStorage({
					key: 'userInfo',
					success: (res) => {
						this.u_id = res.data.userId;
						this.u_ava = res.data.avatarUrl;
						this.u_name = res.data.username;
						this.u_gender = res.data.gender;
					}
				})
			},
			//选项确认
			actionSheetCallback(index) {
				uni.hideKeyboard();
				this.isovertime = this.actionSheetList[index].text;
			},
			
			//提交
			submit() {
				this.imgList = this.$refs.uUpload.lists;
				//console.log(this.imgList)
				if (this.model.content == '') {
					this.$refs.uToast.show({
						title: '内容不能为空哦！',
						type: 'error'
					})
				} else if (this.imgList.length == 0) {
					this.$refs.uToast.show({
						title: '图片不能为空哦！',
						type: 'error'
					})
				} else if (this.list2.length == 0) {
					this.$refs.uToast.show({
						title: '标签不能为空哦！',
						type: 'error'
					})
				} else {
					this.$refs.uUpload.upload();
					uni.showLoading({
						title: '发布中，请稍后'
					})
				}





			}
		}

	}
</script>

<style lang="scss" scoped>

	.content {
		padding: 20rpx;
	}

	.time {
		position: relative;
		height: 100rpx;

		.times {
			position: absolute;
			width: fit-content;
			top: 30rpx;
			left: 20rpx;
		}

		.input {
			position: absolute;
			right: 20rpx;
			width: 75%;
			top: 15rpx;
		}
	}

	.place {
		position: relative;
		height: 100rpx;

		.places {
			position: absolute;
			width: fit-content;
			top: 30rpx;
			left: 20rpx;
		}

		.input {
			position: absolute;
			right: 20rpx;
			width: 75%;
			top: 15rpx;
		}
	}

	.cost {
		position: relative;
		height: 100rpx;

		.costs {
			position: absolute;
			width: fit-content;
			top: 30rpx;
			left: 20rpx;
		}

		.input {
			position: absolute;
			right: 20rpx;
			width: 75%;
			top: 15rpx;
		}
	}

	.money {
		position: relative;
		height: 100rpx;

		.moneys {
			position: absolute;
			width: fit-content;
			top: 30rpx;
			left: 20rpx;
		}

		.input {
			position: absolute;
			right: 20rpx;
			width: 75%;
			top: 15rpx;
		}
	}


	.price {
		position: relative;
		height: 100rpx;

		.prices {
			position: absolute;
			width: fit-content;
			top: 30rpx;
			left: 20rpx;
		}

		.input {
			width: 70%;
			position: absolute;
			right: 60rpx;
			top: 15rpx;
		}
	}

	.faceplace {
		position: relative;
		height: 100rpx;

		.faceplaces {
			position: absolute;
			width: fit-content;
			top: 30rpx;
			left: 20rpx;
		}

		.input {
			width: 70%;
			position: absolute;
			right: 60rpx;
			top: 15rpx;
		}
	}

	.identity {
		position: relative;
		height: 100rpx;

		.identity {
			position: absolute;
			width: fit-content;
			top: 30rpx;
			left: 20rpx;
		}

		.input {
			width: 70%;
			position: absolute;
			right: 60rpx;
			top: 15rpx;
		}
	}




	.skill-item {
		display: inline-block;
		width: 100rpx;
		//height:50rpx;
		border: 2rpx solid #554d84;
		border-radius: 10rpx;
		font-size: 30rpx;
		//color:#555;
		text-align: center;
		line-height: 50rpx;
		margin-left: 15rpx;
		margin-bottom: 15rpx;
	}

	.active {
		//border:2rpx solid #DD524D;
		color: white;
		background: #554d84;
	}

	.taps {
		padding: 20rpx;
		//margin-bottom:80rpx ;
	}

	.btn {
		//position: fixed;
		width: 100%;
		height: 100rpx;
		text-align: center;
		background-image: linear-gradient(to bottom right, #81dde1, #88eec9);

		//bottom: 0;
		.btns {
			padding-top: 25rpx;
			font-size: 35rpx;
			color: white;
		}
	}
</style>
