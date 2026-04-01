function nextLayer(current) {
    document.getElementById(`layer${current}`).classList.remove('active');
    document.getElementById(`layer${current + 1}`).classList.add('active');
}

function moveButton() {
    const btn = document.getElementById('noBtn');
    // Button ko screen ke andar hi move karne ke liye math
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

function celebrate() {
    nextLayer(3); // Final layer dikhayyein
    
    // Yahan apna number likhein (Country code ke saath, baghair + sign ke)
    // Maslan: 923001234567
    const myNumber = "923XXXXXXXXX"; 
    
    const message = "I SAID YES! 💍❤️ Main tumhare saath apni poori zindagi guzarna chahti hoon. I love you!";
    
    // WhatsApp URL banana
    const whatsappUrl = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    
    // 2.5 second ke baad redirect karein taake wo pehle "I Love You" wala page dekh lein
    setTimeout(() => {
        window.location.href = whatsappUrl;
    }, 2500);
}
