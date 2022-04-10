<template>
  <div>
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#1890ff"
      :router="true"
    >
      <el-menu-item index="/home" style="margin-left: 600px"
        ><i class="el-icon-s-home"></i>首页</el-menu-item
      >
      <el-menu-item index="/record"
        ><i class="el-icon-edit"></i>记账</el-menu-item
      >
      <el-menu-item index="/bills"
        ><i class="el-icon-notebook-2"></i> 账单</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>