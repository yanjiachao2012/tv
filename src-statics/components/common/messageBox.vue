<template>
	<el-dialog :visible.sync="dialogVisible" class="dialog-container" width="600px" center :show-close="false">
		<div class="remove-content" v-if="removeBox">
		  你确定删除吗？
		</div>
	  <div class="content" v-else>
	  	  <el-input v-model="input" class="content-input" placeholder="请填写方案名称"></el-input>
	  </div>
	  <div slot="footer" class="dialog-footer">
	  	<i class="icon-close" @click="cancalBtn"></i>
	  	<div v-if="removeBox">
	  		<el-button class="sure-button" type="primary">确定</el-button>
	  		<el-button class="cancel-button" @click="cancalBtn">取消</el-button>
	  	</div>
	    <el-button type="primary" class="sure-button" round @click="buildHandler"  v-if="!removeBox">创建</el-button>
	  </div>
	</el-dialog>
</template>
<script>

		export default{
       data(){
       	 return{
       	 	 input:'',
       	 	 dialogVisible:true,
       	 }
       },
       props: ['removeBox'],
       methods: {
				cancalBtn:function(){
					//this.dialogVisible = false;
					this.$emit('closeMessage')
				},
				buildHandler(){
          
					var _this=this;
					if(_this.input.length==0){
						 this.$message('方案名称不能为空');
						return;
					}
					//this.dialogVisible = false;
					this.$emit('closeMessage')
					this.$router.push({
		        path:'/schemes/addScheme',
		        query: {   
                schemeTitle: this.input
            }
		      });
				}
	    }
		}
</script>