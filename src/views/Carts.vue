<template>
	<div class="carts">
		<div class="header">
			<van-nav-bar title="购物车" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
				<van-icon name="search" slot="right" />
			</van-nav-bar>
		</div>
		<div class="count">
			<table border="2px" cellpadding="20px" cellspacing="5px" class="table">
				<tr> <th>商品id</th> <th>商品名字</th> <th>商品价格</th> <th>商品数量</th> <th>商品操作</th> </tr>
				<tr> <td>100</td> <td>手机</td> <td>888</td> <td>2</td> <td><button>移除</button></td> </tr>
			</table>
		</div>
			
	</div>
</template>
<script>
	import Vue from 'vue';
	import { Toast } from 'vant';
	
	Vue.use(Toast);
	
	export default{
		methods:{
			onClickLeft(){
				this.$router.go(-1);
			},
			onClickRight(){
				this.$toast('搜索');
			}
		}
	}
</script>

<style>
</style>
