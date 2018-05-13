<template>
  <div>
    <div v-if="!showFile">

      <el-row :gutter="0" style="margin-right:-10px;margin-left:-10px;" class="plan-row" v-for="(item,index) in planList" :key="index">
        <div class="plan-time">
           {{item.time}} <i class="el-icon-edit"></i> <i class="el-icon-delete pull-right" @click="removePlanPart(item.id)"></i>
        </div>
        <el-col class="row" v-if="item.list.length>
           0" v-dragging="{item:item1,list:item.list,group:item.id}" v-for="(item1,index1) in item.list" :key="item1.id" >
           <planItem :item="item1" :index="index1" @removePlan='removePlan' @showFile='obtainFile'></planItem>
        </el-col>
        <el-col class="row" v-if="item.list.length>
           0">
           <planAdd :planId="planId"></planAdd>
        </el-col>
        <planloading v-if="item.list.length==0"></planloading>
      </el-row>
    </div>
     <showFile v-if="showFile" :file-list="fileList" @updateList="updateFile" :file-name="fileName" @backHome='hiddenFile'></showFile>
     <messagebox v-if="showMessage" @sureEvent="sureEvent" remove-box="true" @closeMessage="showMessage=false"></messagebox>
  </div>
</template>

 <script>
 import planloading from './planloading.vue';
 import messagebox from './messageBox.vue';
 import planAdd from './planAdd';
 import planItem from './planItem';
 import showFile from './showFile';


 import {listItem} from '../../service/getData.js';
   export default{
    data(){
      return{
        showMessage:false,
        planList:[],
        removePartId:'',
        fileList:[],
        fileName:'',
        showFile:false,
      }
    },
    components:{
      planloading,
      planAdd,
      messagebox,
      planItem,
      showFile,
    },
    props:['planId'],
    watch:{
      planId(){
        if(this.planId){
          this.listInit({'planInd':this.planId});
        }
      }
    },
    mounted(){
      if(this.planId){
        this.listInit({'planInd':this.planId});
      }
      this.$dragging.$on('dragged', ({ value }) => {
      })
      this.$dragging.$on('dragend',(value)=>{
        console.log(value.group)
        this.planList.map(item=>{
          if(item.id==value.group){
            console.log(item.list)
          }
        })
      })
    },
    methods:{

      listInit(param){
        listItem(param).then(resp=>{
          if(resp.status==200){
            return resp.data
          }else{
            console.log('获取数据出错')
          }
        }).then(json=>{

          this.planList=json.detail

        }).catch(error=>{
          console.log(error)
        })
      },
      removePlan(id){
        this.showMessage=true;
        this.removeId=id;
        this.removePartId='';
      },
      removePlanPart(id){
        this.showMessage=true;
        this.removePartId=id;
        this.removeId='';
      },
      sureEvent(){//删除弹框确定按钮
        if(this.removeId!=''){
          this.planList.map(item=>{
            item.list=item.list.filter(item1=>{
              return item1.id!=this.removeId;
            })
          })
        }
        if(this.removePartId!=''){
          this.planList=this.planList.filter(item=>{
            return item.id!=this.removePartId;
          })
        }
        this.showMessage=false;
      },
      hiddenFile(){
        this.showFile=false;
        this.$emit('showOperate');
      },
      obtainFile(data,name){
        this.$emit('showFile');
        this.showFile=true;
        this.fileList=data;
        this.fileName=name;
      },
      updateFile(id){
        this.planList.map(item=>{
          item.list.map(item1=>{
            item1.children=item1.children.filter(item2=>{
              return item2.id!=id
            })
          })
        })
      }
    }
   }
 </script>