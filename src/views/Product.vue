<template>
	<div class="product">
		<h1>商品{{this.$route.params.id}}</h1>
		<van-icon @click="$router.go(-1)" class="back" name="arrow-left" size="30px"/>
		
		<div>
			<van-swipe :autoplay="3000">
				<van-swipe-item v-for="(item,index) in product.data.goods_info[0].gallery_v3" :key="index">
			    <img class="full" :src="item.img_url"/>
				</van-swipe-item>
			</van-swipe>
			
			<van-goods-action >
				<van-goods-action-icon icon="wap-home-o" text="首页"  @click="gohome()"/>
				<van-goods-action-icon icon="cart-o" text="购物车" :info="num" @click="gocarts()"/>
				<van-goods-action-button type="warning" text="加入购物车" @click="addnum()" />
				<van-goods-action-button type="danger" text="立即抢购" />
			</van-goods-action>
		
		</div>
	</div>
</template>

<script>
	import {product} from '../data.js'
	
	export default{
		data(){
			return{
				"product":product,
				num:1
			}
		},
		methods:{
			gohome(){
				this.$router.push(`/`);
			},
			gocarts(){
				this.$router.push(`/Carts`);
			},
			addnum(){
				
				this.$data.num++
				
				
			}
		}
	
	}
</script>

<style>
</style>
