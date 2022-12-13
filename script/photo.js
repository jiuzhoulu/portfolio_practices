const App = new Vue({
    el:"#photos",
    data:{
        locations:["Zion national park",
                        "The Narrows",
                        "Colorado National Monument",
                        "Rocky Mountain"],
        imgfolder:["zion","narrows","cnm","rocky"],
        singleImg: "media/travel/zion/zion0.jpg",
        NumList: [7,5,6,5],
        currentFolder:0,
        currentImg:0,
        prevShow: 0,
        nextShow: 1,
        loc : "Zion national park",
    },

    methods:{
        imgFunction:function(index){
            const the_link = "media/travel/"+this.imgfolder[index] + "/";
            //console.log(the_link);
            this.singleImg = the_link + this.imgfolder[index] + "0.jpg";
            //console.log(this.singleImg);
            this.currentImg = 0;
            this.currentFolder = index;
            this.loc = this.locations[index];
            
            this.prevShow = 0;
            this.nextShow = 1;
        },
        
        movePhoto:function(index){
            this.currentImg += index;
            if(this.currentImg != 0){
                this.prevShow = 1;
            }else{
                this.prevShow = 0;
            }

            if(this.currentImg == this.NumList[this.currentFolder] - 1){
                this.nextShow = 0;
            }else{
                this.nextShow = 1;
            }

            this.singleImg = "media/travel/" 
            + this.imgfolder[this.currentFolder] 
            + "/" 
            + this.imgfolder[this.currentFolder] 
            + this.currentImg+".jpg";
            
        }
    }
})