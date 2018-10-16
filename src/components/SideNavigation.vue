<template>
  <el-menu default-active="2" class="side-menu" router="true">
    <el-row>
      <el-col :span="24">
        <img class="avatar" src="../assets/avatar.jpg" />
      </el-col>
      <el-col :span="24">
        <h1 class="title">
          Islam Magdy
          <small>senior full stack engineer</small>
        </h1>
      </el-col>
    </el-row>
    <el-menu-item class="nav-item" index="/">
      <i class="el-icon-more"></i>
      <span>About</span>
    </el-menu-item>
    <el-menu-item class="nav-item" index="/resume">
      <i class="el-icon-document"></i>
      <span>Resume</span>
    </el-menu-item>
    <el-menu-item class="nav-item" index="/contact">
      <i class="el-icon-message"></i>
      <span>Contact</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideNavigation',
};
</script>

<style scoped lang="scss">

  .avatar {
    width: 70%;
    border-radius: 50%;
    margin: 20px;
  }

  .side-menu {
    min-height: 100vh;
    .nav-item {
      font-size: 15px;
      text-align: left;
      span {
        color: #1F5DD3;
        text-decoration: none;
      }
    }
  }

  .title {
    text-transform: uppercase;
    font-size: 15px;
    text-align: left;
    background: #1F5DD3;
    color: #fff;
    padding: 12px;
    small {
      display: block;
      font-size: 11px;
    }
  }

</style>
