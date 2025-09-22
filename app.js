function login() {
  const password = document.getElementById("password").value;
  const sifre = "04032025";
  
  if(password === sifre){
    localStorage.setItem("loggedIn", "true")
    window.location.href = "gallery.html";
  }else{
    document.getElementById("message").textContent = "Şifre yanlış 💔"
  }
}

document.addEventListener("DOMContentLoaded", function(){
  const input = document.getElementById("password");
  input.addEventListener("keydown", function(event){
    if(event.key==="Enter"){
      login()
    }
  })
})

function logout(){
  localStorage.removeItem("loggedIn")
  window.location.href = "login.html"
}

function openStory(url){
  window.location.href = url
}

function openModal(imageSrc, date, note){
  document.getElementById("photoModal").style.display = "block"
  document.getElementById("modalImage").src = imageSrc
  document.getElementById("modalCaption").innerHTML = `<strong>${date}</strong><br>${note}`
}

function closeModal() {
  document.getElementById("photoModal").style.display = "none";
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Ekranın genişliğine göre rastgele sol pozisyon
  heart.style.left = Math.random() * window.innerWidth + "px";

  // Farklı animasyon süresi (5-10 saniye arası)
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  // Farklı boyutlar
  const size = 10 + Math.random() * 15;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  // Kalbin rengini ve saydamlığını rastgele değiştirebilirsin (opsiyonel)

  document.querySelector(".hearts-container").appendChild(heart);

  // Animasyon bittikten sonra kalbi kaldır
  setTimeout(() => {
    heart.remove();
  }, parseFloat(heart.style.animationDuration) * 1000);
}

// Her 300 ms’de yeni kalp yarat
setInterval(createHeart, 300);


function addImg(){
  
}

