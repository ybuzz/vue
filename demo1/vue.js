var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
});
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});
var app5 = new Vue({
    el:'#app-5',
    data:{
        message:"app5"
    },
    methods:{
        reverseMessage:function () {
            this.message = this.message.split('').reverse().join('')
            console.log(this)
        }
    }
});
var app6 = new Vue({
    el:'#app-6',
    data:{
        message:" "
    }
})
