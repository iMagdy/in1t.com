<template>
  <el-menu
    :router="true"
    default-active="2"
    class="side-menu">
    <el-row class="header">
      <el-col :span="24">
        <img class="avatar" src="../assets/img/avatar.jpg" />
      </el-col>
      <el-col :span="24">
        <h1 class="title">
          Islam Magdy
          <small>senior full stack engineer</small>
        </h1>
      </el-col>
    </el-row>
    <el-menu-item 
      class="nav-item"
      index="/">
      <i class="el-icon-more" />
      <span>About</span>
    </el-menu-item>
    <el-menu-item class="nav-item" index="/resume">
      <i class="el-icon-document" />
      <span>Resume</span>
    </el-menu-item>
    <el-menu-item class="nav-item" index="/contact">
      <i class="el-icon-message" />
      <span>Contact</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'SideNavigation'
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/mixins';

  .avatar {
    width: 70%;
    border-radius: 50%;
    margin: 20px;
    @include respondTo(smartphone) {
      width: 21vw;
      margin: 0;
      position: absolute;
      top: 18px;
      left: 13px;
    }
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
      @include respondTo(smartphone) {
        display: inline;
      }
    }
    @include respondTo(smartphone) {
      min-height: auto;
    }
  }

  .header {
    @include respondTo(smartphone) {
      padding: 20px 20px 0 20px;
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
    @include respondTo(smartphone) {
      padding-left: 23vw;
      border-radius: 30px;
    }
  }
</style>
