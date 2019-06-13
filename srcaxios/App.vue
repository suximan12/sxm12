<template>
  <div id="app">
<button @click="show=!show">点我</button>
<table class="altrowstable" id="alternatecolor" v-show="show">
 <tr v-for="index in qwe">
    <td>{{index.id}}</td>
    <td>{{index.IMEI}}</td>
    <td>{{index.device}}</td>
    <td>{{index.message}}</td>
    <td>{{index.tel}}</td>
    <td>{{index.createdAt}}</td>
  </tr>
  </table>

  </div>
</template>
<script>
export default {
    data(){
        return{
            qwe:'未显示',
            show:''

        }
    },
    created(){
      this.axios.get('http://localhost:60020/all').then((response)=>{
        console.log(response.data);
        this.qwe=response.data.data;
        console.log(this.qwe);
      }).catch((error)=>{
          console.log(error)
      })
    },
    
}
function altRows(id){
    if(document.getElementsByTagName){  
        
        var table = document.getElementById(id);  
        var rows = table.getElementsByTagName("tr"); 
         
        for(i = 0; i < rows.length; i++){          
            if(i % 2 == 0){
                rows[i].className = "evenrowcolor";
            }else{
                rows[i].className = "oddrowcolor";
            }      
        }
    }
}

window.onload=function(){
    altRows('alternatecolor');
}
</script>

<style>
#app{
  margin-left: 45%;
}
#app table{
  background: pink;
  font-size: 20px;
  width: 800px;
  height: 400px;
  margin-left: -40%;
  margin-top: 10%;
}
#app button{
    margin-top: 10%;
  width: 100px;
  height: 50px;
  background:orange;
}
table.altrowstable {
    font-family: verdana,arial,sans-serif;
    font-size:11px;
    color:#333333;
    border-width: 1px;
    border-color: #a9c6c9;
    border-collapse: collapse;
}
table.altrowstable th {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #a9c6c9;
}
table.altrowstable td {
    border-width: 1px;
    padding: 8px;
    border-style: solid;
    border-color: #a9c6c9;
}
.oddrowcolor{
    background-color:#d4e3e5;
}
.evenrowcolor{
    background-color:#c3dde0;
}
</style>
