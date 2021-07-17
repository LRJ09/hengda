<template>
  <el-container class="container">
      <!-- 顶部 -->
    <el-header class="nav">Header</el-header>
     <!-- 中间主体 -->
    
      <el-container class="about" > 
          <!-- 中间主体导航 -->
          <el-row class="sub_nav">
            <!-- 中间主体导航左 -->
            <el-container class="sub_nav_l">
              <el-link >集团概况</el-link>
              <el-link >董事长致辞</el-link>
              <el-link >管理团队</el-link>
              <el-link >恒大荣誉</el-link>
            </el-container>
            <!-- 中间主体导航右 -->
            <el-container class="sub_nav_r">
              <i class="el-icon-s-home" style="color:#ff6900"></i>
              <el-link :underline="false">恒大集团</el-link>
              <i class="el-icon-caret-right" style="color:#ff6900"></i>
              <el-link :underline="false">集团概况</el-link>
            </el-container>
          </el-row>
        
          <!-- 中间主体 -->
          <el-main>
            <el-row>
              <el-main class="message_l">
                  <el-main class="message_l_title">
                    <div class="e-box">
                      </div>
                      <h1 style="font-size:72px;display:inline-block;">For </h1> 
                      <h1 style="color: #ff8400;font-size:72px;display:inline-block;padding-top:100">Evergrande</h1>
                   
                    <el-main style="display:block;margin-bottom:22px">
                    <h2 style="color: #ff8400;font-size:45px;float: left;">SINCE 1996</h2>
                    </el-main>
                    <el-main style="margin-bottom:12px">
                      <h4 style="font-size:24px;float: left;">恒大集团</h4>
                    </el-main>
                    <el-main>
                      <p style="color:#999;font-size:14px;text-align:left;margin-bottom:24px;">恒大集团是“多元产业+数字科技”的世界500强企业集团，旗下拥有恒大地产、恒大新能源汽车、恒大物业、恒腾网络、房车宝、恒大童世界、恒大健康、恒大冰泉等八大产业，为数亿用户提供全方位服务。目前，恒大总资产2.3万亿，年销售规模超7000亿，累计纳税超3000亿，慈善公益捐款超185亿，员工20万人，每年解决就业380多万人，在世界500强排名第152位。公司荣获党中央、国务院授予的“全国脱贫攻坚先进集体”，以及“全国抗击新冠肺炎疫情先进民营企业”等荣誉，集团董事局主席许家印多次荣获“全国劳动模范”等荣誉称号，并连续八届荣膺中国慈善领域最高政府奖“中华慈善奖”。</p>
                    </el-main>
                  </el-main>
              </el-main>
              <el-main class="message_r">
                <div class="img-box"></div>
                <img src="../assets/images/title.jpg" alt="" style="display: inline-block;vertical-align:bottom">
                <div class="wr"></div>
              </el-main>
            </el-row>
            <el-row>

            </el-row>
          </el-main>
      </el-container>
      <el-container class="businesslayout">
        <!-- 业务布局 -->
        <el-header style="font-size:24px;color:#333;line-height:30px;margin-bottom:18px">
                  业务布局
        </el-header>
           
        <el-main class="qiu">

        </el-main>
        <el-main class="picScroll-left" >
           <ul>
             <li style="width:222px;margin:18px;float: left;">
               <div style="margin:0 0 35px 21px;font-size:24px;color:#ff8400; ">地产开发</div>
              <div style="margin:0 0 10px 21px;color:#535353;font-size:14px;">
                 <p>2000年开始经营房地产业务，已覆盖全国七大区域、70座地级城市，为中国近百万户家庭提供标准化、系列化的住宅与社区商业产品。</p>
              </div>
              <a href="javascript:;" class="e_btn">
                <span class="seat"></span>
              </a>
             </li>
           <li style="width:222px;margin:18px;float: left;">
               <div style="margin:0 0 35px 21px;font-size:24px;color:#ff8400; ">商业开发及运营</div>
              <div style="margin:0 0 10px 21px;color:#535353;font-size:14px;">
                 <p>2000年开始经营房地产业务，已覆盖全国七大区域、70座地级城市，为中国近百万户家庭提供标准化、系列化的住宅与社区商业产品。</p>
              </div>
              <a href="javascript:;" class="e_btn">
                <span class="seat"></span>
              </a>
             </li> <li style="width:222px;margin:18px;float: left;">
               <div style="margin:0 0 35px 21px;font-size:24px;color:#ff8400; ">房地产金融</div>
              <div style="margin:0 0 10px 21px;color:#535353;font-size:14px;">
                 <p>2000年开始经营房地产业务，已覆盖全国七大区域、70座地级城市，为中国近百万户家庭提供标准化、系列化的住宅与社区商业产品。</p>
              </div>
              <a href="javascript:;" class="e_btn">
                <span class="seat"></span>
              </a>
             </li>
              <li style="width:222px;margin:18px;float: left;">
               <div style="margin:0 0 35px 21px;font-size:24px;color:#ff8400; ">物业服务</div>
              <div style="margin:0 0 10px 21px;color:#535353;font-size:14px;">
                 <p>2000年开始经营房地产业务，已覆盖全国七大区域、70座地级城市，为中国近百万户家庭提供标准化、系列化的住宅与社区商业产品。</p>
              </div>
              <a href="javascript:;" class="e_btn">
                <span class="seat"></span>
              </a>
             </li>
           </ul>
        </el-main>
  
      </el-container>
  
    
      <!-- 底部 -->
      <el-footer>footer</el-footer>
    </el-container>

</template>
<style scoped>
@keyframes seathover{
  100%{
     background-color: #ff8400;
     left: 100%;
     width: 100%;
  }
}
@keyframes seatshadow{
  0%{
  left: 0;
  width: 100px;
  }
}
@keyframes box {
  100%{
  background-color: #ff8400;
  left: 100%;
  width: 100%;
  }
  0%{
  left: 0;
  width: 100px;
  }
}
@keyframes img-box{
  100%{
  background-color: #ff8400;
  left: 100%;
  width: 100%;
  height: 100%;
  }
  0%{
  left: 0;
  width: 100px;
  height: 100%;
  }
}
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
  width: 1260px;
  height: 100%;
  margin: 0 auto;
  display:block;
  background:#fff url("../assets/images/c_k1_bg.png")no-repeat bottom left ;
  padding: 0 40px 40px 40px;
}
.sub_nav{
  height: 86px;
}
.sub_nav_l{
  width: 880px;
  height: 86px;
  line-height: 86px;
  display: inline-block;
}
.sub_nav_l .el-link{
  display: inline-block;
  margin-right:26px ;
}
.sub_nav_r{
  width: 260px;
  line-height: 86px;
  display: inline-block;
}
.message_l{
  width: 780px;
  padding-right:100px ;
  font:14px #767676;
  background:url("../assets/images/c_k1_adorn.png")no-repeat right 80px;
  float: left;
}
.message_l_title{ 
  padding-top:100 ;
  padding: 0;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.e-box{
  position: absolute;
  display:block;
  margin-bottom:70px;
  padding-top:100px;
  height: 58px;
  line-height: 58px;
  animation: box 3s;
}
.message_r{
  position: relative;
  float:right;
  overflow: hidden;
}
.img-box{
  position: absolute;
  animation: img-box 3s;
}
.wr{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 260px;
  height: 230px;
  background-color: #fff;
  display: block;
}
/* 业务布局 */
.businesslayout{
  width: 1260px;
  background-color: #ccc;
  display: block;
  margin: 0 auto;
  margin-top:40px;
  padding: 57px 40px 93px;
}
.qiu{
  background-color: orange;
  margin-left: 121px;
  height: 270px;
  margin-bottom:120px;
  width: 937px;
}
.picScroll-left{
  position: relative;
}
.e_btn{
  position: relative;
  display:block;
  padding: 2px;
  width: 61px;
  height: 61px;
  border: 0 none;
  overflow: hidden;
  margin: 0 auto;
  visibility: visible; 
  animation-delay: 1s;
}
.seat{
  background: url("../assets/images/next2.png")no-repeat 18px center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  line-height: 61px;
}
.seat:hover{
  animation: seathover 2s;
}
.seat::shadow{
  animation: seatshadow 2s;
}
.el-footer{
    padding: 0;
}
</style>
<script>
   export default {
    data() {
      return {
      };
    },
    methods: { 
    }
  };
</script>