var responseHTML = document.createElement('HTML');

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        responseHTML.innerHTML = xhr.responseText;
        var email = responseHTML.getElementByName('email');
        alert(email);
    }
}
xhr.open('GET', 'https://adblade.com/control/profile', true);
xhr.send(null);
