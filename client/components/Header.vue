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
            
            if((now - this.lastToggle) > 320) {
                this.lastToggle = now;

                let panel = document.querySelector('.header__navigation');
                let hideThreshold = (panel.classList.contains('header__navigation--show'))? 310 : 0;

                setTimeout(() => panel.classList.toggle('header__navigation--visible'), hideThreshold);
                setTimeout(() => panel.classList.toggle('header__navigation--show'), 10);
                this.menuOpen = !this.menuOpen;
            }
        }
    }
}
</script>