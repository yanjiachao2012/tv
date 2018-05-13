<template>
	<el-aside class="left-aside" width='360px'>
		<h5 class="add-floor bg-white"> <i class="el-icon-circle-plus-outline icon-plus"></i>
			添加电视
		</h5>
		<div class="wrap-floor" @mouseover="showScrollBar" @mouseout="hiddenScrollBar" :class="{show:isHover}">
			<ul>
				<li class="floor-item bg-white" v-dragging="{item:item,list:floors,group:'item1'}" v-for="(item,index) in floors" :key="item.id" :class="{'active-item':index==activeItem}" @click="selectFloor(index,item.planId,item.name)" @mouseover="hoverItem(index)">
					<h6 class="floor-title">{{item.type}}F</h6>
					<!-- <span class="floor-plan">{{item.name}}使用中</span>
					<p class="floor-address">3f</p> -->
					<el-row type="flex" class="floor-bottom">
						<el-col :span="12">
							<span class="plan-name">{{item.name}}</span>
						</el-col>
						<el-col :span="12" class="textR">
							22f
						</el-col>
					</el-row>
					  <div class="pop-tip">
					  	<i class="floor-more"></i>
							<ul class="pop-content">
							  <li class="pop-item" @click="test()">编辑</li>
							  <li class="pop-item">删除</li>
							</ul>
					  </div>
				    
					
				</li>
			</ul>
		</div>
	</el-aside>
</template>
<script>
import {floor} from '../../service/getData.js';
import bus from '../../config/eventBus.js';
import {setStore} from '../../config/_common.js';
	export default {
  	data(){
        return{
        	floors:[],
        	activeItem:0,
        	hoverIndex:null,
        	isHover:false,
        }
    },
    mounted(){
    	floor().then(resp=>{
				if(resp.status==200){
					return resp.data
				}else{
					console.log('不是json数据')
				}
			}).then(json=>{
				this.floors=json.detail
        setStore('floorsList',json.detail)//存取楼层数据给全部方案调用
        this.$emit('planId',json.detail[0].planId)
        bus.$emit('defaultPlan',json.detail[0].name)
			}).catch(error=>{
				console.log(error)
			})
    },
    methods:{
      selectFloor(index,planId,name){
      	this.activeItem=index
      	this.$emit('planId',planId)
      	bus.$emit('defaultPlan',name)
      },
      hoverItem(index){
        this.hoverIndex=index;
      },
      test(){
      	alert('1')
      },
      showScrollBar(){
      	this.isHover=true;
      },
      hiddenScrollBar(){
      	this.isHover=false;
      }
    }
  }
</script>
<style lang="scss">

</style>