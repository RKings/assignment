import Vue from 'vue'
import Axios from 'Axios'

const state = {
    accessToken: '1518255452.1677ed0.197ccd0398734505bc7347053075d221',
    baseUrl: 'https://api.instagram.com/v1',
    request: '/users/self/media/recent/'
    //Because I don't have permission to the public domain on instagram, and it will take a while before permissions are given for my app, I  use my own Instagrams feed. Since I don't have a instagram account it's very boring.
}

const getters = {
    getFeed: state => {
        return state.instagramFeed ? state.instagramFeed : {};
    }
}

const actions = {
    requestFeed({commit}, count) {
        let instance = Axios.create({
            baseURL: state.baseUrl,
            timeout: 3000
        });

        instance.get(`${state.request}?count=${count}&access_token=${state.accessToken}`)
        .then(data => {
            commit('SET_INSTAGRAM_FEED', JSON.parse(data.request.response));
        })
        .catch(error => {
            console.error(error);
        })
    }
}

const mutations = {
    SET_INSTAGRAM_FEED(state, data) {
        
        if(data.hasOwnProperty('data')){
            data = data.data;
        }

        Vue.set(state, 'instagramFeed', data);
    }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}