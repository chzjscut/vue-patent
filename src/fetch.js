/**
 * Created by martin on 2019/3/12.
 */
let userInfo = localStorage.getItem('userInfo') || {}
const { token = '', salt = '' } = userInfo

// post
export const post = async ({ url , data }) => {
    try {
        const res = await axios({
            headers : {
                token ,
                'fr-Agent' : salt ,
            } ,
            method : 'POST' , url , data ,
        })

        console.log(res)

        return Promise.resolve(res)
    } catch (err) {
        return Promise.reject(err)
    }
}

// get
export const get = async ({ url , data }) => {
    for (let key in data) {
        url += `&${key}=${data[ key ]}`
    }

    url = url.replace('&' , '?')

    try {
        const res = await axios({
            data , url ,
        })
        return Promise.resolve(res)
    } catch (e) {
        return Promise.reject(e)
    }
}
