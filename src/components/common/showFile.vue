	<template>
		<div>
			<el-row class="operate-row">
				<el-col :span="12">
					<el-button round class="btn"><span @click="backHome">首页</span><i class="el-icon-arrow-right"></i><span>{{fileName}}</span></el-button>
				</el-col>
				<el-col :span="12" class="operate-right">
					<el-button round class="btn" @click="backHome"><i class="icon-back"></i>返回</el-button>
				</el-col>
			</el-row>
			<el-row :gutter="0" style="margin-right:-10px;margin-left:-10px;" class="plan-row">
				<el-col class="row" v-dragging="{item:item,list:fileRender,group:fileRender}" v-for="(item,index) in fileRender" :key="item.id" >
	       <planItem :item="item" :index="index" @removePlan='removePlan'>
	         
	       </planItem>
	     </el-col>
	   </el-row>
     <messagebox v-if="showMessage" @sureEvent="sureEvent" remove-box="true" @closeMessage="showMessage=false"></messagebox>
		</div>
	</template>
	<script>
	import planItem from './planItem.vue';
	import messagebox from './messageBox.vue';
	export default{
		data(){
			return{
        showMessage:false,
        removeId:'',
        fileRender:[]
			}
		},
		components:{
      planItem,
      messagebox,
		},
		props:['fileList','fileName'],
		created(){
      
		},
		mounted(){
      this.fileRender=this.fileList;
      this.$dragging.$on('dragged', ({ value }) => {
      })
      this.$dragging.$on('dragend',(value)=>{
        console.log(this.fileRender)
      })
		},
		methods:{
			removePlan(id){
        this.showMessage=true;
        this.removeId=id;
      },
			backHome(){
        this.$emit('backHome')
			},
			removePlan(id){
        this.showMessage=true;
        this.removeId=id;
      },
      sureEvent(){//删除弹框确定按钮
        if(this.removeId!=''){
          this.fileRender=this.fileRender.filter(item=>{
            return item.id!=this.removeId;
          })
          this.$emit('updateList',this.removeId);
        }
        this.showMessage=false;
      },
		}
	}
	</script>