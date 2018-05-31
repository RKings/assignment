<template>
    <div class="instafeed">
        <div class="instafeed__intro">
            <h2 class="instafeed__title">Follow us on Instagram</h2>
            <a class="instafeed__account" href="https://www.instagram.com/tamtamnl/" target="_blank">@tamtamnl</a>    
        </div>

        <div class="instafeed__grid">
            <div v-for="data in getFeed" class="instafeed__item">
                <picture>
                    <source :srcset="data.images.low_resolution.url" media="(max-width: 340px)">
                    <source :srcset="data.images.standard_resolution.url" media="(min-width: 341px)">
                    <img :src="data.images.standard_resolution.url" :alt="data.caption.text">
                </picture>
                <div class="instafeed__caption">
                    <p>{{data.caption.text}}</p>
                </div>
                <a class="instafeed__hittarget" :href="data.link" target="_blank"></a>
            </div>
            <div class="instafeed__spinner" v-if="emptyFeed"></div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: 'dept-instafeed',
        data() {
            return {
                count: 10
            }
        },
        computed: {
            ...mapGetters('instagram', ['getFeed']),
            emptyFeed() {

                return this.getFeed.length ? false : true;
            }
        },
        methods: {
            ...mapActions('instagram', ['requestFeed'])
        },
        mounted() {
            this.requestFeed(this.count);
        }
    }
</script>