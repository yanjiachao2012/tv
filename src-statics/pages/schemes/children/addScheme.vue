<template>
  <el-container class="childLayer">
    <el-header style="height:auto" class="common-header">
      <headtop :head-title="schemeTitle" go-back="true" isAddPlan="false"></headtop>
    </el-header>
    <el-main class="no-padding">
      <div class="inner-container schemes-main">
        <el-row class="operate-row">
          <el-col :span="18">
            <el-button class="btn marginR"> <i class="el-icon-time icon"></i>
              黑屏时间
            </el-button>
            <el-button class="btn marginR"> <i class="el-icon-circle-plus-outline icon"></i>
              添加时间段
            </el-button>
            <el-button class="btn marginR">
              <i class="el-icon-view icon"></i>
              预览
            </el-button>
            <el-button class="btn marginR">
              <selectVue :options="options" style="width:80px" @selectValue="obtainSelect"></selectVue>
            </el-button>
          </el-col>
          <el-col :span="6" class="opreate-right">
            <i class="icon-remove" v-if="allchecked"></i>
            <el-checkbox class="all-checked-btn marginR" v-model="allchecked">全选</el-checkbox>
            <el-button class="opreate-right-btn save-right-btn">
              <i class="icon-save"></i>
              保存
            </el-button>
          </el-col>
        </el-row>
        <el-row :gutter="0" style="margin-right:-10px;
    margin-left:-10px;" class="plan-row plan-remove" :class="{schemeRemove:allchecked}">
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_picture3.png" class="pic" />
              </div>
              <div class="plan-content">
                <div class="plan-title">色彩设计色彩分好看设计范围得</div>
                <div class="plan-time"> <b class="rank-mark">1</b>
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
              <div class="remove-mark">
                <i class="icon-current"></i>
              </div>
            </div>
          </el-col>
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_picture2.png" class="pic" />
              </div>
              <div class="plan-content">
                <div class="plan-title">色彩设计色彩分好看设计范围得</div>
                <div class="plan-time"> <b class="rank-mark">1</b>
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
              <div class="remove-mark">
                <i class="icon-current"></i>
              </div>
            </div>
          </el-col>
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_picture4.png" class="pic" />
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
              <div class="remove-mark">
                <i class="icon-current"></i>
              </div>
            </div>
          </el-col>
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/icon-error.png" class="pic" />
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
              <div class="remove-mark">
                <i class="icon-current"></i>
              </div>
            </div>
          </el-col>
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/tv-error.png" class="pic" />
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
              <div class="remove-mark">
                <i class="icon-current"></i>
              </div>
            </div>
          </el-col>
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_picture4.png" class="pic" />
                <span class="mask"></span>
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
              <div class="remove-mark">
                <i class="icon-current"></i>
              </div>
            </div>
          </el-col>
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_wenjianjia.png" class="file" />
              </div>
              <div class="plan-content">
                <div class="plan-title">色彩设计色彩分好看</div>
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
              <div class="remove-mark">
                <i class="icon-current"></i>
              </div>
            </div>
          </el-col>
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_picture6.png" class="pic" />
              </div>
              <div class="plan-content">
                <div class="plan-title">色彩设计色彩分好看设计范围得色彩设计色彩分好看设计范围得</div>
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
              <div class="remove-mark">
                <i class="icon-current"></i>
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
    </el-main>
  </el-container>
</template>
<script>
import {mapState,  mapMutations} from 'vuex'
import headtop from '../../../components/common/headTop';
import selectVue from '../../../components/common/select';
export default {
  name: '',
  data () {
    return {
      allchecked:false,
      input:'',
      schemeTitle:'',
      options:[{
         value: '20',
            label: '20s'
          }, {
            value: '30',
            label: '30s'
          }, {
            value: '40',
            label: '40s'
          }]
    }
  },
  components: {
    headtop,
    selectVue,
  },
  mounted(){
    this.schemeTitle=this.$route.query.schemeTitle
  },
  methods:{
    obtainSelect(res){
         console.log(res)
      }
  }
}
</script>
<style lang="scss"></style>