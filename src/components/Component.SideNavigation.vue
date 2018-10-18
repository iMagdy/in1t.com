<template>
  <el-menu
    default-active="2"
    class="side-menu"
    :router="true">
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
  import '@/styles/Component.SideNavigation.scss';
  export default {
    name: 'SideNavigation',
  };
</script>