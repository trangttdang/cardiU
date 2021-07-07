window.logout = function() {
    fetch('/~/cardiU/logout', { method: 'POST'});
    alert('Logged Out!')
    location.href = '../homePage.html'
}