// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

//pdf download
function downloadPDF() {
  const link = document.createElement('a');
  link.href = 'TalhaHussainResume (1)';  // Replace with the actual path to your PDF file
  link.download = 'TalhaHussainResume (1).pdf';  // Optional: Specify the default file name for the download
  link.click();
}

//Modal
document.addEventListener('DOMContentLoaded', function () {
  const welcomeNote = document.getElementById('welcome-note');

  // Hide the welcome note after 3 seconds
  setTimeout(function () {
    welcomeNote.classList.add('fade-out');
  }, 3000);

  // Remove the welcome note from the DOM after the fade-out transition
  welcomeNote.addEventListener('transitionend', function () {
    welcomeNote.parentNode.removeChild(welcomeNote);
  });
});


function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}