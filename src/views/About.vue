<template>
	<div class="About">
		<div class="heade">
			<div class="head" style="display: flex;">
				<img style="width: 70px;height: 70px;" src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt="">
				<div style="position: relative; display: inline-block; margin-top: 20px; font-size: 30px; color: white;" >
					<span @click="login1">登录</span><span style="color: black;">/</span><span>注册</span>
				</div>
			</div> 
			<div style="border-bottom: 1px solid #919295;">
				<van-nav-bar
				  left-text="我的订单"
				  right-text="全部订单"
				  left-arrow
				  @click-right="onClickRight"
				/>
			</div>
		</div>
		<van-row type="flex" justify="center">
			<van-col span="6"><van-icon name="pending-payment" size="50px" /></van-col>
			<van-col span="6"><van-icon name="logistics" size="50px" /></van-col>
			<van-col span="6"><van-icon name="bulb-o" size="50px" /></van-col>
		</van-row>
		<van-row type="flex" justify="center">
			<van-col span="6"><span>未付款</span></van-col>
			<van-col span="6"><span>待收货</span></van-col>
			<van-col span="6"><span>退维修</span></van-col>
		</van-row>
		<div style="border-bottom: 15px solid #BBBBBB;"></div> 
		
		<div style="border-bottom: 1px solid #919295; ">
			<van-nav-bar
			  left-text="会员中心"
			  right-text=">"
			  left-arrow
			  @click-right="onClickRight"
			/>
		</div>
			
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			onClickRight(){
				this.$router.push(`/Login`);
			},
			login1(){
				this.$router.push(`/Login`);
			}
		},
		
	}
</script>
