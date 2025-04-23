function showCatalog() {
    document.querySelector('.intro-section').style.display = 'none';
    document.querySelector('.catalog-section').style.display = 'block';
}

function showIntro() {
    document.querySelector('.intro-section').style.display = 'flex';
    document.querySelector('.catalog-section').style.display = 'none';
}

function orderItem(itemName) {
    const message = `Bonjour, je souhaite commander un ${itemName}. Pouvez-vous m'aider à finaliser ma commande ?`;
    const whatsappUrl = `https://wa.me/+22891412003?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}