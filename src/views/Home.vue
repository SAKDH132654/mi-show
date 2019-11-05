<template>
	
	<div class="home" v-if="data.data" >
		
		<!--表单组件： 搜索 -->
		<van-row>
			<van-col span="3">
				<div id="img">
					<img src="../img/mi.png">
				</div>
			</van-col>
			<van-col span="18">
				<van-search
					:v-model="value"
					placeholder="请输入搜索关键词"
					show-action
					shape="round"
					@search="onSearch"
					>
					<div slot="action" @click="onSearch"></div>
				</van-search>
			</van-col>
			<van-col span="3">
				<div id="icon">
					<van-icon size="30px" name="user-circle-o" />
				</div>
			</van-col>
		</van-row>
		
		<!--导航组件： 标签 -->
		<van-tabs v-model="active" >
			<van-tab v-for="item in data.data.tabs" :title="item.name">
				
			<!-- 推荐页面 -->
				<div class="cotainer" v-show="active==0">
					<!--展示组件： 轮播图 -->
					<van-swipe :autoplay="3000">
						<van-swipe-item v-for="(image, index) in data.data.data.sections[0].body.items" :key="index">
					    <img class="full" :src="image.img_url_webp" />
						</van-swipe-item>
					</van-swipe>
					
					<!--导航组件：宫格1 -->
					<van-grid icon-size="72px" :column-num="5">
						<van-grid-item
							v-for="(value,index) in data.data.data.sections[1].body.items"
							:key="index"
							:icon="value.img_url_webp"
						/>
					</van-grid>
					<!--导航组件： 宫格2 -->
					<van-grid icon-size="72px" :column-num="5">
						<van-grid-item
							v-for="(value,index) in data.data.data.sections[2].body.items"
							:key="index"
							:icon="value.img_url_webp"
						/>
					</van-grid>
					
					<!-- 基础组件：布局 -->
					<van-row>
						<van-col span="12"><img width="100%" src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32b5d24417b673008f386592c4d17046.jpg?thumb=1&w=358&h=508" alt=""></van-col>
							<van-row flex-wrap="wrap" justify-content="space-around">
							<van-col span="12"><img width="100%" src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1480d862e1f5a41e5adae8c030eef511.jpg?thumb=1&w=358&h=252" alt=""></van-col>
							<van-col span="12"><img width="100%" src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce52965fb5e13b29b6f192f4224154cc.jpg?thumb=1&w=358&h=252" alt=""></van-col>
							</van-row>
						<van-col span="24"><img width="100%" src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/54cbbe787b6269d434b26bd80de4d6a4.jpg?thumb=1&w=720&h=280" alt=""></van-col>
						<van-col span="24"><img width="100%" src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e32eea5c3c27062019f9ac6434b351df.jpg?thumb=1&w=720&h=440" alt=""></van-col>
					</van-row>
					
					<!-- 基础组件：布局1 -->
					<van-row  gutter="20">
					  <van-col span="12" v-for="(item,index) in data.data.data.sections[10].body.items" :key="index">
						  <img class="full" :src="item.img_url_webp" alt="">
						  <p>{{item.product_name}}</p>
						  <span>{{item.product_brief}}</span>
						  <p>￥{{item.product_price}}</p>
						  <van-button type="danger">立即购买</van-button>
					  </van-col>
					</van-row>
					
					<!-- 基础组件：布局2 -->
					<van-row  gutter="20">
					  <van-col span="12" v-for="(item2,index) in data.data.data.sections[12].body.items" :key="index">
							<img class="full" :src="item2.img_url_webp" alt="">
							<p>{{item2.product_name}}</p>
							<span>{{item2.product_brief}}</span>
							<p>￥{{item2.product_price}}</p>
							<van-button type="danger">立即购买</van-button>
						</van-col>
					</van-row>
					
					<!-- 基础组件：布局3 -->
					<van-row  gutter="20">
						<van-col span="12" v-for="(item1,index) in data.data.data.sections[14].body.items" :key="index">
							<img class="full" :src="item1.img_url_webp" alt="">
							<p>{{item1.product_name}}</p>
							<span>{{item1.product_brief}}</span>
							<p>￥{{item1.product_price}}</p>
							<van-button type="danger">立即购买</van-button>
						</van-col>
					</van-row>
					<hr>
					<div class="ti"><a href="#">更多小米手机产品></a></div>
					
					<!-- 基础组件：布局4 -->
					<van-row>
						<van-col span="24"><img width="100%" src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad96e9decd39cf161bb27825e1e72f72.jpg?thumb=1&w=720&h=280" alt=""></van-col>
						<van-col span="24"><img width="100%" src="http://i8.mifile.cn/v1/a1/34cc562e-8dd3-61e9-0209-395edb9237a1.webp" alt=""></van-col>
					</van-row>
					
					<!-- 基础组件：布局4 -->
					<van-row  gutter="20">
						<van-col span="12" v-for="(item1,index) in data.data.data.sections[22].body.items" :key="index">
							<img class="full" :src="item1.img_url_webp" alt="">
							<p>{{item1.product_name}}</p>
							<span>{{item1.product_brief}}</span>
							<p>￥{{item1.product_price}}</p>
							<van-button type="danger">立即购买</van-button>
						</van-col>
					</van-row>
					
					<!-- 基础组件：布局5 -->
					<van-row  gutter="20">
						<van-col span="12" v-for="(item1,index) in data.data.data.sections[24].body.items" :key="index">
							<img class="full" :src="item1.img_url_webp" alt="">
							<p>{{item1.product_name}}</p>
							<span>{{item1.product_brief}}</span>
							<p>￥{{item1.product_price}}</p>
							<van-button type="danger">立即购买</van-button>
						</van-col>
					</van-row>
					
					<!-- 基础组件：布局6 -->
					<van-row  gutter="20">
						<van-col span="12" v-for="(item1,index) in data.data.data.sections[26].body.items" :key="index">
							<img class="full" :src="item1.img_url_webp" alt="">
							<p>{{item1.product_name}}</p>
							<span>{{item1.product_brief}}</span>
							<p>￥{{item1.product_price}}</p>
							<van-button type="danger">立即购买</van-button>
						</van-col>
					</van-row>
					
					<hr>
					<div class="ti"><a href="#">更多小米电视产品></a></div>
					
					<!-- 基础组件：布局7 -->
					<van-row>
						<van-col span="24"><img width="100%" src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f782193eab48f4348405b4b12c47ace7.jpg?thumb=1&w=720&h=280" alt=""></van-col>
						<van-col span="24"><img width="100%" src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fa21d026bd0a93b16b38ee20e96cab.jpg?thumb=1&w=720&h=440" alt=""></van-col>
					</van-row>
					
					<!-- 基础组件：布局8 -->
					<van-row  gutter="20">
						<van-col span="12" v-for="(item1,index) in data.data.data.sections[34].body.items" :key="index">
							<img class="full" :src="item1.img_url_webp" alt="">
							<p>{{item1.product_name}}</p>
							<span>{{item1.product_brief}}</span>
							<p>￥{{item1.product_price}}</p>
							<van-button type="danger">立即购买</van-button>
						</van-col>
					</van-row>
					
					<!-- 基础组件：布局9 -->
					<van-row  gutter="20">
						<van-col span="12" v-for="(item1,index) in data.data.data.sections[36].body.items" :key="index">
							<img class="full" :src="item1.img_url_webp" alt="">
							<p>{{item1.product_name}}</p>
							<span>{{item1.product_brief}}</span>
							<p>￥{{item1.product_price}}</p>
							<van-button type="danger">立即购买</van-button>
						</van-col>
					</van-row>
					
					<!-- 基础组件：布局10 -->
					<van-row  gutter="20">
						<van-col span="12" v-for="(item1,index) in data.data.data.sections[38].body.items" :key="index">
							<img class="full" :src="item1.img_url_webp" alt="">
							<p>{{item1.product_name}}</p>
							<span>{{item1.product_brief}}</span>
							<p>￥{{item1.product_price}}</p>
							<van-button type="danger">立即购买</van-button>
						</van-col>
					</van-row>
					
					<hr>
					<div class="ti"><a href="#">更多小米笔记本产品></a></div>
					
					<!-- 基础组件：布局11 -->
					<van-row>
						<van-col span="24"><img width="100%" src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3aee9e5b73a7b1dfeeebfd632b744e14.jpg?thumb=1&w=720&h=280" alt=""></van-col>
						<van-col span="24"><img width="100%" src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f687283873be4879d427a9170c21d7dd.jpg?thumb=1&w=720&h=440" alt=""></van-col>
					</van-row>
					
					<!-- 基础组件：布局12 -->
					<van-row  gutter="20">
						<van-col span="12" v-for="(item1,index) in data.data.data.sections[46].body.items" :key="index">
							<img class="full" :src="item1.img_url_webp" alt="">
							<p>{{item1.product_name}}</p>
							<span>{{item1.product_brief}}</span>
							<p>￥{{item1.product_price}} <span style="text-decoration: line-through; font-size: 2px; color: red;">{{item1.product_org_price}}</span></p>
						</van-col>
					</van-row>
					
					<!-- 基础组件：布局13 -->
					<van-row gutter="20">
						<van-col span="12" v-for="(item1,index) in data.data.data.sections[48].body.items" :key="index">
							<img class="full" :src="item1.img_url_webp" alt="">
							<p>{{item1.product_name}}</p>
							<span>{{item1.product_brief}}</span>
							<p>￥{{item1.product_price}} <span style="text-decoration: line-through; font-size: 2px; color: red;">{{item1.product_org_price}}</span></p>
						</van-col>
					</van-row>
					
					<hr>
					<div class="ti"><a href="#">了解小米></a></div>
				</div>
				
			<!-- 手机页面 -->
				<div class="cotainer" v-show="active==1" style="background-color: #250168;">
				
					<van-row>
						<van-col span="24"><img width="100%" :src="data1.data.data.sections[0].body.items[0].img_url_webp" alt=""></van-col>
						<van-col span="24"><img width="100%" :src="data1.data.data.sections[4].body.items[0].img_url_webp" alt=""></van-col>
					</van-row>
					
					<van-swipe :autoplay="3000">
						<van-swipe-item v-for="(item, index) in data1.data.data.sections[6].body.items" :key="index">
							<van-row type="flex" justify="space-around">
								<van-col span="15" style="background-color: white;">
									<img class="full" :src="item.img_url_webp" alt="">
									<p>{{item.product_name}}</p>
									<span>{{item.product_brief}}</span>
									<p>￥{{item.product_price}}</p>
									<van-button type="danger">立即购买</van-button>
									<br>
									<br>
								</van-col>
							</van-row>
						</van-swipe-item>
					</van-swipe>
					
					<van-row>
						<van-col span="24"><img width="100%" :src="data1.data.data.sections[8].body.items[0].img_url_webp" alt=""></van-col>
						<van-col span="8" v-for="item in data1.data.data.sections[9].body.items">
							<img class="full" :src="item.img_url_webp" alt="">
						</van-col>
						<van-col span="8" v-for="item in data1.data.data.sections[10].body.items">
							<img style="margin-top: -4px;" class="full" :src="item.img_url_webp" alt="">
						</van-col>
						<van-col span="8" v-for="item in data1.data.data.sections[11].body.items">
							<img style="margin-top: -4px;" class="full" :src="item.img_url_webp" alt="">
						</van-col>
						<van-col span="24"><img style="margin-top: -4px;" width="100%" :src="data1.data.data.sections[12].body.items[0].img_url_webp" alt=""></van-col>
						<van-col span="24"><img width="100%" :src="data1.data.data.sections[14].body.items[0].img_url_webp" alt=""></van-col>
					</van-row>
					
					<van-row style="background-color: white; margin-top: -4px; margin-bottom: 15px;" >
						<van-col span="24"><img width="100%" :src="data1.data.data.sections[16].body.items[0].img_url_webp" alt=""></van-col>
						<van-col span="18">{{data1.data.data.sections[16].body.items[0].product_name}}</van-col>
						<van-col style="color: red" span="6">￥{{data1.data.data.sections[16].body.items[0].product_price}} 起</van-col>
						<van-col span="18">{{data1.data.data.sections[16].body.items[0].product_brief}}</van-col>
						<button style="background-color: red">{{data1.data.data.sections[16].body.items[0].btn_txt}}</button>
					</van-row>
					
					<van-row style="background-color: white; margin-top: -4px; margin-bottom: 2px;" >
						<van-col span="24"><img width="100%" :src="data1.data.data.sections[18].body.items[0].img_url_webp" alt=""></van-col>
						<van-col span="18">{{data1.data.data.sections[18].body.items[0].product_name}}</van-col>
						<van-col style="color: red" span="6">￥{{data1.data.data.sections[18].body.items[0].product_price}} 起</van-col>
						<van-col span="18">{{data1.data.data.sections[18].body.items[0].product_brief}}</van-col>
						<button style="background-color: red">{{data1.data.data.sections[18].body.items[0].btn_txt}}</button>
					</van-row>
					
					<van-row  gutter="10">
						<van-col span="12" v-for="(item,index) in data1.data.data.sections[20].body.items" :key="index">
							<div style="background-color: white;">
								<img class="full" :src="item.img_url_webp" alt="">
								<p>{{item.product_name}}</p>
								<span>{{item.product_brief}}</span>
								<p>￥{{item.product_price}}</p>
								<van-button type="danger">立即购买</van-button>
							</div>
						</van-col>
					</van-row>
					<van-col style="margin-top="10px";"><img width="100%" :src="data1.data.data.sections[22].body.items[0].img_url_webp" alt=""></van-col>
					
					
					
				</div>
				
			<!-- 智能页面 -->
				<div class="cotainer" v-show="active==2">
					<van-row>
						<van-col span="24"><img width="100%" :src="data2.data.data.sections[0].body.items[0].img_url_webp" alt=""></van-col>
						<van-col span="24"><img class="a" width="100%" :src="data2.data.data.sections[1].body.items[0].img_url_webp" alt=""></van-col>
					</van-row>
					
					<van-row>
					  <van-col span="8" v-for="(item,index) in data2.data.data.sections[2].body.items" :key="index">
						  <img  class="full a" :src="item.img_url_webp" alt="">
					  </van-col>
					  <van-col span="24"><img class="full a" src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ecbbbdf7574d8ec021dcfdf1a72ebcc.jpg?f=webp" alt=""></van-col>
					</van-row>
				</div>
			</van-tab>
		</van-tabs>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
	  
	</div>
</template>
<script>
import {data1,data2,data3} from '../data.js'
export default {
	data(){
		return{
			value:"",
			active:1,
			data:{},
			data1:{},
			data2:{},
			data3:{},
		}
	},
	watch:{
		active:function(oldvalue,newvalue){
			console.log(this.active);
		}
	},
	methods:{
		onSearch(){
			
		},
		getRecomendDate(){
			
			this.data1=data1;
			this.data2=data2;
			this.data3=data3;
			
			if(localStorage.getItem("data")){
				// console.log("页面数据有缓存，不需要请求网络");
				this.data=JSON.parse(localStorage.getItem("data"));
			}
			else{
				this.$http({
					url:'http://biger.applinzi.com/page.php',
					method:'get',
				}).then(res=>{
					console.log(res.data);
					this.data=res.data;
					
					localStorage.setItem("data",JSON.stringify(this.data))
				})
			}
		}
	},
	created() {
		this.getRecomendDate();
		
	},
	components: {
	  
	}
}
</script>

<style>
	.full{
		width: 100%;
	}
	.ti{
		background: #fff;
		height: 1rem;
		line-height: 1rem;
		margin-bottom: 10px;
		font-size: 29px;
		text-align: center;
	}
</style>