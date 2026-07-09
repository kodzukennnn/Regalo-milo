const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
  const x = (Math.random() * 200) - 100;
  const y = (Math.random() * 200) - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function yesClick() {

  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 }
  });

  setTimeout(() => window.location.href = "pagina4.html", 250);
}

function chiudi() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';

    const videoContainer = document.getElementById("video");
    const video = document.getElementById("mioVideo");

    videoContainer.style.display = "flex";
    video.play();
}

function checkPassword() {
  const password = document.getElementById("password").value;

  if (password === "milo big belly") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("site-content").style.display = "block";
  } else {
    document.getElementById("error").textContent = "Password sbagliata";
  }
}