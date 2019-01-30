<template>
  <el-row>
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
    <el-menu
      :router="true"
      default-active="0"
      class="side-menu">
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
  </el-row>
</template>
<script>
  export default {
    name: 'MobileNavigation'
  }
</script>

<style lang="scss" scoped>
  .avatar {
    border-radius: 50%;
    width: 33vw;
    margin-top: 3vh;
  }

  .side-menu {
    border: 0;
    .nav-item {
      display: inline;
      span {
        color: #1F5DD3;
        text-decoration: none;
      }
      &.is-active {
        font-weight: bold;
        background: transparent;
      }
    }
  }

  .title {
    font-size: 29px;
    font-weight: normal;
    margin: 14px 0 0 0;
    small {
      display: block;
      font-size: 13.3px;
    }
  }
</style>
