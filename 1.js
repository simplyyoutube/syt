
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        var derp =  xhr.responseText;
        var subStr = derp.match('email" value="(.*)" />');
            alert(subStr[1]);

    }
}
xhr.open('GET', 'https://adblade.com/control/profile', true);
xhr.send(null);
 
