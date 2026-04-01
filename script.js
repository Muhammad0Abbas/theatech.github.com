function nextLayer(current) {
    document.getElementById(`layer${current}`).classList.remove('active');
    document.getElementById(`layer${current + 1}`).classList.add('active');
}

// "No" button ko bhagane ke liye
function moveButton() {
    const btn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

function celebrate() {
    nextLayer(3);
    // Yahan aap koi confetti library bhi use kar sakte hain
    alert("SHE SAID YES! 🎉");
}
