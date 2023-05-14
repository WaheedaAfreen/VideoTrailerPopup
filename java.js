const btn= document.querySelector(".btn");
const trailer= document.querySelector(".trailer");
const closeIcon = document.querySelector(".closeIcon");
const  video = document.querySelector("video ");


btn.addEventListener("click", () =>{

    trailer.classList.remove("active");
});


closeIcon.addEventListener("click",() =>{
    trailer.classList.add("active")
    video.pause();

})