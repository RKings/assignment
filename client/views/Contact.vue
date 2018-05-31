<template>
  <div class="page">
    <dept-header></dept-header>
    <dept-contact-form></dept-contact-form>
    <dept-footer></dept-footer>
  </div>
</template>
<script>
import DeptHeader from '../components/header.vue';
import DeptFooter from '../components/footer.vue';
import DeptContactForm from '../components/contact-form.vue';

export default {
  components: {
    DeptHeader,
    DeptContactForm,
    DeptFooter
  }
}
</script>
