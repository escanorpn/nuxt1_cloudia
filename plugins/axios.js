export default function ({ $axios, redirect }, inject) {
    const api = $axios.create()
    api.setBaseURL('http://localhost/w/vue1/src/s/s2/public/api/')
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
    api.onResponse(response => {
        // const code = parseInt(error.response && error.response.status)
        // if (code === 400) {
        //   redirect('/400')
        // }
        return response;
      })
      
    api.onRequest(request => {
    //  alert("gg");
        console.log(JSON.stringify(request))
        return request;
      })

      inject('api', api)
  }