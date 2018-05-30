<template>
  <div class="page">
    <dept-header></dept-header>
    <dept-hero></dept-hero>
  </div>
</template>
<script>
import deptHeader from '../components/header.vue';
import deptHero from '../components/hero.vue';

export default {
  components: {
    deptHeader,
    deptHero
  }
}
</script>
