//click action on left side bar
//show different content after clicking
const upload_data=()=> {
    // remove alert and do the fetch call here instead of DOMContentLoaded for above and beyond points
    //console.log('Hook this up to download the data from the server!');
    fetch("degrees.json")
      .then((response) => {
        //check the status code of the response
        console.log("status code:",response.status);
        if(response.status === 200){
          response.json().then((data) => {
            //console.log("My data:", data);
            let table = document.querySelector("table");
            data.degrees.forEach((element,inex) =>{
              console.log("a row of data",element);
              let tr = document.createElement("tr");
              for(let key in element){
                let td = document.createElement("td");
                let content = element[key];
                //console.log(key);
                //console.log(content);

                td.innerHTML = content;
                tr.appendChild(td);
              }

              table.appendChild(tr);
            });
          });
        }else{
          console.log("error:",response.statusText);
        }
      });
};

upload_data();

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