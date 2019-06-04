<template>
  <div class="box">
    <div class="nav">

        <div class="logo" @click="add(index=0)">
        <router-link to="/logo"><img src="./assets/logo.png" alt=""></router-link>
        </div>
              <div @click="add(index=1)" :class="{active: list==1}" class="home">
                  <router-link to="/home"><h1 class="h1">home页面</h1></router-link>
              </div>
                      <div @click="add(index=2)" :class="{active: list==2}" class="chat">
                          <router-link to="/chat"><h1 class="h1">chat页面</h1></router-link>
                      </div>
                            <div @click="add(index=3)" :class="{active: list==3}" class="text">
                           <router-link to="/text"><h1 class="h1">text页面</h1></router-link>
                            </div>
    </div>
    <div class="neirong">
          <div class="h2">
          <router-view></router-view>
          </div>

    </div>
      <footer-t></footer-t>
  </div>
</template>


<script>
import footer from './components/footer'
export default{
 components:{
   'footer-t': footer
 },
 data(){
   return{
    list: '' }
 },
 methods:{
   add (index){
     this.list=index
   }
 }
}
// export default{}
// Vue.component('footer',{
//   template:'<h1>footer</h1>'
// })
// new Vue({
//   el:".box"
// })


// var footer ={
//   template:'<div>footer</div>'
// }
// new Vue({
//   el:"#root",
//   components:{
//     'footer-t':footer
//   },
// })


</script>


<style>
a{
color:#FF0000
}
*{
  padding: 0;
  margin: 0;
  list-style: none;
}

.box{
  width:100%;
  height: 700px;
}
.nav{
  background: orange;
  width: 100%;
  height: 150px;
}
.logo{
  float: left;
  margin-left: 20%;
   width: 10%;
  height: 150px;
}
.logo img{
  width: 100%;
  height:150px;
}
a{
  text-decoration: none;
  color: black;
}
.home{
  text-align: center;
  float: left;
   width: 15%;
  height: 150px;
}
.chat{
  text-align: center;
  float: left;
   width: 15%;
  height: 150px;
}
.text{
  text-align: center;
  float: left;
   width: 15%;
  height: 150px;
}
.neirong{
  background:#eeeeee;
width: 100%;
height: 500px;
}
.h1{
  padding-top:50px;
  text-align: center;
}
.h2{
  padding-top:200px;
  text-align: center;
}
.home.active{
  background: #eee;
}
.chat.active{
  background: #eee;
}
.text.active{
  background: #eee;
}
</style>
