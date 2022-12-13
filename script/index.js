//click action on left side bar
//show different content after clicking
var App = new Vue({
    el:"#bio",
    data:{
        isshow: true,
    },

    methods:{
        showAboutMe:function(){
            this.isshow = true;
            //console.log("is show");
            
        },
        showSchool:function(){
            this.isshow = false;
            //console.log("is not show");
            
        },
    }
})