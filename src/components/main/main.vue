<template>
	<el-main class="container-main container-absolute-content">
		<div v-if="!preview">
			<el-row class="operate-row">
				<el-col :span="18">
					<el-button class="btn marginR" style="display:none"> <i class="el-icon-time icon"></i>
						黑屏时间
					</el-button>
					<el-button class="btn marginR" style="display:none"> <i class="el-icon-circle-plus-outline icon"></i>
						添加时间段
					</el-button>
					<el-button class="btn marginR">
						<selectVue :options="options" :default-value="defaulValue" @selectValue="obtainSelect"></selectVue>
					</el-button>
					<el-button class="btn marginR" @click="preview=true">
						<i class="el-icon-view icon"></i>
						预览
					</el-button>
				</el-col>
				<el-col :span="6" class="opreate-right">
					<el-button class="btn opreate-right-btn tv-right-btn">
						<i class="icon-tv icon"></i>
						投影到电视
					</el-button>
				</el-col>
			</el-row>
			<el-row :gutter="0" style="margin-right:-10px;
		margin-left:-10px;" class="plan-row">
		    <planItem v-dragging="{item:item,list:planItems,group:'item'}" v-for="(item,index) in planItems" :key="item.id"  @openMessage="showMessage=true" :item="item" :index="index"></planItem>
				<el-col class="row">
					<div class="grid-content plan-item add-item">
						<div class="plan-image">

							<div class="wrap-btn">
								<router-link to="/library">
									<i class="icon-plus"></i>
									<p class="add-mark">添加</p>
								</router-link>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
		<previewVue v-if="preview" @previewFalse="preview=false" :plan-items="planItems"></previewVue>
		<messagebox v-if="showMessage" remove-box="true" @closeMessage="showMessage = false"></messagebox>
	</el-main>
</template>
<script>
//https://www.jianshu.com/p/011d308d7dd7
import previewVue from '../../components/common/preview.vue';
import selectVue from '../../components/common/select';
import messagebox from '../../components/common/messageBox.vue';
import {listItem} from '../../service/getData.js';
import {imgBaseUrl} from '../../config/env.js';
import planItem from '../../components/common/planItem';
	export default{
		data(){
			return{
        input:'时长5s',
        preview:false,
        showMessage:false,
        planItems:[],
        imgUrl: imgBaseUrl,
        defaultImg:'this.src="'+require('../../images/icon-error.png')+'"',//图片出错后
        defaultVideo:'this.src="'+require('../../images/tv-error.png')+'"',//视频出错后
        options: [{
          value: 'value1',
          label: '方案1'
        }, {
          value: 'value2',
          label: '方案2'
        }, {
          value: 'value3',
          label: '方案3'
        }, {
          value: 'value4',
          label: '方案4'
        }, {
          value: 'value5',
          label: '方案5'
        }],
        defaulValue:'方案二'
			}
		},
		computed: {
    },
		components:{
      selectVue,
      previewVue,
      messagebox,
      planItem,
		},
		mounted(){
			listItem({'aa':1}).then(resp=>{
				if(resp.status==200){
					return resp.data
				}else{
					console.log('不是json数据')
				}
			}).then(json=>{
				this.planItems=json.detail;
			}).catch(error=>{
				console.log(error)
			})
			this.$nextTick(() => {
        
      });

      this.$dragging.$on('dragged', ({ value }) => {
	      console.log(value.item)
	      console.log(value.list)
	    })
      this.$dragging.$on('dragend',(value)=>{
      	console.log(this.planItems)
      })
		},

		watch:{

		},
		methods: {
			//removePlan(){
        //this.showMessage=true;
			//},
			obtainSelect(res){
         console.log(res)
			},
			textarea1:function(e){
				var aa=e.currentTarget.innerHTML;
				if(aa.length==0){
					alert('不能为空')
				}else{
					//	console.log(aa)
				}
			}
    }
	}
	</script>
<style lang="scss"></style>