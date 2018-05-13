<template>
  <el-select class="myselect" v-model="value" @change="obtainValue" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
<script>
  import bus from '../../config/eventBus.js';
  
  export default {
    data() {
      return {
        value:''
      }
    },
    props:['options'],
    mounted(){
      bus.$on('defaultPlan',(data)=>{
        this.value=data
      })
      if(this.options[0]){
        this.value=this.options[0].label
      }
      
      //this.$nextTick(() => {
       // this.value=this.defaultValue;
        
      //})
    },
    methods:{
      /*
      *回传给父元素
      **/
      obtainValue(){
        this.$emit('selectValue',this.value)
      }
    }
  }
</script>
<style lang="scss">
	.myselect{
		.el-input__inner{
	    padding-left:0;
      padding-right:15px;
	    width:120px;
	    height:20px;
	    font-size:18px;
	    border:none;
	    background-color:transparent;
	  }
    .el-input{
     	.el-select__caret{
     		font-size:18px;
     	}
    } 
    .el-input__suffix{
      right:-10px;
    }
	} 
  .el-select-dropdown__item.selected{
    color:#333;
  }
	@media only screen and (max-width: 1366px){
		.myselect{
		.el-input__inner{
	    height:18px;
	    font-size:16px;

	  }
    
	} 
	}
</style>