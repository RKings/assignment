<template>
    <header class="header">
        <div class="header__wrapper">
            <div class="header__hamburger" @click="menuToggle">
                <dept-hamburger :menu-open="menuOpen"></dept-hamburger>
            </div>
            <div class="header__logo">
                
            </div>
            <nav class="header__navigation">
                <router-link class="header__link" to="/home">Home</router-link>
                <router-link class="header__link" to="/people">People</router-link>
                <router-link class="header__link" to="/contact">Contact</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
import deptHamburger from './hamburger.vue'

export default {
    name: 'dept-header',
    components: {
        deptHamburger
    },
    data() {
        return {
            menuOpen: false,
            lastToggle: 0,
        }
    },
    methods: {
        menuToggle() {
            let now = Date.now();

            if((now - this.lastToggle) > 350) {
                this.lastToggle = now;

                let panel = this.$el.querySelector('.header__navigation');
                let hideThreshold = (this.menuOpen)? 350 : 0;

                setTimeout(() => panel.classList.toggle('header__navigation--visible'), hideThreshold);
                setTimeout(() => panel.classList.toggle('header__navigation--show'), 50);
                this.menuOpen = !this.menuOpen;
            }
        }
    }
}
</script>