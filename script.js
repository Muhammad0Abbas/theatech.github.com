function nextLayer(current) {
    // Purani layer hide karo
    const currentLayer = document.getElementById(`layer${current}`);
    if (currentLayer) currentLayer.classList.remove('active');
    
    // Agli layer show karo
    const nextLayer = document.getElementById(`layer${current + 1}`);
    if (nextLayer) nextLayer.classList.add('active');
}

function moveButton() {
    const btn = document.getElementById('noBtn');
    // Button ko random jagah bhejne ke liye calculation
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    
    btn.style.position = "fixed";
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}
