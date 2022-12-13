//click action on left side bar
//show different content after clicking
window.addEventListener("DOMContentLoaded", function(){
    console.log("DOM ready");
    //button listener
    upload_data();
});

const upload_data=()=> {
    // remove alert and do the fetch call here instead of DOMContentLoaded for above and beyond points
    //console.log('Hook this up to download the data from the server!');
    fetch("../json/degrees.json")
      .then((response) => {
        //check the status code of the response
        console.log("status code:",response.status);
        if(response.status === 200){
          response.json().then((data) => {
            //console.log("My data:", data);
            let table = document.querySelector("table");
            data.degrees.forEach((element,index) =>{
              console.log("a row of data",element);
              let tr1 = document.createElement("tr");
              for(let key in element){
                let td = document.createElement("td");
                let content = element[key];
                //console.log(key);
                //console.log(content);

                td.innerHTML = content;
                tr1.appendChild(td);
              }
              //console.log(tr1);
              console.log(table);
              table.appendChild(tr1);
            });
          });
        }else{
          console.log("error:",response.statusText);
        }
      });
};


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