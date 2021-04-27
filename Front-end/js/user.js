let br =  document.createElement("br");
const xhttp = new XMLHttpRequest();

function get() {

    xhttp.open("GET", "https://greymer.tk/COMP351/group/API/v1", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let holder = this.responseText  //.replace(/[\[\]]+/g,'');
            let obj = JSON.parse(holder);
            document.getElementById("main").innerHTML = holder;
            br;
        }
    };
}
        
document.getElementById("get").onclick = function () {
    get();      
}

//"<br><b>Quote " + obj.id +  ": </b><i>" + obj.quote + "</i>";