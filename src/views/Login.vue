<template>
	<div class="title" >
		<van-nav-bar style="background-color: #ebebeb;"
		  left-text="返回"
		  right-text="首页"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
		
		<div class="login">
			<img src="../img/mi.png" alt="">
			<br>
			<h3>小米账号登录</h3>
			
			<div class="log">
				<van-cell-group>
					<van-field
						v-model="username"
						required
						clearable
						label="用户名"
						right-icon="question-o"
						placeholder="请输入用户名"
						@click-right-icon="$toast('question')"
					/>
					<van-field
						v-model="password"
						type="password"
						label="密码"
						placeholder="请输入密码"
						required
					/>
				</van-cell-group>
			</div>
			<van-button type="primary" @click="loGin1">登录</van-button>
		</div>
	</div>
	
	
</template>

<script>
	import Vue from 'vue';
	import { Toast } from 'vant';
	
	Vue.use(Toast);
	export default{
		data(){
			return{
				username:"",
				password:""
				
			}
		},
		methods: {
		    onClickLeft() {
				this.$router.go(-1);
		    },
		    onClickRight() {
				this.$router.push(`/`);
		    },
			loGin1(){
				if(this.username=="lrx001"&this.password==123456789){
					this.$router.push(`/Login1`);
					this.$store.commit("setshowa",false)
				}
				else
				{
					alert("密码或用户名不正确")
				}
			}
		}
		
	}
</script>

<style>
</style>
