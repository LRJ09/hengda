<template>
  <div>
    <xm-header></xm-header>
    <div class="banner">
      <el-carousel height="600px">
        <el-carousel-item>
            <img src="../assets/banner1.jpg" alt="">
        </el-carousel-item>
                <el-carousel-item>
            <img src="../assets/banner2.jpg" alt="">
        </el-carousel-item>
                <el-carousel-item>
            <img src="../assets/banner3.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
            <img src="../assets/banner4.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
        <div class="title">
        <span>本地楼盘</span>
        <p>LOCAL PROPERTY</p>
    </div>
    <div class="card">
        <div class="container">
            <el-carousel :interval="4000" type="card" height="400px">
               
                 <el-carousel-item>
                      <div class="heige">
                    <span>哈尔滨中央大街</span>
                    <p>约46550元/㎡</p>
                    <a href="#">更多</a>                   
                    </div>
                  <img src="../assets/c1.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../assets/c2.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../assets/c3.jpg" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    <div class="title">
        <span style="color:white">最热楼盘</span>
        <p style="color:white">POPULAR PROJECT</p>
    </div>
    <div class="bgi"></div>
    <div class="t3 clearfix">
      <div class="container">
        <div class="c1">
          <div class="hei">
            <span>黑龙江金地花园</span>
            <a href="">更多></a>
            <p>双轨枢纽丨主城成熟配套</p>
            <h4>
              约
              <b>46550元/㎡</b>
            </h4>
            <div><img src="../assets/position.png" alt="" />哈尔滨市</div>
          </div>
        </div>
        <div class="c1 c2">
          <div class="hei">
            <span>吉林金地·嘉悦湾</span>
            <a href="">更多></a>
            <p>稀缺低密丨长春新核心</p>
            <h4>
              约
              <b>16550元/㎡</b>
            </h4>
            <div><img src="../assets/position.png" alt="" />长春市</div>
          </div>
        </div>
        <div class="c1 c3">
          <div class="hei">
            <span>辽宁洪悦湾</span>
            <a href="">更多></a>
            <p>市区核心丨600M中心商业区</p>
            <h4>
              约
              <b>35750元/㎡</b>
            </h4>
            <div><img src="../assets/position.png" alt="" />沈阳市</div>
          </div>
        </div>
      </div>
    </div>
    <div class="title">
        <span>本地资讯</span> 
        <p>LOCAL INFORMATION</p>
    </div>
    <div class="t4 clearfix">
        <div class="container">
            <div class="di">
                <div class="left">
                    <h2>05</h2>
                    <p>2020-25</p>
                </div>
                <div class="right">
                    <h3>要闻 | 斥资千万资助新奉贤中学教育...</h3>
                    <span>要闻 | 斥资千万资助新奉贤中学教育集团，奉贤教育创新发展品质发展出新招</span>
                </div>
            </div>
            <div class="di" style="margin-left:12px">
                <div class="left">
                    <h2>02</h2>
                    <p>2020-14</p>
                </div>
                <div class="right">
                    <h3>情人节，我的业主我来宠</h3>
                    <span>情人节，我的业主我来宠</span>
                </div>
            </div>
            <div class="di" style="margin-top:12px">
                <div class="left">
                    <h2>12</h2>
                    <p>2019-05</p>
                </div>
                <div class="right">
                    <h3>G60科创云廊体验中心即将开馆，全程...</h3>
                    <span>大家期待已久G60科创云廊（拉斐尔云廊） 完工已进入倒计时！</span>
                </div>
            </div>
            <div class="di" style="margin-left:12px;margin-top:12px">
                <div class="left">
                    <h2>10</h2>
                    <p>2019-27</p>
                </div>
                <div class="right">
                    <h3>重大利好！明华路隧道开工，擎起...</h3>
                    <span>主干道之于城市，一如灵魂之于生命，作为陆路出入上海市区的南大门，也是上海市总体路网的中的骨干...</span>
                </div>
            </div>
        </div>
    </div>
    <div class="t5">
      <xm-footer></xm-footer>
    </div>
  </div>
</template>

<script>
import {XmFooter,XmHeader} from '../components/index';
export default {
  components: {XmHeader,XmFooter}
};
</script>
<style scoped>
/* 清除浮动 */
     .clearfix:after,.clearfix:before{
        content: "";
        display: table;
    }
    .clearfix:after{
        clear: both;
    }
    .clearfix{
        *zoom: 1;
    }
    p{
    list-style-type: none;
    margin: 0;
    padding: 0;
    }
.title{
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
}
.title>span{
    font-size: 2.25rem;
    color: #ee722e;
    font-weight: 400;
    height: 3.125rem;
}
.title>p{
    font-size: 1rem;
    color: #7d7d7d;
    margin-top: 10px;
}
.heige{
    width: 500px;
    height: 360px;
    margin: 20px;
    position: relative;
}
.banner{
    width: 100%;
}

* {
  box-sizing: border-box;
}
.container {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.container .c1:nth-child(2) {
  margin-left: 20px;
}
.container .c1:nth-child(3) {
  margin-left: 20px;
}
.c1:hover {
  margin-top: -20px;
}
.c1:hover .hei {
  background-color: rgba(226, 106, 16, 0.7);
  height: 225px;
}
.c1:hover a {
  display: block;
}
.c1 {
  width: 380px;
  height: 560px;
  background-image: url("../assets/c1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  float: left;
  transition: 0.8s;
}
.hei {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 187px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 2rem;
  transition: 0.8s;
}
.c2 {
  background-image: url("../assets/c2.jpg");
}
.c3 {
  background-image: url("../assets/c3.jpg");
}
.hei > span {
  font-weight: 400;
  font-size: 1.5rem;
  height: 2.5rem;
  margin-top: 10px;
}
.hei > a {
  color: #fff;
  float: right;
  /* display: none; */
  vertical-align: center;
  display: none;
}
.hei > p {
  font-size: 14px;
  margin-top: 12px;
  margin-left: 0 !important;
}
.hei > h4 {
  margin-top: 24px;
}
.hei > h4 > b {
  font-size: 28px;
  font-weight: bold;
}
.hei > div {
  margin-top: 10px;
}
.hei > div > img {
  width: 16px;
}
.bgi {
  background-image: url("../assets/indexnew.png");
  position: absolute;
  top: 1300px;
  left: 0;
  width: 100%;
  height: 40rem;
  z-index: -1;
}
.di{
    width: 594px;
    height: 140px;
    background-color: #f8f8f8;
    padding: 40px 30px;
    transition: all .6s;
    float: left;
}
.di>.left{
    float: left;
    text-align: center;
    border-right: 1px solid #afafaf;
    width: 100px;
}
.di>.left>h2{
    font-size: 46px;
    color: #404040;
    line-height: 2.1875rem;
}
.di>.left>p{
    font-size: 14px;
    color: #6b6969;
    margin-top: 15px;
}
.di>.right{
    margin-left: 10px;
    float: left;
    width: 360px;
    margin-left: 40px;

}
.di>.right>h3{
    font-size: 1.25rem;
    color: #404040;
    font-weight: 400;
    height: 1.75rem;
    overflow: hidden;
    transition: all .6s;
}
.di>.right>span{
  font-size: .875rem;
    color: #6b6969;
    line-height: 1.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
}
.di:hover{
  border: 1px solid #ee722e;
  box-shadow: 0 2px 10px #c3c3c3;
}
</style>