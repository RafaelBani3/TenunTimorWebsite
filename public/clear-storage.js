// Script untuk clear localStorage dan test welcome animation
(function() {
    localStorage.removeItem('tenuntimor-welcome-shown');
    console.log('LocalStorage cleared! Welcome animation akan muncul saat refresh.');
    alert('LocalStorage telah dibersihkan! Silakan refresh halaman untuk melihat welcome animation.');
})();