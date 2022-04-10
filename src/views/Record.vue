<template>
  <div class="main">
    <div class="tabs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="支出" name="支出">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="指出类别">
              <el-select v-model="form.category">
                <el-option
                  v-for="(item, index) in categories"
                  :label="item"
                  :value="item"
                  :key="item"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="收入" name="收入">收入</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "支出",
      form: {},
      categories: [
        "餐饮",
        "购物",
        "日用",
        "交通出行",
        "休闲娱乐",
        "住房",
        "教育",
        "医疗",
      ],
    };
  },
};
</script>

<style scoped>
.main {
  background-color: #f0f2f5;
  position: relative;
  height: 600px;
}
.tabs {
  width: 1000px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: 0.5px solid #e8e8e8;
  padding: 30px;
}
</style>