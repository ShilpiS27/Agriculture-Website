//swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
});

let chatBot = document.getElementById('chat-bot');
chatBot.style.display = 'none';
function toggleChatBot(){
  console.log("Clicked");
  if(chatBot.style.display == 'none'){
    chatBot.style.display = '';
  }
  else {
    chatBot.style.display = 'none';
  }
}