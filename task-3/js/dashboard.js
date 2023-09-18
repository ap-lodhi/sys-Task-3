let currentParagraph = 0;
      const paragraphs = document.querySelectorAll(".paragraph");

      function transitionParagraphs() {
        paragraphs[currentParagraph].classList.remove("active");
        currentParagraph = (currentParagraph + 1) % paragraphs.length;
        paragraphs[currentParagraph].classList.add("active");
      }

     
      const interval = setInterval(transitionParagraphs, 3000);


      function loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
    }
    

    var userArray = JSON.parse(localStorage.getItem('userData')) || [];


if (userArray.username) {
    var usernameElement = document.getElementById('username');
    usernameElement.textContent = userArray.username;
} else {
  
    console.log("Username not found in userArray.");
}
