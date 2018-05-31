<template>
    <div class="hero swiper-container">
        <div class="swiper-wrapper">
            <div class="hero__slide swiper-slide">
                <picture>
                    <img class="hero__image" src="../assets/images/walibi-xlarge.jpg" alt="walibi">
                </picture>            
                <h2 class="hero__title">Walibi</h2>
            </div>
            <div class="hero__slide swiper-slide">
                <picture>
                    <img class="hero__image" src="../assets/images/beng-xlarge.jpg" alt="beeld en geluid">
                </picture>
                <h2 class="hero__title">Beeld en Geluid</h2>
            </div>
        </div>
        <div class="hero__nav">
            <div class="hero__button hero__button--prev"></div>
            <a class="hero__button" href="#" @click.prevent>View Case</a>
            <div class="hero__button hero__button--next"></div>
        </div>
        <div class="hero__cta">
            <div class="hero__cta-button" @click="jumpToBottom"></div>
            <div class="hero__cta-chevron"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import scrollTo from 'scroll-to-element';
import { mapState } from "vuex";

export default {
    name: 'dept-hero',
    methods: {
        jumpToBottom() {
            const elementPosition = this.$el.getBoundingClientRect();

            scrollTo(this.$el, {
                offset: elementPosition.height - 150,
                duration: 300
            });
        }
    },
    computed: {
        ...mapState('breakpoints', ['breakpoints'])
    },
    mounted() {
        const swiperContainer = this.$el;

        var mySwiper = new Swiper (swiperContainer, {
            loop: true,
            loopedSlides: 1,

            // Navigation arrows
            navigation: {
              nextEl: '.hero__button--next',
              prevEl: '.hero__button--prev',
            }
          })
    }
}
</script>