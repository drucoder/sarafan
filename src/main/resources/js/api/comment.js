import Vue from 'vue'

const comments = Vue.resource('/comment{/id}')

export default {
    add: comment => comments.save({}, comment),
}
