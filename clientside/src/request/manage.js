import Vue from 'vue'

export const getAxios = (url,params)=>{

    return Vue.axios({

        method:'GET',

        url,

        params

    })

}

export const postAxios = (url,data)=>{

    return Vue.axios({

        method:'POST',

        url,

        data

    })

}