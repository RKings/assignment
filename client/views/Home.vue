<template>
  <div class="page">
    <dept-header></dept-header>
    <dept-hero></dept-hero>
    <dept-welcome></dept-welcome>
    <dept-instafeed></dept-instafeed>
  </div>
</template>
<script>
import DeptHeader from '../components/header.vue';
import DeptHero from '../components/hero.vue';
import DeptWelcome from '../components/welcome.vue';
import DeptInstafeed from '../components/instafeed.vue';

export default {
  components: {
    DeptHeader,
    DeptHero,
    DeptWelcome,
    DeptInstafeed
  }
}
</script>
