<template>
    <div>
    <div class="tou">
      <div class="container">
        <img src="../assets/logo.png" alt="" />

        <ul>
          <li>
            <a href="">首页</a>
          </li>
          <li>
            <a href="">金地集团</a>
          </li>
          <li>
            <a href="">金地资讯</a>
          </li>
          <li>
            <a href="">线上选房</a>
          </li>
          <li>
            <a href="">加入金地</a>
          </li>
          <li>
            <a href="">联络关注</a>
          </li>
        </ul>
        <div class="sousuo"></div>
      </div>
    </div>
    </div>
</template>
<style scoped>
 .tou {
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
}
.container {
  line-height: 80px;
  width: 1200px;
  margin: 0 auto;
}
.container > img {
  width: 140px;
  height: 34px;
}
ul {
  float: right;
  font-size: 18px;
  position: relative;
}
li {
  flex: 1;
  width: 157px;
  position: relative;
  float: left;
}
a {
  display: inline-block;
  height: 100%;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: #333;
}

li:hover a {
  animation: test 0.4s;
  color: #ee722e;
  border-bottom: 4px solid #ff8400;
  width: 100%;
}

@keyframes test {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
} 
</style>
<script>
export default {
//     window.onscroll = function () {
//         //htmlHeight 是网页的总高度
//         var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
//         //clientHeight是网页在浏览器中的可视高度，
//         var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
//         //scrollTop是浏览器滚动条的top位置，
//         var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//         //通过判断滚动条的top位置与可视网页之和与整个网页的高度来返回各项参数
//         if (scrollTop + clientHeight == htmlHeight) {          
//             tou.style="background-color:none"
//             //alert("到顶了");
//         }else{
//             //alert("离开顶端");
//             tou.style="background-color:#fff"
//         }
//     },
//     methods:{
//         _initSwiper(){
//             var mySwiper=new Swiper('.swiper-container',{
//                 direction:'horizontal',
//                 loop:true,
//             pagination:{
//             el:'swiper-pagination'
//              }
//             })
//         }
//     },
//     created() {
//         this._initSwiper();
//     },

 }
</script>
