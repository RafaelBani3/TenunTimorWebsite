// Script untuk clear localStorage dan reload
localStorage.removeItem('tenuntimor-welcome-shown');
console.log('LocalStorage cleared!');
console.log('Current localStorage status:', localStorage.getItem('tenuntimor-welcome-shown'));
alert('LocalStorage dibersihkan! Halaman akan direfresh...');
window.location.reload();