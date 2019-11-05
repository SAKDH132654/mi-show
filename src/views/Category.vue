<template>
	<div class="category">
		<div class="header">
			<van-nav-bar title="分类" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
				<van-icon name="search" slot="right" />
			</van-nav-bar>
		</div>
		<div class="count">
			<van-row>
				<van-col span="6">
					<van-sidebar v-model="activeKey">
						<van-sidebar-item :title="item.category_name"  v-for="item in category.data" :key="item.category_name"/>
					</van-sidebar>
				</van-col>
				<van-col span="18">
					<div v-for="(item,index) in category.data" v-show="activeKey==index">
						
						<div v-for="item1 in item.category_list">
							<div v-if="item1.view_type=='cells_auto_fill'">
								<img class="full" :src="item1.body.items[0].img_url_webp" alt="">
							</div>
							
							<div v-else-if="item1.view_type=='category_title'" style="width: 50%; margin: 0 auto;">
								<van-divider>{{item1.body.category_name}}</van-divider>
							</div>
							
							<div v-else-if="item1.view_type=='category_group'">
								<van-grid :column-num="3" icon-size="57">
									<van-grid-item
										v-for="item2 in item1.body.items"
										:icon="item2.img_url_webp"
										:text="item2.product_name"
									/>
								</van-grid>
							</div>
							
						</div>
					</div>
				</van-col>
			</van-row>
			
		</div>
		
		
	</div>
</template>

<script>
import {category} from '../data.js'

import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);


export default{
	data(){
		return{
			activeKey:0
		}
	},
	created() {
		this.category=category;
		// console.log(category);
	},
	methods: {
		onClickLeft() {
			this.$router.go(-1);
	    },
	    onClickRight() {
			this.$toast('搜索');
	    }
	}
}
</script>

<style>
</style>
