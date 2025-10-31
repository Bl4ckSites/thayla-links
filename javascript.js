document.addEventListener('DOMContentLoaded', function() {
  // Set profile image
  const avatar = document.querySelector('.avatar');
  avatar.style.backgroundImage = "url('imgs/profile.jpg')";
  avatar.style.backgroundSize = "cover";
  avatar.style.backgroundPosition = "center";



  // Add loading animation
  const elements = document.querySelectorAll('.name, .subtitle, .link-btn, .footer');
  elements.forEach(el => {
    el.style.animationPlayState = 'running';
  });
});
