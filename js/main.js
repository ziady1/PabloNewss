var allnews = []

function get(se){
var req = new XMLHttpRequest;

req.open("GET" , (`https://newsapi.org/v2/top-headlines?country=us&category=${se}&apiKey=d3a4ff4665c2436b9328e3e9737e4101`))
req.send()
req.addEventListener("readystatechange",function(){
    if(req.readyState===4 && req.status === 200){
        allnews = JSON.parse(req.response).articles
        add()
    }
})
}


get("general")

var switc = document.getElementsByClassName("nav-link")

for(var i=0 ; i<switc.length;i++){
    switc[i].addEventListener("click",function(e){
        console.log(e.target.innerText.toLowerCase());
      get(e.target.innerText.toLowerCase())
    })
}



var cartona = ``
var ma = document.getElementById("mian");


function add(){
    for(var i=0;i<allnews.length;i++){
        cartona += `    <div class="col-lg-4 col-sm-6">
        <div class=" text-center bg-warning rounded-3 ss">
          <h4 class="text-success p-2">${allnews[i].title}</h4>
          <img src="${allnews[i].urlToImage == null ? "img/download.png" : allnews[i].urlToImage}" alt="" class="w-100">
          <p class="p-2">${allnews[i].description == null ? "Coming soon" : allnews[i].description}</p>
         <div class="info text-start text-secondary p-2">
          <h5 class="d-inline">Date:</h5>
          <p class="d-inline">${allnews[i].publishedAt}</p>
        </div>
      </div>
      </div>`
    
    }
    
ma.innerHTML = cartona   
cartona = ``
// console.log(ma);
}

