<template>
	<div class="container-head">
		  <i class="go-back pull-left" v-if="goBack" @click="$router.go(-1)"></i>
      <h1 class="title"><slot name="markName"></slot>{{headTitle}}</h1>
    	<div class="head-right">
        <slot name="allplan"></slot>
    		<span class="item-btn" v-if="!isShow" @click="showM">设置</span>
    		
	    	
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
   props: ['headTitle','goBack','isShow'],
   components:{
   	 messagebox
	 },
   methods: {
   	showM(){
      this.showMessage=true
   	}
  }
}
</script>
	<style lang="scss">

		
	</style>