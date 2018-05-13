<template>
  <el-row class="operate-row">
    <el-col :span="12">
      <slot name="selectPlan"></slot>
      <!-- <el-button class="btn marginR">
        
      </el-button> -->
      <el-button class="btn marginR" @click="showMessageDate=true"> <i class="el-icon-circle-plus-outline icon"></i>
        添加时间段
      </el-button>
    </el-col>
    <el-col :span="12" class="operate-right">
      <el-button class="btn operate-orange-btn marginR" @click="preview=true"> <i class="el-icon-view icon"></i>
        预览
      </el-button>
      <!-- <el-button class="btn operate-orange-btn tv-right-btn">
        <i class="icon-tv icon"></i>
        投影到电视
      </el-button> -->
      <slot name="savePlan"></slot>
      <slot name="goToTV"></slot>
    </el-col>
    <dateDialog v-if="showMessageDate" @closeMessage="showMessageDate = false"></dateDialog>
  </el-row>
</template>
<script>
  import dateDialog from '../../components/common/dateDialog';
  export default{
    data(){
      return{
        showMessageDate:false,
        preview:false,
      }
    },
    components:{
      dateDialog,
    }

  }
</script>