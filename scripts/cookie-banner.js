// JavaScript source code
// cookie-banner.js
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
    return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
}

window.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    if (!getCookie('cookieConsent')) {
        banner.style.display = 'flex';
    } else {
        if (getCookie('cookieConsent') === 'accepted') {
            loadGoogleAnalytics();
        }
    }

    acceptBtn.onclick = () => {
        setCookie('cookieConsent', 'accepted', 180);
        banner.style.display = 'none';
        loadGoogleAnalytics();
    };

    declineBtn.onclick = () => {
        setCookie('cookieConsent', 'declined', 180);
        banner.style.display = 'none';
    };

function loadGoogleAnalytics() {
     if (window.gtag) return; // Prevent double-loading

     const scriptTag1 = document.createElement('script');
     scriptTag1.async = true;
     scriptTag1.src = 'https://www.googletagmanager.com/gtag/js?id=G-PWX4LMPVFC';
     document.head.appendChild(scriptTag1);

     const scriptTag2 = document.createElement('script');
     scriptTag2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-PWX4LMPVFC');
  `;
        document.head.appendChild(scriptTag2);
    }
});
