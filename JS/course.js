document.addEventListener("DOMContentLoaded", function() {
    const section = document.querySelector('.programPage');
    const images = [
        'ASSETS/courses/app_daveloper.jpg',
        'ASSETS/courses/game_developer.jpg',
        'ASSETS/courses/computer_science.jpg',
        'ASSETS/courses/data_science.jpg',
        'ASSETS/courses/artificial_intelegence.jpg',
        'ASSETS/courses/cyber_security.jpg',
        'ASSETS/courses/data_analyst.jpg',
        'ASSETS/courses/information_system.jpg',
        'ASSETS/courses/machine_learning.jpg',
        'ASSETS/courses/math.jpg',
        'ASSETS/courses/software_engginer.jpg',
        'ASSETS/courses/web_davelopment.jpg'
    ];
    let currentIndex = 0;
    const changeInterval = 5000; // Change every 5 seconds

    function changeBackground() {
        section.classList.add('fade-out');
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            section.style.backgroundImage = `url(${images[currentIndex]})`;
            section.classList.remove('fade-out');
            section.classList.add('fade-in');
        }, 1000); // This should match the CSS transition duration
    }

    setInterval(changeBackground, changeInterval);
});


// JavaScript to add 'scrolled' class on scroll
window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav'); // Ambil elemen navbar berdasarkan ID
    if (window.scrollY > 50) { // Jika scroll lebih dari 50px
        nav.classList.add('scrolled'); // Tambahkan class 'scrolled'
    } else {
        nav.classList.remove('scrolled'); // Hapus class 'scrolled' jika kembali ke posisi atas
    }
});

// luminance
