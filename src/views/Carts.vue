<template>
	<div class="shopping">
		<van-nav-bar style="background-color: #ebebeb;" title="购物车" left-arrow  @click-left="onClickLeft" @click-right="onClickRight">
			<van-icon name="search" slot="right" />
		</van-nav-bar>
		<van-row style="width: 100%;height: 50px;"  @click="login">
			<van-col style="position: relative;top: 15px;" span="12">登录后享受更多优惠</van-col>
			<van-col style="position: relative;top: 15px;" span="12">去登录 <van-icon name="arrow" /> </van-col>
		</van-row>
		<van-row>
			<van-col style="background-color:#ebebeb;" span="24">
				<van-icon size=35 name="shopping-cart-o" />
				<span style="position: relative;top: -10px;">购物车还是空的</span>
				<van-button style="float: right;" plain type="primary"@click="goshow">去逛逛</van-button>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="24"><img width="100%" src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" alt=""></van-col>
		</van-row>
		<van-row gutter="2">
			<van-col span="12" v-for="item in carts.data.recom_list" >
				<img :src="item.image_url" style="width: 100%;" />
				<p style="color: red;">￥{{item.market_price}}</p>
				<p>{{item.name}}</p>
			</van-col>
		</van-row>
		<br>
		<br>
		<br>
	</div>
	
	
</template>

<script>
	import {carts} from '../data.js'
	import Vue from 'vue';
	import { Toast } from 'vant';
	
	Vue.use(Toast);
	export default{
		data(){
			return{
				carts:carts
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			onClickRight(){
				this.$toast('搜索');
			},
			login(){
				this.$router.push(`/Login`)
			},
			goshow(){
				this.$router.push(`/`)
			}
		}
	}
</script>

<style>
</style>
