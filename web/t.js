const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");


  window.addEventListener("load",function(){
 
   showPopup();
   // setTimeout(function(){
   //   loginPopup.classList.add("show");
   // },5000)

  })

  function showPopup(){
        const timeLimit = 1 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
         } 
         console.log(i)
        },1000);
  }


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })


  function showPopup(description) {
    const popup = document.getElementById('popup');
    const popupDescription = document.getElementById('popup-description');

    popupDescription.textContent = description;
    popup.classList.add('active');
  }

  function hidePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
  }

