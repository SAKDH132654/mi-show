<template>
	<div class="login1">
		<h2>已登录</h2>
		<div>
			<van-button type="danger" @click="out">退出</van-button>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			out(){
				this.$store.commit("setshowa",true);
				this.$router.push(`/`)
			}
		}
	}
</script>

<style>
</style>
