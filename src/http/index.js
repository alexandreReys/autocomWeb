import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'
import interceptors from './interceptors'

Vue.use(VueResource)

const http = Vue.http

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

if (process.env.NODE_ENV == 'development') {
  http.options.root = 'http://localhost:3000/api/v1/autocom/'
} else {
  http.options.root = 'https://www.anrsistemas.com/api/v1/autocom/'
}

http.interceptors.push(interceptors)

Object.keys(services).map(service => {
  services[service] = Vue.resource('', {}, services[service])
})

const setBearerToken = token => {
  http.headers.common['Authorization'] = `Bearer ${token}`
}

export { http, setBearerToken }
export default services
