<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#1890ff"
    >
      <el-menu-item index="1" style="margin-left: 600px"
        ><i class="el-icon-s-home"></i>首页</el-menu-item
      >
      <el-menu-item index="2"
        ><i class="el-icon-notebook-2"></i> 账单</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
};
</script>

<style>
</style>