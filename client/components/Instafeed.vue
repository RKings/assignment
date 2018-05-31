<template>
    <div class="instafeed">
        <div class="instafeed__intro">
            <h2 class="instafeed__title">Follow us on Instagram</h2>
            <a class="instafeed__account" href="https://www.instagram.com/tamtamnl/" target="_blank">@tamtamnl</a>    
        </div>

        <div class="instafeed__grid">
            <div v-for="data in feedData" class="instafeed__item">
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
        </div>
    </div>
</template>

<script>
    import Axios from 'Axios'

    export default {
        name: 'dept-instafeed',
        data() {
            return {
                api: {
                    accessToken: '1518255452.1677ed0.197ccd0398734505bc7347053075d221',
                    baseUrl: 'https://api.instagram.com/v1',
                    request: '/users/self/media/recent/',
                    count: 10
                    //Because I don't have permission to the public domain on instagram, and it will take a while before permissions are given for my app, I  use my own Instagrams feed. But since I don't have a instagram account it's very boring.
                },
                apiResponse: {}
            }
        },
        computed: {
            feedData() {
                let response = this.apiResponse;
                response = (response.hasOwnProperty('data'))? response.data : response;
                
                return response;
            }
        },
        mounted() {
            this.instance = Axios.create({
              baseURL: this.api.baseUrl,
              timeout: 1000
          });

            this.instance.get(`${this.api.request}?count=${this.api.count}&access_token=${this.api.accessToken}`)
            .then(data => {
                this.apiResponse = JSON.parse(data.request.response);
            })
            .catch(error => {
                console.error(error);
            })

        }
    }
</script>