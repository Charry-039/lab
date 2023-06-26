<template>
    <el-container>
      <el-header class="layout">
        <Header/>
      </el-header>
      <el-container style="background-color: cadetblue">
        <el-main style="background-color: aqua">Main</el-main>
      </el-container>
    </el-container>
</template>

<script setup>
import Header from '../views/header.vue'
</script>

<style scoped src="../assets/style/home.less"/>
