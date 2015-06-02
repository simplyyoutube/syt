var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        var doc = xhr.responseText;
        alert(doc);
    }
}
xhr.open('GET', 'https://adblade.com/control/profile', true);
xhr.send(null);
