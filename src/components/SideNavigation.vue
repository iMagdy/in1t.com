<template>
  
  <el-menu default-active="2" class="side-menu">


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
    
    <el-menu-item class="nav-item" index="2">
      <i class="el-icon-more"></i>
      <span><router-link to="/">About</router-link></span>
    </el-menu-item>
    <el-menu-item class="nav-item" index="3">
      <i class="el-icon-document"></i>
      <span><router-link to="/resume">Resume</router-link></span>
    </el-menu-item>
    <el-menu-item class="nav-item" index="5">
      <i class="el-icon-message"></i>
      <span><router-link to="/contact">Contact</router-link></span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideNavigation',
  // props: {
  //     items: [String]
  // },
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
      a {
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
