<template>
  <el-container  class="common-container content">
    <myleftside @planId="obtainPlanId"></myleftside>
    <el-container>
      <el-header style="height:auto;" class="common-header">
        <headtop head-title='电视管理平台'>
          <span slot="markName">3F-</span>
          <router-link :to="{path: 'schemes'}" slot="allplan" class="item-btn border-R" tag='span' >方案库</router-link>
        </headtop>
      </el-header>
      <el-main class="container-main container-absolute-content">
        <operateRow v-if="!showFile">
          <el-button class="btn marginR" slot="selectPlan">
            <selectVue @selectValue="obtainSelect" :options='options'></selectVue>
          </el-button>
          <el-button class="btn operate-orange-btn tv-right-btn" slot="goToTV">
            <i class="icon-tv icon"></i>
            投影到电视
          </el-button>
        </operateRow>
        <planList :plan-id="planId" :options="options" @showFile='showFile=true' @showOperate='showFile=false'>
        </planList>
        <prewDialog v-if="preview" @closeMessage="preview=false" @previewFalse="preview=false"></prewDialog>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import headtop from '../../components/common/headTop';
import myleftside from '../../components/leftside/leftside';
 import selectVue from '../../components/common/select';
/*import previewVue from '../../components/common/preview.vue';*/
import operateRow from '../../components/common/operateRow';
import {schemes} from '../../service/getData.js';
import prewDialog from '../../components/common/prewDialog';
import planList from '../../components/common/planList';
export default {
  name: 'app',
  data(){
    return{
      preview:false,
      planId:'',
      planItems:[],
      removeId:'',
      options:[],
      fileList:[],
      fileName:'',
      showFile:false,
      
    }
  },
  components: {
    myleftside,
    headtop,
    selectVue,
   // previewVue,
    operateRow,
    prewDialog,
    planList,
  
  },
  computed:{
    
  },
  mounted(){

    this.$nextTick(() => {
     
        
    });
    schemes().then(res=>{
        if(res.status==200){
            return res.data
        }else{

        }
     }).then(json=>{
        json.detail.map(item=>{
          var optionItem={};
          optionItem.value=item._id;
          optionItem.label=item.name
          this.options.push(optionItem);
        });
    })
  },

  watch:{

  },
  methods: {
    obtainSelect(data){
      this.planId=data;
    },
    handleChange(value) {
      console.log(value);
    },
    
    obtainPlanId(data){
      this.planId=data;
      //this.listInit({'planInd':data})
    },
  }
  
}

</script>
<style lang="scss"></style>