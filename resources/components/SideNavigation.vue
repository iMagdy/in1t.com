<template>
  <el-menu
    :router="true"
    default-active="0"
    class="side-menu">
    <el-row class="header">
      <el-col :span="24">
        <img 
          class="avatar" 
          alt="Islam Magdy"
          srcset="../assets/img/avatar-4.jpeg 320w, ../assets/img/avatar-3.jpeg 480w, ../assets/img/avatar-2.jpeg 800w"
          sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
          src="../assets/img/avatar.jpg" 
        />
      </el-col>
      <el-col :span="24">
        <h1 class="title">
          {{ $t('globals.author') }}
          <small>{{ $t('globals.title') }}</small>
        </h1>
      </el-col>
    </el-row>
    <el-menu-item 
      class="nav-item"
      index="/">
      <i class="el-icon-tickets" />
      <span>{{ $t('links.about') }}</span>
    </el-menu-item>
    <el-menu-item class="nav-item" index="/resume">
      <i class="el-icon-view" />
      <span>{{ $t('links.resume') }}</span>
    </el-menu-item>
    <el-menu-item class="nav-item" index="/contact">
      <i class="el-icon-message" />
      <span>{{ $t('links.contact') }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    name: 'SideNavigation'
  }
</script>

<style lang="scss" scoped>
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
  
  .rtl {
    .title, .nav-item {
      text-align: right;
    }
    .side-menu {
      padding-right: 0;
    }
  }
</style>
