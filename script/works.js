var App = new Vue({
    el:"#works",
    data:{
        isshow: true,
    },

    methods:{
        showIntern:function(){
            this.isshow = true;
            //console.log("is show");
            
        },
        showProj:function(){
            this.isshow = false;
            //console.log("is not show");
            
        },
    }
})