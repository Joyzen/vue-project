<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '用户管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '班级管理',
                        subs: [
                            {
                                index: 'basetable',
                                title: '班级信息维护'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '教育经历',
                        subs: [
                            {
                                index: 'baseform',
                                title: '基本表单'
                            },
                            {
                                index: 'vueeditor',
                                title: '编辑器'
                            },{
                                index: 'vueeditor1',
                                title: '编辑器'
                            },{
                                index: 'vueeditor2',
                                title: '编辑器'
                            },{
                                index: 'vueeditor3',
                                title: '编辑器'
                            },{
                                index: 'vueeditor4',
                                title: '编辑器'
                            },{
                                index: 'vueeditor5',
                                title: '编辑器'
                            },
                            {
                                index: 'markdown6',
                                title: 'markdown'
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'basecharts',
                        title: '图表'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'drag',
                        title: '拖拽'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                //return this.$route.path.replace('/','');
                return '';
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        width: 250px;
        background: #eef1f6;
        overflow-y: auto;
        margin-bottom: 0px;
        position: fixed;
        top: 70px;
        bottom: 0px;
    }
    .sidebar > ul {
        height:100%;
    }
    .btn{
        position: fixed;
        bottom: 30px;
        left: 230px;
    }
</style>
