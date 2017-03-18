var form = new Vue({
	el: "#form",
	data:{
		users:[{id:1,name:"名字1",age:20},{id:2,name:"名字2",age:25},{id:3,name:"名字3",age:44}],
		newage:null,
		newname:null,
		use:null,
		btn:"btn",
        btnSm:"btn-sm",
		btnPrimary:"btn-primary"
	},
	methods:{
		del:function (index) {
			console.log(index);
			this.users.splice(index,1)
		},
		add:function () {
			if(this.newname&&this.newage){
                this.users.push({id:(this.users.length+1),name:this.newname,age:this.newage})
				this.newname = null;
                this.newage = null;
			}
		},
		reset:function () {
			this.newname = null;
			this.newage = null;
		},
		delAll:function () {
			this.users = []
        }
	}
});
var baidu = new Vue({

	el: "#baidu",
	data:{
		searchvalue:"",
		searchlist:"",
		now:-1
	},
	methods:{
		search:function (ev) {
			console.log(ev);
			//下拉时改变input，list不变
			if(ev.keyCode==38 || ev.keyCode==40)return;
			//回车触发新页面
            console.log('https://www.baidu.com/s?wd='+this.searchvalue);
			if(ev.keyCode==13){
                window.open('https://www.baidu.com/s?wd='+this.searchvalue);
                this.searchvalue='';
                return
            }

			this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
	                wd:this.searchvalue
	            },{
	                jsonp:'cb'
	            }).then(function(res){
	                this.searchlist=res.data.s;
	            },function(){
	                
	            });
		},
		changeDown:function(){
             this.now++;
             if(this.now==this.searchlist.length)this.now=-1;
             this.searchvalue=this.searchlist[this.now];
        },
        changeUp:function(){
            this.now--;
            if(this.now==-2)this.now=this.searchlist.length-1;
            this.searchvalue=this.searchlist[this.now];
        }
	}
})