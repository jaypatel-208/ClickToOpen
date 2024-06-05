document.getElementById('default-btn').addEventListener('click', function() {
    window.location.href = 'https://www.google.com/';
});

document.getElementById('new-tab-btn').addEventListener('click', function() {
    window.open('https://www.microsoft.com/', '_blank');
});

document.getElementById('same-tab-btn').addEventListener('click', function() {
    window.location.assign('https://www.underarmour.com/');
});
