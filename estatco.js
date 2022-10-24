
let heart = Array.from(document.getElementsByClassName('like')) 

heart.forEach(e => {
    e.addEventListener('click' , ()=>{
        e.classList.toggle('text-danger')
    })
});







var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
