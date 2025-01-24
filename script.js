// JavaScript untuk menambahkan animasi pada gambar
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('mouseover', function() {
        img.style.transform = "scale(1.1)";
    });
    
    img.addEventListener('mouseout', function() {
        img.style.transform = "scale(1)";
    });
});
