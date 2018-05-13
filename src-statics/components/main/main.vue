<template>
	<el-main class="container-main container-absolute-content">
		<div v-if="!preview">
			<el-row class="operate-row">
				<el-col :span="18">
					<el-button class="btn marginR"> <i class="el-icon-time icon"></i>
						黑屏时间
					</el-button>
					<el-button class="btn marginR"> <i class="el-icon-circle-plus-outline icon"></i>
						添加时间段
					</el-button>
					<el-button class="btn marginR">
						<selectVue :options="options" @selectValue="obtainSelect"></selectVue>
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
				<el-col class="row">
					<div class="grid-content plan-item">
						<div class="plan-image">
							<img src="../../images/image_picture1.png" class="pic" />
							<span class="video-mark"></span>
						</div>
						<div class="plan-content">
							<div class="plan-title">色彩设计色彩分好看设计范围得</div>
							<div class="plan-time"> <b class="rank-mark">1</b>
								<el-button class="time">时长5s</el-button>
							</div>
						</div>
					</div>
				</el-col>
				<el-col class="row">
					<div class="grid-content plan-item">
						<div class="plan-image">
							<img src="../../images/image_picture3.png" class="pic" />
						</div>
						<div class="plan-content">
							<div class="plan-title">色彩设计色彩分好看设计范围得</div>
							<div class="plan-time"> <b class="rank-mark">1</b>
								<el-button class="time">时长5s</el-button>
							</div>
						</div>
						<div class="hover-status">
							<p class="drop-tip">长按可拖拽</p>
							<i class="icon-remove" @click="removePlan"></i>
							<div class="wrap-input">
								<textarea  class="mutli-input" name="">色彩设计色彩分好看设计范围</textarea>
								<el-input v-model="input" class="single-input" placeholder="请输入内容" value=""></el-input>
							</div>
						</div>
					</div>
				</el-col>
				<el-col class="row">
					<div class="grid-content plan-item">
						<div class="plan-image">
							<img src="../../images/image_picture2.png" class="pic" />
						</div>
						<div class="plan-content">
							<div class="plan-title">色彩设计色彩分好看设计范围得</div>
							<div class="plan-time">
								<b class="rank-mark">1</b>
								<el-button class="time">时长5s</el-button>
							</div>
						</div>
						<div class="hover-status">
							<p class="drop-tip">长按可拖拽</p>
							<i class="icon-remove"></i>
							<div class="wrap-input">
								<textarea  class="mutli-input" name="">色彩设计色彩分好看设计范围</textarea>
								<el-input v-model="input" class="single-input" placeholder="请输入内容" value=""></el-input>
							</div>
						</div>
					</div>
				</el-col>
				<el-col class="row">
					<div class="grid-content plan-item">
						<div class="plan-image">
							<img src="../../images/image_picture4.png" class="pic" />
						</div>
						<div class="plan-content">
							<div class="plan-title">色彩设计色彩分好看设计范围得</div>
							<div class="plan-time">
								<b class="rank-mark">1</b>
								<el-button class="time">时长5s</el-button>
							</div>
						</div>
						<div class="hover-status">
							<p class="drop-tip">长按可拖拽</p>
							<i class="icon-remove"></i>
							<div class="wrap-input">
								<textarea  class="mutli-input" name="">色彩设计色彩分好看设计范围</textarea>
								<el-input v-model="input" class="single-input" placeholder="请输入内容" value=""></el-input>
							</div>
						</div>
					</div>
				</el-col>
				<el-col class="row">
					<div class="grid-content plan-item">
						<div class="plan-image">
							<img src="../../images/icon-error.png" class="pic" />
						</div>
						<div class="plan-content">
							<div class="plan-title">色彩设计色彩分好看设计范围得</div>
							<div class="plan-time">
								<b class="rank-mark">1</b>
								<el-button class="time">时长5s</el-button>
							</div>
						</div>
					</div>
				</el-col>
				<el-col class="row">
					<div class="grid-content plan-item">
						<div class="plan-image">
							<img src="../../images/tv-error.png" class="pic" />
						</div>
						<div class="plan-content">
							<div class="plan-title">色彩设计色彩分好看设计范围得</div>
							<div class="plan-time">
								<b class="rank-mark">1</b>
								<el-button class="time">时长5s</el-button>
							</div>
						</div>
					</div>
				</el-col>
				<el-col class="row">
					<div class="grid-content plan-item">
						<div class="plan-image">
							<img src="../../images/image_picture4.png" class="pic" />
							<span class="mask"></span>
						</div>
						<div class="plan-content">
							<div class="plan-title">色彩设计色彩分好看设计范围得</div>
							<div class="plan-time">
								<b class="rank-mark">1</b>
								<el-button class="time">时长5s</el-button>
							</div>
						</div>
					</div>
				</el-col>
				<el-col class="row">
					<div class="grid-content plan-item">
						<div class="plan-image">
							<img src="../../images/image_wenjianjia.png" class="file" />
						</div>
						<div class="plan-content">
							<div class="plan-title">色彩设计色彩分好看</div>
							<div class="plan-time">
								<b class="rank-mark">1</b>
								<el-button class="time">时长5s</el-button>
							</div>
						</div>
					</div>
				</el-col>
				<el-col class="row">
					<div class="grid-content plan-item">
						<div class="plan-image">
							<img src="../../images/image_picture6.png" class="pic" />
						</div>
						<div class="plan-content">
							<div class="plan-title">色彩设计色彩分好看设计范围得色彩设计色彩分好看设计范围得</div>
							<div class="plan-time">
								<b class="rank-mark">1</b>
								<el-button class="time">时长5s</el-button>
							</div>
						</div>
					</div>
				</el-col>
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
		<previewVue v-if="preview" @previewFalse="preview=false"></previewVue>
		<messagebox v-if="showMessage" remove-box="true" @closeMessage="showMessage = false"></messagebox>
	</el-main>
</template>
<script>
//https://www.jianshu.com/p/011d308d7dd7
import previewVue from '../../components/common/preview.vue';
import selectVue from '../../components/common/select';
import messagebox from '../../components/common/messageBox.vue';
import {listItem} from '../../service/getData.js';
	export default{
		data(){
			return{
        input:'时长5s',
        preview:false,
        showMessage:false,
        options: [{
          value: 'value1',
          label: '黄金糕'
        }, {
          value: 'value2',
          label: '双皮奶'
        }, {
          value: 'value3',
          label: '蚵仔煎'
        }, {
          value: 'value4',
          label: '龙须面'
        }, {
          value: 'value5',
          label: '北京烤鸭烤鸭烤鸭'
        }]
			}
		},
		computed: {
    },
		components:{
      selectVue,
      previewVue,
      messagebox,
		},
		mounted:function(){
				listItem({method:'get'})
			this.$nextTick(() => {
        
      })
		},

		watch:{

		},
		methods: {
			removePlan(){
         this.showMessage=true;
			},
			obtainSelect(res){
         console.log(res)
			}
    }
	}
	</script>
<style lang="scss"></style>