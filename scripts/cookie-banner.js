// cookie-banner.js

function loadGoogleAnalytics() {
    if (window.gtag) return; // Prevent loading twice

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-PWX4LMPVFC';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PWX4LMPVFC');
  `;
    document.head.appendChild(script2);
}

window.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    const consent = localStorage.getItem('cookiesAccepted');

    if (!consent) {
        banner.style.display = 'flex'; // Show banner if no consent
    } else {
        if (consent === 'true') {
            loadGoogleAnalytics(); // Load GA if previously accepted
        }
        banner.style.display = 'none'; // Hide banner if consent was given or declined
    }

    acceptBtn.onclick = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.style.display = 'none';
        loadGoogleAnalytics();
    };

    declineBtn.onclick = () => {
        localStorage.setItem('cookiesAccepted', 'false');
        banner.style.display = 'none';
    };
});
