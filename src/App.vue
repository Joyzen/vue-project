<template>
  <div id="app">
    <el-container>

      <el-header height="70px">
        <v-head></v-head>
      </el-header>
      
      <el-container direction="horizontal">
        <el-aside width="250px">
            <v-sidebar></v-sidebar>
        </el-aside>
        <el-main>
            <v-tabs></v-tabs>   
        </el-main> 
      </el-container>
    </el-container>
  </div>
</template>

<script>

import vHead from './common/Header.vue';
import vSidebar from './common/Sidebar.vue';
import vTabs from './component/tabs.vue';

export default {
        components:{
            vHead,vSidebar,vTabs
        },
        methods: {
          onSubmit() {
            console.log('submit!');
          }
        }
    }

</script>
<style>
  body {
    font-family: Helvetica, sans-serif;
    overflow-y: auto;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .grid-content {
    border-radius: 10px;
    min-height: 36px;
  }
 .content{
    background: none repeat scroll 0 0 #fff;
    width: auto;
    padding:10px;
    box-sizing: border-box;
    
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width: 6px;
    height: 6px;
    background-color: #F5FFFA;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5FFFA;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #F5DEB3;
}
</style>
