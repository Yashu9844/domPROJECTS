//<!-- Add an id to your storiyans div for easier selection -->
// {/* <div class="storiyans" id="storyContainer">
//     <!-- Your story elements here -->
// </div> */}


    // Get the story container element
    // var storyContainer = document.getElementById("storyContainer");

    // // Add an event listener for mousewheel or DOMMouseScroll (for Firefox)
    // storyContainer.addEventListener("wheel", function (e) {
    //     // Scroll the container horizontally
    //     storyContainer.scrollLeft += e.deltaY;
        
    //     // Prevent the default scroll behavior
    //     e.preventDefault();
    // });

    var storiyans = document.querySelector(".storiyans")

    var arr = [
        
    {dp:"https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , story : "https://images.unsplash.com/photo-1699126600586-9bc597e5ee2d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    { dp:"https://plus.unsplash.com/premium_photo-1668456011159-89ec35e65325?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1668447600041-f050214ed5bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    { dp:"https://images.unsplash.com/photo-1694042078636-1d7583b66796?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1672088488042-9cca17729298?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    { dp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

] 

var clutter =""                                                     //here elem is object in an array
arr.forEach(function(elem,idx){                                            //here idx is index number         ${} is a template to inseart anything
    clutter += `<div   class="story"> 
    <img id="${idx}" src="${elem.dp}" alt="">                                  
</div>`


})


document.querySelector(".storiyans").innerHTML =clutter

storiyans.addEventListener("click",function(dets){

//    var value = arr[dets.target.id].story

   document.querySelector(".full_screen").style.display = "block"

   document.querySelector(".full_screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
      
   
   setTimeout(function(){
    document.querySelector(".full_screen").style.display = "none"
   },2000)
})












