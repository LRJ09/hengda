<template>
  <div>
    <el-container>
        <!-- 搜索栏 -->
      <el-header class="header" height='114px' style="background-color:#fdf1ea">  
       <div class="hcontent">
          <el-input class="search" placeholder="您可以输入楼盘的名称" suffix-icon='el-icon-search' v-model="searchval"></el-input>
          <el-button class="searchbtn">一键搜索</el-button>
       </div>
      </el-header>
      <el-main style="padding:0;background-color:#fff;">
        <!-- 筛选按钮 -->
        <div class="queryList">
          <el-row style="line-height:40px; font-size: 18px;" >
            <el-col :span="3"> <span>户型:</span> </el-col>
            <el-col :span="2"><el-radio v-model="radio1" label="1" @change="gaibian()"><span>全部</span></el-radio></el-col>
            <el-col :span="2"><el-radio v-model="radio1" label="2" @change="gaibian()"><span>一室</span></el-radio></el-col>
            <el-col :span="2"><el-radio v-model="radio1" label="3" @change="gaibian()"><span>二室</span></el-radio></el-col>
            <el-col :span="2"><el-radio v-model="radio1" label="4" @change="gaibian()"><span>三室</span></el-radio></el-col>
            <el-col :span="2"><el-radio v-model="radio1" label="5" @change="gaibian()"><span>四室</span></el-radio></el-col>
          </el-row>
          <el-row style="line-height:40px">
            <el-col :span="3" style="line-height:40px"><span>面积:</span></el-col>
            <el-col :span="3"><el-radio v-model="radio2" label="1" ><span>全部</span></el-radio></el-col>
            <el-col :span="3"><el-radio v-model="radio2" label="2" ><span>70-90平米</span></el-radio></el-col>
            <el-col :span="3"><el-radio v-model="radio2" label="3" ><span>90-110平米</span></el-radio></el-col>
            <el-col :span="4"><el-radio v-model="radio2" label="4" ><span>110-130平米</span></el-radio></el-col>
          </el-row>
        </div>
        <!-- 内容区域 -->
        <div>
        <!-- 标题 -->
         <div class="details" >
          <p class="title">共找到<span>{{count}}</span>个楼盘</p>
         </div>
         <div class="houseList" v-for="(item,i) in homelist" :key="i">
            <div class="houstlist-img">
                <img class="banner" :src="item.imgurl" alt="">
            </div>
            <div class="listcenter">
                  <el-row class="row">
                    <span class="title">{{item.title}}</span>
                    <div  style="float: right;">
                      <i style="color:black;font-size:18px;">约</i>
                      <span class="price" >{{item.price}}</span>
                      <i style="color:black;font-size:18px;">/㎡</i>
                    </div>
                    <p class="introduce">
                      <img width="18px" src="../assets/icon/address3.gif" alt="">
                      {{item.address}}
                    </p>
                    <p class="introduce">
                      <img width="18px" src="../assets/icon/hall.png" alt="">
                      户型：{{item.housetype}}
                    </p >
                    <p class="introduce">
                      <img width="18px" src="../assets/icon/activitytime.png" alt="">
                      开盘：{{item.htime}}
                    </p>
                    <p class="introduce"> 
                       <img width="18px" src="../assets/icon/like.gif" alt="">
                      {{item.want}}人想买
                    </p>
                </el-row>
            </div>
           
         </div>
          <el-pagination
              background
              layout="prev, pager, next"
              :total="count"
              >
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  export default {
    
    data () {
      return {
         searchval: "",
         radio1: '1',
         radio2: '1',
         homelist:[],
         count:0, 
         tid:1,
         btn2:1,
         page:1, 
      }
    },
     methods: {
       serrch(){
         
       },
       loadlist(){
         this.$axios.get(`/count?tid=${this.tid}&btn2=${this.btn2}&page=${this.page}`).then(res=>{console.log(res);
            this.count=res.data.res.count;
            let homelist =res.data.res;
            homelist.forEach(item=>{
              if(item.imgurl){
                item.imgurl=require(`../assets/houseList/${item.imgurl}`)
              }
            }) 
            this.homelist =homelist
            this.count=res.data.pagecount
         }); 
       },
       gaibian(){
        this.tid==this.radio1;
        // console.log(this.tid);
        this.loadlist();
       },
     },
     mounted(){
       this.loadlist();
     },
     watch:{
       radio1(newval){
        if(this.newval!=1){
          this.tid=newval
        }
        this.loadlist();
       },
       radio2(newval){
         console.log(newval);
        if(newval==2){
          this.btn2=90
        }else if(newval==3){
          this.btn2=110;
        }else if(newval==4){
          this.btn2=130;
        }else{
          this.btn2=1;
        }
        this.loadlist();
     }
     
  }
  }
</script>

<style scoped>
  .introduce{
    color: #959595;
  }
 a{
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
.listcenter{
  padding-top: 20px;;padding-left:418px ;
}
.row{
  text-align: left;
}
.price{
  display: inline-block;
  margin-top: 20px;margin-right: 0.3125rem;margin-bottom: 0.3125rem; margin-left: 0.3125rem;font-size: 31.75px;color: #ee722e;
}
.houseList{
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: .0625rem solid #eee;
}
.houstlist-img{
  position: relative;
  float: left;
  height: 14.375rem;
  width: 23.75rem;
  overflow: hidden;
}
.banner{
  float: left;
    width: 100%;
    /* width: auto; */
    height: auto;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
}
.houseList{
  width: 1200px;
  margin: 0 auto;
  /* border: 1px solid black; */
}
.details{
  margin: 0 auto;
}
.details p span{
    color: #ee722e;
    margin-top: 0px;
    margin-right: 0.625rem;
    margin-bottom: 0px;
    margin-left: 0.625rem;
}
.title{
  color: #000;
  width: 1080px;
  text-align: left;
  margin: 0 auto;
  margin-top:30px ;
  margin-bottom:30px;
  font-size: 31.5px;
}
.queryList{

 width: 1200px;
 margin: 0 auto;
 margin-top:43px;
 border-bottom: .0625rem solid #eee;
}
.queryList span{
  font-size: 18px;
}
.search{
    width: 50%;
    margin-right: 8.75px;
    line-height: 114px;
  }
.searchbtn{
  background-color: #000;
  color:#fff;
}
.hcontent{
   width: 1200px;
  margin: 0 auto;
}

</style>