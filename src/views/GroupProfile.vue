<template>
  <el-container class="container">
      <!-- 顶部 -->
    <el-header class="nav">
     <!-- <xm-header></xm-header> -->
    </el-header>
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
      <!-- 业务布局 -->
      <el-container class="businesslayout">
        <el-header style="font-size:24px;color:#333;line-height:30px;margin-bottom:18px">
                  业务布局
        </el-header>
           
        <el-main class="qiu">
          <ul>
            <li style="background: url('../assets/images/qiu1.png')" no-repeat center>
            <a href="javascript:;"></a></li>
          </ul>
        </el-main>
        <el-main class="picScroll-left" >
           <ul>
            <li style="width:222px;margin:18px;float: left;">
               <div style="margin:0 0 35px 21px;font-size:24px;color:#ff8400;
               position: relative; ">地产开发
               <div style="position: absolute;left: 0px;bottom: -23px;display: block;height: 4px;width: 26px;background: #ff6900;"></div></div>
               
              <div style="margin:0 0 10px 21px;color:#535353;font-size:14px;">
                 <p>2000年开始经营房地产业务，已覆盖全国七大区域、70座地级城市，为中国近百万户家庭提供标准化、系列化的住宅与社区商业产品。</p>
              </div>
              <a href="javascript:;" class="e_btn">
                <span class="seat"></span>
              </a>
            </li>
            <li style="width:222px;margin:18px;float: left;">
                  <div style="margin:0 0 35px 21px;font-size:24px;color:#ff8400;
                  position: relative;  ">商业开发及运营<div style="position: absolute;left: 0px;bottom: -23px;display: block;height: 4px;width: 26px;background: #ff6900;"></div></div>
                  <div style="margin:0 0 10px 21px;color:#535353;font-size:14px;">
                    <p>2000年开始经营房地产业务，已覆盖全国七大区域、70座地级城市，为中国近百万户家庭提供标准化、系列化的住宅与社区商业产品。</p>
                  </div>
                  <a href="javascript:;" class="e_btn">
                    <span class="seat"></span>
                  </a>
            </li> 
            <li style="width:222px;margin:18px;float: left;">
               <div style="margin:0 0 35px 21px;font-size:24px;color:#ff8400;
               position: relative;  ">房地产金融<div style="position: absolute;left: 0px;bottom: -23px;display: block;height: 4px;width: 26px;background: #ff6900;"></div></div>
              <div style="margin:0 0 10px 21px;color:#535353;font-size:14px;">
                 <p>2000年开始经营房地产业务，已覆盖全国七大区域、70座地级城市，为中国近百万户家庭提供标准化、系列化的住宅与社区商业产品。</p>
              </div>
              <a href="javascript:;" class="e_btn">
                <span class="seat"></span>
              </a>
            </li>
            <li style="width:222px;margin:18px;float: left;">
               <div style="margin:0 0 35px 21px;font-size:24px;color:#ff8400; 
               position: relative; ">物业服务<div style="position: absolute;left: 0px;bottom: -23px;display: block;height: 4px;width: 26px;background: #ff6900;"></div></div>
              <div style="margin:0 0 10px 21px;color:#535353;font-size:14px;">
                 <p>2000年开始经营房地产业务，已覆盖全国七大区域、70座地级城市，为中国近百万户家庭提供标准化、系列化的住宅与社区商业产品。</p>
              </div>
              <a href="javascript:;" class="e_btn">
                <span class="seat"></span>
              </a>
            </li>
            <li style="width:222px;margin:18px;float: left;">
               <div style="margin:0 0 35px 21px;font-size:24px;color:#ff8400; 
               position: relative; ">体育运营<div style="position: absolute;left: 0px;bottom: -23px;display: block;height: 4px;width: 26px;background: #ff6900;"></div></div>
              <div style="margin:0 0 10px 21px;color:#535353;font-size:14px;">
                 <p>以网球运动为主要业务平台，透彻了解国际网球运动领域的文化与产业理念，长期致力于中国体育产业的商业化进程建设。</p>
              </div>
              <a href="javascript:;" class="e_btn">
                <span class="seat"></span>
              </a>
            </li>
            <li style="width:222px;margin:18px;float: left;">
               <div style="margin:0 0 35px 21px;font-size:24px;color:#ff8400; 
               position: relative; ">产业园区<div style="position: absolute;left: 0px;bottom: -23px;display: block;height: 4px;width: 26px;background: #ff6900;"></div></div>
              <div style="margin:0 0 10px 21px;color:#535353;font-size:14px;">
                 <p>聚焦高科技、新能源、大健康、新文创等领域，自主开发纯产业类项目30余个，布局中国长三角、珠三角、环渤海和美国硅谷等全球产业高地。</p>
              </div>
              <a href="javascript:;" class="e_btn">
                <span class="seat"></span>
              </a>
            </li>
           </ul>
        </el-main>
       
      </el-container>
      <!-- 视频 -->
      <el-container class="cont">
        <el-main class="m1260" >
          <h2>视频恒大</h2>
          <ul class="" >
            <li>
              
            </li>
          </ul>
        </el-main>
      </el-container>
      <!-- 历史 -->
      <el-container class="lump3">
        <el-header style="padding:0;height:100%;">
          <h2 class="til-name">历年大事件</h2>
        </el-header>
        <em-main class="event-a">
          <ul class="swiper-wrapper"> 
              <li class="swiper-slide">
                <div class="xian"></div>
                <h3>2019</h3>
                <p>WTA与深圳开启十年之约，恒大精彩呈现2019WTA年终总决赛。</p>
              </li>
              <li class="swiper-slide">
                <div class="xian"></div>
                <h3>2018</h3>
                <p>在深圳隆重举行30周年庆典暨产品品牌发布会，主题为“金地因你，更大更强”</p>
              </li>  
              <li class="swiper-slide">
                <div class="xian"></div>
                <h3>2017</h3>
                <p>金地集团公布2016年度报告，归属母公司净利润同比增长96.87%</p>
              </li>
              <li class="swiper-slide">
                <div class="xian"></div>
                <h3>2017</h3>
                <p>金地集团公布2016年度报告，归属母公司净利润同比增长96.87%</p>
              </li>
              <li class="swiper-slide">
                <div class="xian"></div>
                <h3>2017</h3>
                <p>金地集团公布2016年度报告，归属母公司净利润同比增长96.87%</p>
              </li>
              <div class="swiper-button-next" role="button"></div>
          <div class="swiper-button-prev"></div>
          </ul>
          
        </em-main>
        <em-main class="event-b">
          <em-main class="event-c">
            <img src="../assets/images/abt_k2_img.jpg" alt="">
          </em-main>
          <em-main class="event-d">
            <em></em>
            <h3>做中国最有价值的
              <br>
              国际化企业</h3>
            <h4>BE THE MOST VALUABLECHINESE REAL ESTATE</h4>
            <p>ENTERPRISE WITH A GLOBALPRESENCE</p>
          </em-main>
        </em-main>
        <el-footer class="foori" style="margin-top: 30px;">
          <p>以客户认可、市场认同、企业信誉和业绩为基础，金地集团连续多年入选福布斯全球企业2000强、《财富》中国500强榜单。并于2020年获得中国房地产开发企业500强第16名，连续17年蝉联"中国蓝筹地产"、连续16年跻身"沪深房地产上市公司综合实力10强",还获得2020年度卓越投资价值地产上市公司。同时，金地集团还入选《福布斯》杂志评选的"全球最佳雇主榜单”、荣获“2020年度中国地产数字力TOP20房企”、“2020年中国房企最佳治理奖”、“2020年度战'疫'先锋奖”等多项殊荣。</p>
          <h4>
            展望未来，金地集团将以价值创造为目的，以效益与规模的平衡均好发展为导向，
            <br>
            向“做中国最有价值的国际化企业”的宏伟愿景持续迈进。
          </h4>
        </el-footer>


      </el-container>
      <!-- 底部 -->
    <el-footer>footer</el-footer>
  </el-container>

</template>
<style scoped>
@keyframes move{
  0% {
    transform: translateX(0);
  }
  50%{
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
}
}
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
  overflow-y: auto;
  min-width: 1260px;
  padding-top:80px ;
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
  background-color: #fff;
  display: block;
  margin: 0 auto;
  margin-top:40px;
  padding: 57px 40px 93px;
}
.qiu{
    margin-left: 121px;
    position: relative;
    height: 270px;
    margin-bottom: 120px;
    width: 937px;
    overflow: hidden;
}
.qiu ul li{
  position: absolute;
}
.qiu ul li:nth-child(1) {
    bottom: -32px;
    left: 43px;
    width: 88px;
    height: 87px;
    animation: waggle2 16s linear infinite alternate;
    background-size: 100% 100%;
}
.picScroll-left{
  position: relative;
  overflow: hidden;

}
.picScroll-left ul{
   width: 200%;
  animation: 15s move linear infinite;

}
.picScroll-left ul:hover {
  animation-play-state: paused;
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
  border: 2px solid #ccc;
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
.cont{
  padding-top:60px ;
  height: 454px;
  background-color: #f4ece9;
}
.event-a{
  display: block;

}
.m1260,.lump3{
  width: 1260px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding: 57px 40px 93px;
}
.m1260 h2{
  color: #585756;
  font-size:24px ;
  line-height: 1;
  margin-bottom: 30px;
  text-align:center;
}
.m1260 ul {
  width: 4686px;
  position: relative;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  left: -852px;
}
.m1260 ul li{
  height: 220px;
  margin-right:19px ;
  cursor: pointer;
}
.lump3{
  padding: 57px 40px 93px;
  margin: 0 auto;
  margin-bottom: 60px;
  background: #fff;
  position: relative;
}
.til-name{
  display: block;
  font-size:24px;
  color: #333;
  line-height: 30px;
  margin-bottom: 18px;
  width: 100%;
}
.event-a{
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
}
.event-a .swiper-slide:nth-child(2n-1) {
    padding-top: 55px;
    box-sizing: border-box;
}
.swiper-wrapper{
    width: 200%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    overflow: hidden;
    position: relative;
}
.swiper-slide{
    width: 272.5px;
    height: 250px;  
    text-align: left;
    font-size: 18px;
    background: #fff;
    display: flex;
    align-items: left;
    position: relative;
}
.xian{
  left: 4px;
  position: absolute;
  top: 72px;
  height: 111px;
  width: 2px;
  background: linear-gradient(to bottom, #d7ba93 0%, #e5d2b8 80%, #ffffff 100%);
}
.swiper-slide h3{
  position: relative;
  color: #ff6900;
  font-size:18px;
  font-weight: 600;
  background: url('../assets/images/yuan.png') no-repeat center left;
  padding-left:22px ;
  display: block;
}
.swiper-slide p{
  display: block;
  padding-left: 22px;
  color: #32323c;
  font-size: 15px;
  margin: 30px 0;
}
.swiper-button-next{
    position: absolute;
    right: 0;
    bottom: 0;
    top: auto;
    background-image: url("../assets/images/next2.png") !important;
    background-position: 60% !important;
    background-repeat: no-repeat;
    background-size: 22px !important;
    width: 61px;
    height: 61px;
    border: 2px solid #dadadc !important;
}
.swiper-button-prev{
    position: absolute;
    bottom: 0;
    transition: all 0.5s;
    border: 2px solid #dadadc !important;
    opacity: 1 !important;
    right: 71px;
    top: auto;  
    left: auto;
    background-image: url("../assets/images/prev2.png") !important;
    background-position: 40% !important;
    background-size: 22px !important;
    background-repeat: no-repeat;
    width: 61px;
    height: 61px;
}
 	.event-b{
  margin-top: 50px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 50px;
  overflow: hidden;
  display: block;
}
.event-c{
  width: 63%;
  float: left;
  height: 344px;
  overflow: hidden;
}
.event-c img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  max-width: 100%;
}
.event-d{
  padding: 75px 15px 60px 40px;
  width: 37%;
  background: url('../assets/images/about-c.png') no-repeat;
  float: left;
  background-size: 100% 100%;
  height: 344px ;
  overflow: hidden;
}
.event-d em{
  height: 4px;
  width: 20px;
  background: #ff8400;
  display: block;
}
.event-d h3{
  color: #585756;
  font-size: 20px;
  font-weight: 600;
  margin: 15px 0;
}
.foori{
  width: 100% !important;
  height: 100% !important;
  margin-top:0 !important;
}
.foori p{
  margin-bottom: 5px;
  text-align: justify;
  line-height: 24px;
  font-size: 14px;
  color: #999;
  display: block;
}
.foori h4{
  font-size: 24px;
  color: #585858;
  margin-top: 20px;
  line-height: 30px;
  display: block;
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