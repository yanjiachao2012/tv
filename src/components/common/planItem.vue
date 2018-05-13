<template>
  <div class="grid-content plan-item">
    <div class="plan-image">
      <i v-if="item.type=='folder'" class="file"></i>
      <img :src="item.url" v-else-if="item.type=='img'" class="pic"  :onerror="defaultImg" />
      <video :src="item.url" preload="none" v-if="item.type=='video'"  class="pic" width="100%"></video>
      <span class="video-mark" v-if="item.type=='video'">
      </span>
    </div>
    <div class="plan-content">
      <div class="plan-title">{{item.name}}</div>
      <div class="plan-time" v-if="!isShowTime">
        <el-button class="time" v-if="item.type!='folder'">时长{{item.duration/1000}}s</el-button>
      </div>
    </div>
    <div class="hover-status" @mouseover="changeNum(item)" v-if="!isShowHover">
      <p class="drop-tip">长按可拖拽</p>
      <div class="operate-group">
        <el-button class="remove-btn" @click="removePlan(item.id)">删除</el-button>
        <el-button class="show-btn" v-if="item.type=='img'">预览</el-button>
        <el-button class="show-btn" v-if="item.type=='folder'" @click="joinFile(item.children,item.name)">进入</el-button>
      </div>
      <div class="wrap-input"  v-if="item.type!='folder'">
        <el-input-number size="mini" :min=1 :max="40" v-model="num"></el-input-number>
      </div>
    </div>
    <slot name="fromAddScheme"></slot>
    <slot name="fromLibrary"></slot>
  </div>
</template>
	<script>
    import {imgBaseUrl} from '../../config/env.js';
		export default{
			data(){
				return {
					input:'',
          imgUrl: imgBaseUrl,
          num:null,
          currentId:null,
          removeId:'',
          defaultImg:'this.src="'+require('../../images/icon-error.png')+'"',//图片出错后
          defaultVideo:'this.src="'+require('../../images/tv-error.png')+'"',//视频出错后
				}
			},
			props:['item','index','isShowTime','isShowHover'],
      watch:{
        num(){
          if(this.currentId!=null){
            this.item.duration=this.num*1000
          }
        }
      },
			mounted(){
			},
      methods:{
        changeNum(item){
          this.currentId=item.id;
          this.num=item.duration/1000;
        },
        removePlan(id){
          this.$emit('removePlan',id);
        },
        joinFile(data,name){
          this.$emit('showFile',data,name)
        },
      }

		}
	</script>