<template>
	<div class="container-head">
		  <i class="go-back pull-left" v-if="goBack" @click="$router.go(-1)"></i>
    	<h1 class="title">{{headTitle}}</h1>
    	<div class="head-right">
    		<span class="item-btn" v-if="!isAddPlan" @click="showM">添加方案</span>
    		<router-link :to="{path: 'schemes'}" v-if="!isAddPlan" class="item-btn" tag='span' >
	    	全部方案
	    	</router-link>
    		<i class="user"><img class="pic" src="../../images/applogo.png" height="334" width="320" alt=""></i>
    	</div>
    	<messagebox v-if="showMessage" @closeMessage="showMessage = false"></messagebox>
  </div>
</template>
<script>
import messagebox from './messageBox.vue';
		export default{
       data(){
       	 return{
       	 	 input:'',
       	 	 showMessage:false
       	 }
       },
       props: ['headTitle','goBack','isAddPlan'],
       components:{
       	 messagebox
			 },
       methods: {
       	showM(){
          this.showMessage=true
       	},
				cancalBtn(){
					this.dialogVisible = false
				},
				buildHandler(){

					var _this=this;
					if(_this.input.length==0){
						 this.$message('方案名称不能为空');
						return;
					}
					this.dialogVisible = false;
					this.$router.push({
		         name:'addScheme',
		         params:{
		          schemeTitle:_this.input
		         }
		      });
				}
	    }
		}
</script>
	<style lang="scss">

		
	</style>