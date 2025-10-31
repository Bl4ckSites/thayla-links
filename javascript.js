document.addEventListener('DOMContentLoaded', function() {
  // Set profile image
  const avatar = document.querySelector('.avatar');
  avatar.style.backgroundImage = "url('imgs/profile.jpg')";
  avatar.style.backgroundSize = "cover";
  avatar.style.backgroundPosition = "center";

  // Handle link clicks with confirmation
  document.querySelectorAll('.link-btn').forEach(a => {
    a.addEventListener('click', function(e) {
      // Optional: Add confirmation dialog for 18+ content
      if(this.classList.contains('vip') || this.classList.contains('telegram')) {
        if(!confirm('Este conteúdo é restrito para maiores de 18 anos. Você confirma que é maior de idade?')) {
          e.preventDefault();
          return;
        }
      }
      
      // Optional: Add analytics tracking here
      console.log('Link clicked:', this.href);
      
      // Link will proceed normally
    });
  });

  // Add loading animation
  const elements = document.querySelectorAll('.name, .subtitle, .link-btn, .footer');
  elements.forEach(el => {
    el.style.animationPlayState = 'running';
  });
});