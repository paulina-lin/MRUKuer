document.getElementById('arButton').addEventListener('click', function() {
    window.location.href = 'https://example.com/ar'; // Ersetzen Sie dies durch Ihre AR-Website
});

document.getElementById('vrButton').addEventListener('click', function() {
    window.location.href = 'https://example.com/vr'; // Ersetzen Sie dies durch Ihre VR-Website
});

document.getElementById('infoButton').addEventListener('click', function() {
    const infoText = document.getElementById('infoText');
    if (infoText.style.display === 'block') {
        infoText.style.display = 'none'; // Wenn der Text sichtbar ist, wird er verborgen
    } else {
        infoText.style.display = 'block'; // Wenn der Text verborgen ist, wird er angezeigt
    }
});

document.getElementById('infoText').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block'; // zeigt das Popup an
});
