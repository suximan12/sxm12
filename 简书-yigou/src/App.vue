<template>
  <div id="appi">
    <div id="nav">
      <img src="https://i.loli.net/2019/06/11/5cff43ba84af021263.png" alt="paid-content-6f5f218ca8590aa726791acab7b37951.png" title="paid-content-6f5f218ca8590aa726791acab7b37951.png" />
      <div class="zujian">
      <router-link to="/" class="home"><i class="iconfont icon-xiaohonghua">文章</i></router-link>     
      <router-link to="/about" class="about"><i class="iconfont icon-huo">连载</i></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#appi {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  color: #2c3e50;
  width: 50%;
  // display: flex;
}
#nav {
  img{
    width: 100%;
    margin:0 auto;
  }
  .zujian{
     margin-top: 30px;
     padding: 13px 0px 10px 5px;
     border-bottom: 1px solid #f0f0f0;
     line-height: 35px;
     .home{
       width: 5%;
      //  background-color: bisque;
       color: #646464;
       text-decoration: none;
       i{
         font-size: 18px;
         font-weight: 700;
         line-height: 25px;
         color: #969696;
       }
     }
     .about{
       width: 5%;
       margin-left: 30px;
       text-decoration: none;
       i{
         font-size: 18px;
         font-weight: 700;
         line-height: 25px;
         color: #969696;
       }
     }
     :hover{
       color: #646464;
       border-bottom: 1px solid #646464;
       padding-bottom: 19px;
       i{
         color: #646464;
       }
     }
     :focus{
       color: #646464;
       border-bottom: 2px solid #646464;
       padding-bottom: 19px;
       i{
         color: #646464;
       }
     }   
  }
    }
  
@media screen and (max-width: 745px){
   #appi{
     width: 100%;
   }
  #nav{
    
    .img{
      width: 100%;
    }
  .zujian{
    text-align:center;
    .home{
         margin-right: 80px;
    }
    .about{
      
        // margin-left: 80px;
      
    }
     }
   }
  }

</style>
