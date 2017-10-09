<template>
    <div>
        <el-tabs>
            <el-tab-pane v-for="(panel,index) in panels" :label="panel.title" 
                :name="panel.name" :key="panel.name"
            >
                <component :is="panel.component"></component>
                <component :is="panel.component"></component>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<<script>

import vForm from './form.vue';
import mapc from './../common/map.vue';

export default {
    components:{
            vForm,mapc
    },
    data(){
        return {
            panels:[
                {
                    title:'地图',
                    name:'tab_map',
                    component:'mapc',
                },{
                    title:'列表',
                    name:'tab_panel',
                    component:'vForm',
                }
                
            ]
        }
    }
}
</script>

  
