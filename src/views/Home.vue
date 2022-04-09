<template>
  <div class="home">
  
    <div class="header">
      <div style="margin-left:30px">
        <h2 style="margin:10px 0 10px 0">首页</h2>
        <div style="display:flex"><img class="avatar" style="margin-bottom:10px" ></img>
        <h4 style="margin-left:30px;">欢迎使用简易记账</h4></div>
      </div>
      <div class="header-right">
        <div class="unit">
          <p style="font-size:14px;color:#8c8c8c">月份</p>
          <p style="font-size:24px">{{year}}-{{month}}</p>
        </div>
        <div class="unit"><p style="font-size:17px;color:#8c8c8c">支出</p></div>
        <div class="unit"><p style="font-size:17px;color:#8c8c8c">收入</p></div>
      </div>
    </div>
    <div class="main">

    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      year: "",
      month: "",
    };
  },
  created() {
    let date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth();
  },
};
</script>

<style scoped>
.main {
  height: 400px;
}
.avatar {
  background-color: lightblue;
  width: 70px;
  height: 70px;
  border-radius: 100px;
}
.header {
  width: 1250px;
  position: relative;
  display: flex;
  margin-left: 300px;
  flex-wrap: nowrap;
  background-color: #ffffff;
}
.header-right {
  margin-top: 10px;
  position: absolute;
  right: 20px;
  bottom: 30px;
  display: flex;
}
.unit {
  border-right: solid 2px #e8e8e8;
  margin-right: 5px;
  padding-right: 20px;
}
.home {
  background-color: #f0f2f5;
  height: 100%;
}
</style>
