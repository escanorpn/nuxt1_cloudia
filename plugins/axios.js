import {Url,igUrl,igt} from "../store/const"
export default function ({ $axios, redirect }, inject) {
  const api = $axios.create()
  const ig = $axios.create()
  const igs="?fields=id,caption,media_url,media_type&access_token="+igt;
  api.setBaseURL(Url)
  ig.setBaseURL(igUrl+igs)
    // api.setBaseURL('http://localhost/w/vue1/src/s/s2/public/api/')
    // api.setBaseURL('https://sclaudia.losenviskas.com/src/s/s2/public/api/')
    // $api.onRequest(config => {
    //   console.log('Making request to ' + config.url)
    // })
  
    api.onError(error => {
    //   const code = parseInt(error.response && error.response.status)
    //   if (code === 400) {
    //     redirect('/400')
    //   }
      return error;
    })
    ig.onError(error => {
        return error;
      })

    api.onResponse(response => {
        // const code = parseInt(error.response && error.response.status)
        // if (code === 400) {
        //   redirect('/400')
        // }
        return response;
      })
    ig.onResponse(response => {
        return response;
      })
      
    api.onRequest(request => {
    //  alert("gg");
        console.log(JSON.stringify(request))
        return request;
      })
      ig.onRequest(request => {
          console.log(JSON.stringify(request))
          return request;
        })

        inject('api', api)
        inject('ig', ig)
  }