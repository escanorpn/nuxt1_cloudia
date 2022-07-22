export const state = () => ({
  counter: 0,
  docs: true,
  apikey: "jj",
  access_token:"one",
  mcolor: "#654f31",
  // mcolor: "#45100f",
  button_c:"#e9ecef",
  button_bg: "linear-gradient(315deg,#3f0d12,#a71d31 74%)",
  button_sh: "rgb(38 3 3) 1px 5px 5px",
  hmName:"Cloudia",

  mUrl: " http://localhost/w/vue/src/s/s2/public/api/auth/",
  iUrl: " http://localhost/w/vue/src/s/s2/storage/app/",
  nUrl: " uu",
})

export const getters = {
  getCounter(state) {
    return state.counter
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async fetchCounter(state) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}