var app = new Vue({
    el: '#app',
    data: {
        message: 'I learn Vue.js',
        count: 0
    },
    methods: {
        increment: function() {
            this.count += 1
        }
    }
})