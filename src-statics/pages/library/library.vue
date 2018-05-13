<template>
  <el-container>
    <el-header style="height:auto" class="common-header">
      <headtop head-title="库" go-back="true" isAddPlan="false"></headtop>
    </el-header>
    <el-main class="no-padding container-absolute-content" style="overflow:visible;">
      <div class="inner-container library-container" :class="{selectLibrary:allchecked}">
        <el-row class="operate-row">
          <el-col :span="15">
            <h2 class="library-title">资源库</h2>
          </el-col>
          <el-col :span="9" class="opreate-right">
            <span v-if="allchecked" class="cancel-btn" @click="allchecked=false">取消</span>
            <el-checkbox class="all-checked-btn marginL" v-model="allchecked">全选</el-checkbox>
            <el-button class="btn marginL"> <i class="el-icon-time icon"></i>
              播放时长
            </el-button>
            <el-button class="opreate-right-btn save-right-btn">
              <i class="icon-save"></i>
              保存
            </el-button>
          </el-col>
        </el-row>
        <el-row :gutter="0" style="margin-right:-10px;
    margin-left:-10px;" class="plan-row">
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_picture4.png" class="pic" />
              </div>
              <div class="plan-content">
                <div class="plan-title">色彩设计色彩分好看设计范围得</div>
                <div class="plan-time">
                  
                  <el-button class="time">时长5s</el-button>
                </div>
              </div>
              <div class="rank-mark">
                <strong class="number">1</strong>
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
                  
                  <el-button class="time">时长5s</el-button>
                </div>
              </div>
              <div class="rank-mark">
                <strong class="number">1</strong>
              </div>
            </div>
          </el-col>
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_picture1.png" class="pic" />
                <span class="video-mark"></span>
              </div>
              <div class="plan-content">
                <div class="plan-title">色彩设计色彩分好看设计范围得</div>
                <div class="plan-time">
                  <el-button class="time">时长5s</el-button>
                </div>
              </div>
              <div class="rank-mark">
                <strong class="number">1</strong>
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
                  
                  <el-button class="time">时长5s</el-button>
                </div>
              </div>
              <div class="rank-mark">
                <strong class="number">1</strong>
              </div>
            </div>
          </el-col>
          
        </el-row>
        <el-row :gutter="0" style="margin-right:-10px;
    margin-left:-10px;" class="plan-row">
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_wenjianjia.png" class="file"/>
              </div>
              <div class="plan-content">
                <div class="plan-title">色彩设计色彩分好看</div>
                <div class="plan-time">
                  
                  <el-button class="time">时长5s</el-button>
                  <el-button class="time" :class="{activeUp:showChild}" @click="dropFn">{{dropText}}<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                </div>
              </div>
              <div class="rank-mark">
                <strong class="number">1</strong>
              </div>
            </div>
          </el-col>
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_wenjianjia.png" class="file"/>
              </div>
              <div class="plan-content">
                <div class="plan-title">色彩设计色彩分好看</div>
                <div class="plan-time">
                  <el-button class="time">时长5s</el-button>
                  <el-button class="time" :class="{activeUp:showChild}" @click="dropFn">{{dropText}}<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                </div>
              </div>
              <div class="rank-mark">
                <strong class="number">1</strong>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="0" style="margin-right:-10px;
    margin-left:-10px;" class="plan-row file-container" v-if="showChild">

          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_picture3.png" class="pic" />
              </div>
              <div class="plan-content">
                <div class="plan-title">色彩设计色彩分好看设计范围得</div>
                <div class="plan-time"> 
                  <el-button class="time">时长5s</el-button>
                </div>
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
                <div class="plan-time">
                  
                  <el-button class="time">时长5s</el-button>
                </div>
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
                  
                  <el-button class="time">时长5s</el-button>
                </div>
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
                  
                  <el-button class="time">时长5s</el-button>
                </div>
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
                  
                  <el-button class="time">时长5s</el-button>
                </div>
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
                  <el-button class="time">时长5s</el-button>
                </div>
              </div>
            </div>
          </el-col>
          <el-col class="row">
            <div class="grid-content plan-item">
              <div class="plan-image">
                <img src="~@/images/image_picture1.png" class="pic" />
                <span class="video-mark"></span>
              </div>
              <div class="plan-content">
                <div class="plan-title">色彩设计色彩分好看设计范围得</div>
                <div class="plan-time">
                  
                  <el-button class="time">时长5s</el-button>
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
import headtop from '../../components/common/headTop';
export default {
  name: '',
  data () {
    return {
      allchecked:false,
      dropText:'展开',
      showChild:false,
    }
  },
  components: {
    headtop
  },
  watch:{
    showChild(){
      if(this.showChild){
        this.dropText='收起'
      }else{
        this.dropText='展开'
      }
    },
    allchecked(){
      this.showChild=false;
    }
     
  },
  mounted(){
  },
  methods:{
      dropFn:function(e){
        this.showChild=!this.showChild;
      }
  }
}
</script>
<style lang="scss"></style>