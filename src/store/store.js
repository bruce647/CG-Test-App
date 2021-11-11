import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        bannerData: {
            name:"",
            phone:"",
            email:"",
            bio:""
        },
        cardData:[],
    },
    mutations: {
        setBannerData(state, rawData) {
            state.bannerData.name = rawData.name
            state.bannerData.phone = rawData.phone
            state.bannerData.email = rawData.email
            state.bannerData.bio = rawData.bio
        },
        setCardData(state, rawData){
            for (let index = 0; index < rawData.length; index++) {
                state.cardData.push(rawData[index])
            }
            
            console.log("store.card",state.cardData[0].id)
        },
        setFeatured(state, rawData){
            state.cardData[rawData].featured=!state.cardData[rawData].featured
        }
    },
    actions: {
        fetchData({ commit }) {
            axios.get('./landscapes.json').then((res) => {
                commit('setBannerData', { name: res.data.name, phone: res.data.phone, email: res.data.email, bio: res.data.bio })
                commit('setCardData', res.data.album)
            }).catch(() => {
                console.log('error')
            })
        }
    },
    getters:{
        cardDataGetter(state){
            return state.cardData
        }
    }
})

export default store