<template>

      <Header/>
      <router-view/>
      <Footer/>

</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import './assets/less/style.css';
import './assets/less/style.less';

export default {

  name: 'App',
  components: {
    Header,
    Footer

  },
  mounted(){

  }

}
</script>
<style lang="scss">

</style>d:\CODING\PROJECTS\PoetryLAST\frontend\public\fonts d:\CODING\PROJECTS\PoetryLAST\frontend\public\js d:\CODING\PROJECTS\PoetryLAST\frontend\public\less d:\CODING\PROJECTS\PoetryLAST\frontend\public\favicon.ico
