<template>
  <div id="app">
    <el-container>

      <el-header height="60px">
        <v-head></v-head>
      </el-header>
      
      <el-container direction="horizontal">

        <transition name="fade">
          <el-aside v-if="menu_show" width="250px">
            <v-sidebar></v-sidebar>
          </el-aside>
        </transition>
        
        <el-main>

            <v-tabs></v-tabs>   
            <!-- <el-footer height="50px"> -->
              <el-collapse v-model="activeNames">
                <el-collapse-item title="一致性 Consistency" name="1">
                  <v-form></v-form>
                </el-collapse-item>
              </el-collapse>
            <!-- </el-footer> -->
        </el-main> 

      </el-container>

    </el-container>

    <el-button icon="el-icon-menu" class="toggle-button" 
      v-on:click="menu_show = !menu_show" size="small">
    </el-button>

  </div>
</template>

<script>

import vHead from './common/Header.vue';
import vSidebar from './common/Sidebar.vue';
import vTabs from './component/tabs.vue';
import vForm from './component/form.vue';

export default {
        data(){
          return {
            menu_show:true,
            activeNames: ['1']
          }
        },
        components:{
            vHead,vSidebar,vTabs,vForm
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

  .el-collapse{
    position: fixed;
    bottom: 0px;
    width: inherit;
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-left: 0px;
    padding-right: 0px;
  }

  .toggle-button {
        position: fixed;
        left: 0px;
        bottom: 0px;
    }

  .el-main {
    padding: 0px 20px 0px 0px;
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
  /**
  *隐藏高德地图logo
  */
  .amap-logo {
    right: 0 !important;
    left: auto !important;
    display: none;
  }
  .amap-copyright {
    right: 70px !important;
    left: auto !important;
    display: none !important;
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
      /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
      border-radius: 10px;
      background-color: #F5FFFA;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
      border-radius: 10px;
      /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
      background-color: #F5DEB3;
  }
</style>
