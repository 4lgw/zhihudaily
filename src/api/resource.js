import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ROOT } from './api'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
// Vue.http.options.credentials = true

var apiZhihu= {
    startimage: '/api/4/start-image/1080*1776',
    news: '/api/4/news/latest',
    newsbyid: '/api/4/news{/id}',
    newsbydate: '/api/4/news/before{/date}',
    newsinfo: '/api/4/story-extra{/id}',
    topics: '/api/4/themes',
    topicbyid: '/api/4/theme/{/topicid}}'
}

export const NewsResource = Vue.resource(API_ROOT.concat( apiZhihu.news ))
export const NewsIdResource = Vue.resource(API_ROOT.concat( apiZhihu.newsbyid ))
export const NewsDateResource = Vue.resource(API_ROOT.concat( apiZhihu.newsbydate ))
export const NewsInfoResource = Vue.resource(API_ROOT.concat( apiZhihu.newsinfo ))
export const TopicsResource = Vue.resource(API_ROOT.concat( apiZhihu.topics ))
export const TopicsIdResource = Vue.resource(API_ROOT.concat( apiZhihu.topicbyid ))
