<template>
  <el-container>
    <el-header style="height:auto" class="common-header">
      <headtop head-title="资源库" go-back="true" isShow="false"></headtop>
    </el-header>
    <el-main class="no-padding container-absolute-content">
      <div class="inner-container library-container">
        <el-row class="operate-row">
          <el-col :span="12">
            <el-checkbox class="all-checked-btn btn marginR" v-model="allchecked">全选</el-checkbox> 
            </el-button>
            <el-button class="btn">
              <i class="el-icon-refresh"></i>
              刷新
            </el-button>
          </el-col>
          <el-col :span="12" class="operate-right">
            <!-- <span v-if="allchecked" class="cancel-btn" @click="allchecked=false">取消</span> -->
            <el-button class="operate-orange-btn save-right-btn marginL" @click="showMax()">
              
              确认
            </el-button>
          </el-col>
        </el-row>
        <el-row :gutter="0" style="margin-right:-10px;
    margin-left:-10px;" class="library-row">
          <el-col class="row" v-for="(item,index) in mediaList" :key="index">
            <div @click="sortFn(item)">
              <planItem :item="item" isShowTime="false" isShowHover="false">
                <div class="rank-mark" slot="fromLibrary" v-if="item.selected">
                  <strong class="number">{{item.sort}}</strong>
                </div>
              </planItem>
            </div>
          </el-col>
          <planloading v-if="mediaList.length==0"></planloading>
        </el-row>
        <!-- <el-row :gutter="0" style="margin-right:-10px;
            margin-left:-10px;" class="library-row">
        
          <el-col class="row" v-for="(item,index) in fileList" :key="'file'+index" >
            <div @click="sortFn(item)">
              <planItem :item="item" :index="index" isHover="false" isShowSort="false">
                <el-button class="time activeUp" v-if="dropIndex===index" slot="libraryBtn" @click.stop="dropFn(index)">收起<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                <el-button class="time" v-else slot="libraryBtn" @click.stop="dropFn(index)">展开<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                <div class="rank-mark" slot="fromLibrary" v-if="item.selected">
                  <strong class="number">{{item.sort}}</strong>
                </div>
              </planItem>
            </div>
          </el-col>
        </el-row> -->
        <!-- <el-collapse-transition>
          <el-row :gutter="0" style="margin-right:-10px;
              margin-left:-10px;" class="library-row file-container" v-if="showChild">
        
            <el-col class="row" v-for="(item,index) in subFileList" :key="'subFile'+index" >
              <planItem :item="item" :index="index" isHover="false" isShowSort="false">
              </planItem>
            </el-col>
          </el-row>
        </el-collapse-transition> -->
      </div>
    </el-main>
    <div id="video" style="display:none"></div>
  </el-container>
</template>
<script>
import headtop from '../../components/common/headTop';
import {getLibrary} from '../../service/getData.js';
import planItem from '../../components/common/planItem';
import planloading from '../../components/common/planloading.vue';
export default {
  name: '',
  data () {
    return {
      allchecked:false,
      dropIndex:null,
      sortMax:1,
      notClearAll:false,
      mediaList:[],//图片
      videoList:[],//视频
      fileList:[],//文件夹的数量
      subFileList:[],//根据文件夹的索引获取
      showChild:false,//是否展示子文件夹
    }
  },
  components: {
    headtop,
    planItem,
    planloading,
  },
  watch:{
    allchecked(){
      this.showChild=false;
      this.dropIndex='';
      
      if(this.allchecked==true){
        this.notClearAll=false;
        this.allSortLoop(this.mediaList);
        //this.allSortLoop(this.fileList);
         
      }else{
        /**如果是点击列表导致失去全选效果，则不把每一个数据重置**/
        if(this.notClearAll){
          return;
        }
        this.sortMax=1;
        this.mediaList.forEach((item)=>{
          item.selected=false;
        })
   
        /*this.fileList.forEach((item)=>{
          item.selected=false;
        })*/
      }
    }
  },
  computed:{
    /**
    *子文件夹数据所有数组
    *@param
    **/
     subFileFilter(){
      return this.fileList.map(item=>{
        return item.children
      })
     }
  },
  mounted(){
    getLibrary().then(resp=>{
      if(resp.status==200){
        return resp.data
      }else{
        console.log('获取数据出错')
      }
    }).then(json=>{
      /**
      *媒体列表部分
      **/
      /*var tempArr=json.detail.filter(item=>{
        return item.type!='folder'&&item.type!='other'
      });*/
      var tempArr=json.detail;
      tempArr=tempArr.map((item,index)=>{
        item.selected=false;
        item.sort=index+1;//为保持当为全选是显示一致
        return item;
      });
      this.mediaList=tempArr;
      
      /**
      *文件列表部分
      ***/
      let tempFileList=json.detail.filter(item=>{
        return item.type=='folder'
      });
      this.fileList=tempFileList.map((item,index)=>{
        let sum=0;
        item.sort=index+1;//为保持当为全选是显示一致
        item.selected=false;
        item.children.forEach(item1=>{
            sum+=item1.duration
        })
        item.duration=sum;//计算文件夹的总秒数
        return item;
      })

       json.detail.map(item=>{
        
        if(item.type=='video'){
          this.videoList.push(item)
        }
        if(item.type=='folder'&&item.children.length>0){
          item.children.map(item1=>{
            if(item1.type=='video'){
              this.videoList.push(item1)
            }
          })
        }
      })

      var time=[];
        this.videoList.forEach(function(item,index){
          var video=document.createElement('video');
          var aa={}
          video.src=item.url;
          video.id=index;
          document.getElementById('video').appendChild(video)
          document.getElementById(index).oncanplaythrough=function(){
            aa.id=this.id;
            aa.duration=parseInt(this.duration)
          }
          time.push(aa)
        })
      console.log(time)
      
    }).catch(error=>{
      console.log(error)
    })
  },
  methods:{
    dropFn(index){
      this.subFileList=this.subFileFilter[index];
      /**
      *如果子文件夹已经展开，并且点击其他文件夹的展开按钮，则不隐藏子文件夹盒子
      **/
      if(index!=this.dropIndex&&this.showChild){
        this.dropIndex=index;
        return;
      }
      
      this.showChild? this.dropIndex='':this.dropIndex=index;
      this.showChild=!this.showChild;
      
    },
    sortArr:function(pro){//按照非数字属性类型判断
      return function(n1,n2){
        var value1=n1[pro].toLowerCase();
        var value2=n2[pro].toLowerCase();
        return value1.localeCompare(value2);
      }
    },
    /**
    *排序操作
    *@param item是当前数据项 selected=true表示已选中
    **/
    sortFn(item){
      if(item.selected){
        this.allchecked=false;
        this.notClearAll=true;
        /**
        *取消以及重排序操作
        *@param sortMax为最大排序号
        **/
        this.sortMax--;
        this.arrSortLoop(this.mediaList,item);
        //this.arrSortLoop(this.fileList,item)
      }else{
        /**
        *增加排序操作
        *@param sortMax为最大排序号
        **/
        item.sort=this.sortMax;
        this.sortMax++;
        
      }
      item.selected=!item.selected 
    },
    /**
    *点击每一项数据进行列表数据的重排序
    *@param sourceArr 来源的列表数据
    *@param item点击的数据项
    **/
    arrSortLoop(sourceArr,item){
      sourceArr.map(item1=>{
        /**
        *如果点击项的序号比其他选中的项的序号要小，则执行排序
        **/
        if(item1.selected&&item1.sort>item.sort){
           item1.sort--;
        }
        return item1;
      })
    },
    /**
    *点击全选的时候进行数据的重排序
    *@param sourceArr 来源的列表数据
    **/
    allSortLoop(sourceArr){
      sourceArr.map((item,index,arr)=>{
        if(!item.selected){
          item.sort=this.sortMax;
          this.sortMax++;
        }
        item.selected=true;
      })
    },
    showMax(){
      console.log(this.sortMax)
    }
  }
}
</script>
<style lang="scss"></style>