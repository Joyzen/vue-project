<template>
  <div id="app">
    <el-row >
      <el-col ><v-head></v-head></el-col>
    </el-row>
    
    <el-col :span="5">
      <v-sidebar></v-sidebar>

    </el-col>
    <el-col :span="15" >
      <div class="content">
        <v-form></v-form>   
      </div>
    </el-col> 
    <el-col :span="4" >
      <div class="content">
        <vForm></vForm>   
      </div>
    </el-col> 
  </div>
</template>

<script>

import vHead from './common/Header.vue';
import vSidebar from './common/Sidebar.vue';
import vForm from './component/form.vue';

export default {
        components:{
            vHead,vForm,vSidebar
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
    padding:40px;
    box-sizing: border-box;
    overflow-y: auto;
}
</style>
