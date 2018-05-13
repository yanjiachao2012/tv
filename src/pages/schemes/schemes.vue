<template>
  <div style="position:relative;height:100%">
    <el-container>
      <el-header style="height:auto" class="common-header">
        <headtop head-title="全部方案" go-back="true"></headtop>
      </el-header>
      <el-main class="no-padding container-absolute-content">
        <div class="inner-container schemes-main">
          <!-- <div class="operate-row textR"> <i class="icon-remove" @click="allRemove()" v-if="allchecked"></i>
            <el-checkbox class="all-checked-btn" v-model="allchecked">全选</el-checkbox>
          
          </div> -->
          <el-row :gutter="0" style="margin-right:-14px;margin-left:-14px;" class="schemes-row" :class="{schemeRemove:allchecked}">
            <el-col class="row" v-for="(item,index) in schemes" :key="item._id*Math.random()" >
            <div class="schemes-item">

              <div class="floor-points" v-if="item.userPlan.length>
                0&&item.userPlan.length
                <floorsList.length">
                  <span class="point has-point" v-for="(user,index) in item.userPlan" v-if="index<3">{{user.type}}F</span> <i class="el-icon-more" v-if="item.userPlan.length>3"></i>
                </div>
                <div class="floor-points" v-else>
                  <span class="point has-point" v-if="item.userPlan.length>0&&item.userPlan.length==floorsList.length">ALL</span>
                  <span class="point no-point" v-if="item.userPlan.length==0">闲</span>
                </div>

                <div class="schemes-name text-H">{{item.name}}</div>
                <div class="edit-content">
                  <i class="icon-remove" @click="removePlanBtn(item._id,index)"></i>

                  <div class="remove-box">
                    <el-button @click="toAddScheme(item.name,item._id)">编辑</el-button>
                  </div>
                </div>
                <div class="remove-mark">
                  <i class="icon-current"></i>
                </div>
              </div>
            </el-col>
            <el-col class="row animation_opactiy" v-if="schemes.length==0" v-for="item1 in 5" :key="item1">
              <div class="schemes-item" >
                <img src="~@/images/scheme.png"/>
              </div>
            </el-col>
          </el-row>
            
        </div>
      </el-main>
    </el-container>
    <messagebox v-if="showMessage" remove-box="true" @sureEvent="removePlan" @closeMessage="hideMessage"></messagebox>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>

  </template>
  <script>
import headtop from '../../components/common/headTop';
import messagebox from '../../components/common/messageBox.vue';
import {getStore,toJson} from '../../config/_common.js';
import {schemes} from '../../service/getData.js';
import {mapMutations} from 'vuex'
export default {
  name: '',
  data () {
    return {
      schemes:[],
      floorsList:[],
      allchecked:false,
      showMessage:false,
      removePlanId:'',
      removeItem:{},
    }
  },
  components: {
    headtop,messagebox
  },
  created(){
     this.floorsList=toJson(getStore('floorsList'));
  },
  mounted(){
 
     schemes().then(res=>{
        if(res.status==200){
            return res.data
        }else{

        }
     }).then(json=>{
        this.schemes=json.detail.map(item=>{
          item.userPlan=this.floorsList.filter(item1=>{//判断有那个楼层使用了当前方案
            return item1.planId==item._id
          });
          return item;
        });
     })
  },
  methods:{
    ...mapMutations([
          'SCHEME_TITLE'
    ]),
    toAddScheme:function(title,id){
      this.$router.push({
        path:'/addScheme',
        query: {   
          schemeTitle: title,
          planId:id
        }
      });
    },
    removePlanBtn(id,index){//逐个操作
      this.removePlanId=id;

      this.showMessage=true;
    },
    removePlan(){
      console.log(this.removeItem)
     /* console.log(this.schemes.splice(this.removeItem,1));*/
      this.schemes=this.schemes.filter(item=>{
        return item._id !=this.removePlanId
      })
      this.showMessage=false;
      this.removeItem={};
      this.allchecked=false;
    },
    allRemove(){//全选操作
      this.showMessage=true;
    },
    hideMessage(){//点击弹框后的处理
      this.allchecked=false;
      this.showMessage=false;
    }
  }
}
</script>
  <style lang="scss">
  .router-slid-enter-active, .router-slid-leave-active {
      transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
      transform: translate3d(2rem, 0, 0);
      opacity: 0;
  }
</style>