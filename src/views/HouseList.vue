<template>
  <div>
    <el-container>
      <el-header class="header" height='114px' style="background-color:#fdf1ea">  
       <div class="hcontent">
          <el-input class="search" placeholder="您可以输入楼盘名称" suffix-icon='el-icon-search' v-model="searchval"></el-input>
          <el-button class="searchbtn"  @click="select()">一键搜索</el-button>
       </div>
      </el-header>
      <el-main style="padding:0;background-color:#fff;">
        <div class="queryList">
          <el-row style="line-height:40px">
            <el-col :span="3" >户型:</el-col>
            <el-col :span="2"><el-radio v-model="radio1" label="1" >全部</el-radio></el-col>
            <el-col :span="2"><el-radio v-model="radio1" label="2" >一室</el-radio></el-col>
            <el-col :span="2"><el-radio v-model="radio1" label="2" >二室</el-radio></el-col>
            <el-col :span="2"><el-radio v-model="radio1" label="3" >三室</el-radio></el-col>
            <el-col :span="2"><el-radio v-model="radio1" label="4" >四室</el-radio></el-col>
          </el-row>
          <el-row style="line-height:40px">
            <el-col :span="3" style="line-height:40px">面积:</el-col>
            <el-col :span="3"><el-radio v-model="radio2" label="1" >70-90平米</el-radio></el-col>
            <el-col :span="3"><el-radio v-model="radio2" label="2" >90-110平米</el-radio></el-col>
            <el-col :span="4"><el-radio v-model="radio2" label="3" >110-130平米</el-radio></el-col>
          </el-row>
        </div>
        <div>
         <div class="details">
          <p class="title">共找到<span>10</span>个楼盘</p>
         </div>
         <div class="houseList">
            <div>
             <vue-router>
                <img src="../assets/houseList/zhongjijindimeicheng.png" alt="">
             </vue-router>
            </div>
         </div>
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
      }
    },
     methods: {
       select(){
        
       }
     }
  }
</script>

<style scoped>
.houseList{
  width: 1200px;
  margin: 0 auto;
  border: 1px solid black;
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
  width: 1080px;
  text-align: left;
  margin: 0 auto;
  margin-top:30px ;
  margin-bottom:30px;
  padding-left:40px ;
  font-size: 26px;
}
.queryList{
 width: 1200px;
 margin: 0 auto;
 margin-top:43px;
 border-bottom: .0625rem solid #eee;
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