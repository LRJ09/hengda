<template>
  <div class="about">
    <el-container>
      <!-- 顶部 -->
      <el-header class="nav">Header</el-header>


      <!-- 中间主体 -->
        <el-container class="about" > 
          <div class="w_lump1">
              <!-- 中间主体导航 -->
                <el-aside-nav >
                  <el-tabs v-model="activeName" @tab-click="handleClick"  class="sub_nav">
                    <el-tab-pane label="集团概况" name="first">集团概况</el-tab-pane>
                    <el-tab-pane label="董事长致辞" name="second">董事长致辞</el-tab-pane>
                    <el-tab-pane label="管理团队" name="third">管理团队</el-tab-pane>
                    <el-tab-pane label="金地荣誉" name="fourth">金地荣誉</el-tab-pane>
                  </el-tabs>
                </el-aside-nav>
              <!-- 中间主体 -->
              <el-aside-top>

              </el-aside-top>
          </div>
        </el-container>


      
      <!-- 底部 -->
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>
<style scoped>
  .about{
  background:#fcf8f6 url('../assets/images/body_bg.jpg')repeat-x top left;
}
  .nav{
    height: 80px;
    padding: 0;
}
.about{
  padding: 70px 0 200px;
  margin-bottom:60px ;
}
  .w_lump1{
    width: 1260px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    display: block;
    background-color: #ccc;
}.sub_nav{
  width: 360px;
  height: 86px;
}
  .el-footer{
    padding: 0;
}
</style>
<script>
   export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>