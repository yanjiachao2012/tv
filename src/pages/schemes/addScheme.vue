<template>
  <el-container>
    <el-header style="height:auto" class="common-header">
      <headtop :head-title="schemeTitle" go-back="true" isShow="false"></headtop>
    </el-header>
    <el-main class="no-padding">
      <div class="inner-container schemes-main">
        <div v-if="!preview">
          <!-- <el-row class="operate-row">
            <el-col :span="18">
              <el-button class="btn marginR"  @click="showMessageDate=true"> <i class="el-icon-circle-plus-outline icon"></i>
                添加时间段
              </el-button>
              <el-button class="btn marginR"  @click="preview=true">
                <i class="el-icon-view icon"></i>
                预览
              </el-button>
              <el-button class="btn marginR" style="display:none;">
                <selectVue :options="options" style="width:80px" @selectValue="obtainSelect"></selectVue>
              </el-button>
            </el-col>
            <el-col :span="6" class="opreate-right">
              <i class="icon-remove" v-if="allchecked" @click="showMessage=true"></i>
              <el-checkbox class="all-checked-btn marginR" style="display:none;" v-model="allchecked">全选</el-checkbox>
              <el-button class="operate-orange-btn btn save-right-btn">
                <i class="icon-save"></i>
                保存
              </el-button>
            </el-col>
          </el-row> -->
          <operateRow v-if="!showFile">
            <el-button class="operate-orange-btn btn save-right-btn" slot="savePlan">
              <i class="icon-save"></i>
              保存
            </el-button>
          </operateRow>
          <planList :plan-list="planItems" :plan-id="planId"  @showFile='showFile=true' @showOperate='showFile=false'></planList>
        </div>
        
        <prewDialog v-if="preview" :plan-items="planItems[0].list" @closeMessage="preview=false" @previewFalse="preview=false"></prewDialog>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import {mapState,  mapMutations} from 'vuex'
import headtop from '../../components/common/headTop';
import selectVue from '../../components/common/select';

import prewDialog from '../../components/common/prewDialog';
import {listItem} from '../../service/getData.js';

import planList from '../../components/common/planList';
import operateRow from '../../components/common/operateRow';
export default {
  name: '',
  data () {
    return {
      allchecked:false,
      input:'',
      preview:false,
      showMessage:false,
      showMessageDate:false,
      planId:'',
      showFile:false,
      schemeTitle:'',
      planItems:[],

    }
  },
  components: {
    headtop,
    selectVue,
    listItem,
    prewDialog,
    planList,
    operateRow,
  },
  created(){
    this.schemeTitle=this.$route.query.schemeTitle;
    this.planId=this.$route.query.planId;
  },
  watch:{

  },
  mounted(){
  },
  methods:{
    obtainSelect(res){
      console.log(res)
      this.planItems.map(item=>{
        if(item.type=='img'){
          item.duration=res*1000
          
        }
        return item;
      })
    },
    allRemove(){
      this.allchecked=false
    },
    hideMessage(){//点击弹框后的处理
      this.allchecked=false;
      this.showMessage=false;
    },
    removePlan(){
      this.showMessage=true;
    },
  }
}
</script>
<style lang="scss"></style>