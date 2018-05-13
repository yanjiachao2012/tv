<template>
	<el-dialog :visible.sync="dialogVisible" class="date-dialog dialog-container" @close='close' width="600px" center :show-close="false">
		<timeSelect></timeSelect>
	  <div slot="footer" class="dialog-footer">
	  	<i class="icon-close" @click="close"></i>
	    <el-button type="primary" class="sure-button" round @click="buildHandler">确定</el-button>
	    <p class="time-tip">说明：时间叠加时，后添加的时间优先</p>
	  </div>

	</el-dialog>
</template>
<script>
  import timeSelect from './timeSelect.vue';
	export default{
    data(){
     	 return{
     	 	 input:'',
     	 	 dialogVisible:true,
     	 }
    },
    components:{
    	timeSelect
    },
     props: [],
     methods: {
			close(){
	   		this.$emit('closeMessage')
	   	},
			buildHandler(){
				this.$emit('closeMessage')
			}
    }
	}
</script>