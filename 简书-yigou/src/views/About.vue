<template>
  <div class="about">
         <ul>
        <li>
          <p>
            <a href="#"><img src="https://i.loli.net/2019/06/06/5cf8b69ac8ff127392.jpg" alt="wuxiaobu.jpg" title="wuxiaobu.jpg" />
            <span>吴布</span></a>
            <span>2017.12.06</span>
            <span>21:00</span>
          </p>
          <div class="card_c">
          <h4>湖南|烟雨凤凰古城</h4>
          <div class="font">
          1.凤凰古城，边城浪子。如果我是边城，那么你就是浪子。一次偶然，我和詹姆斯吃着饭，詹姆斯说来了这么久也没有出去，不如周末开车去哪里转转。我...
         </div>
          <p><img src="https://i.loli.net/2019/06/06/5cf8b72c2d8f729131.jpg" alt="gucheng.jpg" title="gucheng.jpg" />
          </p>
          </div>
        </li>

      </ul>
  </div>
</template>

<style lang="scss" scoped>
.about{
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    li{
      list-style: none;
       border-bottom:1px solid #969696;
       display: flex;
       flex-direction: column;
       text-align: left;
       padding-bottom: 24px;
       p{
        height: auto;
         a{
           text-decoration: none;
           img{
           width: 30px;
           border-radius: 15px;
         }
         span{
            color:#333333;
            margin-left: 10px;
            font-size: 16px;
           }
         }
         span{
           font-size: 12px;
           color: #969696;
           padding: 0px 10px;
         }
       }
       .card_c{
         margin-top: -25px;
          h4{
          color: #333333;
          }
           .font{
          width: 70%;
          margin-top:-10px;
          line-height: 30px;
          color: #A5A5A5;
          white-space: normal;
          }
          p{
            text-align: end;
          img{
             width: 10%;
            position: absolute;
            margin-left: -160px;
            margin-top: -120px;
          }
        }
       }
        .icon{
          font-size: 18px;
          color: #B5B5B5;
          margin-top: -38px;
          i{
             padding-right: 20px;
          }
        }
    }
  }
}

@media screen and (max-width: 745px) {
  .about{
     width: 95%;
     margin: 0 auto;
     ul{
       li{
         width: 100%;
         .card_c{
           h4{
             font-size: 24px;
           }
           .font{
             width: 100%;
             font-size: 18px;
           }
           p{
             img{
               display: none;
             }
           }
         }
       }
     }
   }
}
</style>

