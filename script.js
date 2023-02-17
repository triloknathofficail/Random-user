var clutter = "";

document.querySelector(".btn")
.addEventListener("click",function(){
  axios.get("https://randomuser.me/api/")
  .then(function(resp){
    console.log(resp.data.results[0]);
    clutter += ` <div class="card">
      <div class="photo">
       <img src="${resp.data.results[0].picture.large}">
      </div>
      <h5>${resp.data.results[0].name.first + resp.data.results[0].name.last}</h5>
      <h6>Gender: ${resp.data.results[0].gender}</h6>
      <small>Location: ${resp.data.results[0].location.country}</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non nulla, officiis eligendi error
        architecto nemo.</p>
    </div>`;
    document.querySelector(".user-container").innerHTML =clutter;
    
  })
})