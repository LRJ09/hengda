<template>
  <el-container class="container">
      <!-- 顶部 -->
    <el-header class="nav">Header</el-header>


    <!-- 中间主体 -->
      <el-container class="about" > 
          <!-- 中间主体导航 -->
        <el-aside-nav>
          <el-row class="sub_nav">
               <!-- 中间主体导航左 -->
            <el-tabs v-model="activeName" @tab-click="handleClick" class="sub_nav_l"   >
              <el-tab-pane label="集团概况" name="first">集团概况</el-tab-pane>
              <el-tab-pane label="董事长致辞" name="second">董事长致辞</el-tab-pane>
              <el-tab-pane label="管理团队" name="third">管理团队</el-tab-pane>
              <el-tab-pane label="金地荣誉" name="fourth">恒大荣誉</el-tab-pane>
            </el-tabs>
            <el-aside class="sub_nav_r">
              <i class="el-icon-s-home" style="color:#ff6900"></i>
              <el-link :underline="false">恒大集团</el-link>
              <i class="el-icon-caret-right" style="color:#ff6900"></i>
              <el-link :underline="false">集团概况</el-link>
            </el-aside>

          </el-row>
             <!-- 中间主体导航右 -->
           
        </el-aside-nav>
          <!-- 中间主体 -->
        <el-aside-top class="message">
        <!-- <el-row > -->
          <el-main class="message_l">
            <el-main class="message_l_title">
              <el-main style="display:block;margin-bottom:70px;padding-top:100px">
                <h1 style="font-size:72px;display:inline-block;">ABOUT</h1> 
                <h1 style="color: #ff8400;font-size:72px;display:inline-block;padding-top:100">GEMDALE</h1>
              </el-main>
              <el-main style="display:block;margin-bottom:22px">
              <h2 style="color: #ff8400;font-size:45px;float: left;">SINCE 1988</h2>
              </el-main>
              <el-main style="margin-bottom:12px">
                <h4 style="font-size:24px;float: left;">恒大集团</h4>
              </el-main>
              <el-main style="margin-bottom:24px;">
                <p style="color:#999;font-size:14px;text-align:left;">恒大集团是“多元产业+数字科技”的世界500强企业集团，旗下拥有恒大地产、恒大新能源汽车、恒大物业、恒腾网络、房车宝、恒大童世界、恒大健康、恒大冰泉等八大产业，为数亿用户提供全方位服务。目前，恒大总资产2.3万亿，年销售规模超7000亿，累计纳税超3000亿，慈善公益捐款超185亿，员工20万人，每年解决就业380多万人，在世界500强排名第152位。公司荣获党中央、国务院授予的“全国脱贫攻坚先进集体”，以及“全国抗击新冠肺炎疫情先进民营企业”等荣誉，集团董事局主席许家印多次荣获“全国劳动模范”等荣誉称号，并连续八届荣膺中国慈善领域最高政府奖“中华慈善奖”。</p>
              </el-main>
          </el-main>
           
          </el-main>

          <el-main class="message_r" style="display: inline-block;">
            <el-main>
              <img src="../assets/images/title.jpg" alt="">
            </el-main>
          </el-main>


        <!-- </el-row> -->
        </el-aside-top>
      </el-container>


      
      <!-- 底部 -->
      <el-footer>footer</el-footer>
    </el-container>

</template>
<style scoped>
.el-main{
  padding: 0;
}
.container{
  background:#fcf8f6 url('../assets/images/body_bg.jpg')repeat-x top left;
}
.nav{
    height: 80px;
    padding: 0;
}
.about{
  padding: 70px 0 200px;
  margin-bottom:60px ;
  width: 100%;
  width: 1260px;
  height: 100%;
  margin: 0 auto;
  display:block;
  background-color: #ccc;
  padding: 0 40px 40px 40px;
}
.sub_nav{
  height: 86px;
}
.sub_nav_l{
  width: 370px;
  height: 86px;
  display: block;
  float: left;
  line-height: 86px;
}
.sub_nav_r{
  float: right;
  line-height: 86px;
}
.message{
  background-color: #ccc;
  display: block;
}
.message_l{
  display: inline-block;
  width: 780px;
  padding-right:100px ;
}
.message_l_title{ 
  padding-top:100 ;
  padding: 0;
  float: left;
  display: block;
}
.message_r{
  display: inline-block;
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