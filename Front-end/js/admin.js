const xhttp = new XMLHttpRequest();
let params = "";
let divCount = 0;
let endPoint = "https://greymer.tk/COMP351/group/API/v1";
let storage = [];

function fill(callback) {
    xhttp.open("GET", endPoint, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            storage = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            loopAnd();
            callback(deleteFill);
        }
    };
}

function getFill(callback) {
    xhttp.open("GET", endPoint + "/2", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let g = JSON.parse(this.responseText);
            document.getElementById("getCount").innerHTML = g[0]["count(*)"];
            callback(postFill);
        }

        else if (this.status = 404){
            console.log("404 NOT FOUND")
        }

        else if (this.status = 500){
            console.log("500 INTERNAL SERVER ERROR")
        }
    };
}

function deleteFill(callback) {
    xhttp.open("GET", endPoint + "/4", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let delNum = JSON.parse(this.responseText);
            console.log(this.responseText);
            document.getElementById("delCount").innerHTML = delNum[0]["count(*)"];
            callback(putFill);
        }

        else if (this.status = 404){
            console.log("404 NOT FOUND")
        }

        else if (this.status = 500){
            console.log("500 INTERNAL SERVER ERROR")
        }
    };
}

function putFill() {
    xhttp.open("GET", endPoint + "/1", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let putNum = JSON.parse(this.responseText);
            document.getElementById("putCount").innerHTML = putNum[0]["count(*)"];
        }

        else if (this.status = 404){
            console.log("404 NOT FOUND")
        }

        else if (this.status = 500){
            console.log("500 INTERNAL SERVER ERROR")
        }
    };
}

function postFill(callback) {
    xhttp.open("GET", endPoint + "/3", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let postNum = JSON.parse(this.responseText);
            document.getElementById("postCount").innerHTML = postNum[0]["count(*)"];
            callback();
        }
    };
}

function loopAnd() {
    for (i = 0; i < storage.length; i++) {
        add(storage[i].id, storage[i].quote);
        divCount++;
    }
}

fill(getFill);

function add(id, quote) {
    let div = document.createElement("div");

    let div2 = document.createElement("div");
    if (id === undefined) {
        divCount++;
        div2.id = divCount;
    } else div2.id = id;

    let e1 = document.createElement("textarea");
    e1.style.height = "80px";
    e1.style.width = "200px";
    if (quote === undefined) {
        e1.innerHTML = "";
    } else e1.innerHTML = quote;

    let e2 = document.createElement("input");
    e2.type = "button";
    e2.value = "Delete";
    e2.style.margin = "5px";

    e2.onclick = function () {
        del();
        divCount--;
        div2.remove();
    };

    let e3 = document.createElement("input");
    e3.type = "button";
    e3.value = "Save";
    e3.style.margin = "5px";

    e3.onclick = function () {
        post();
    };

    let e4 = document.createElement("input");
    e4.type = "button";
    e4.value = "Change Quote";
    e4.style.margin = "5px";

    e4.onclick = function () {
        put();
    };

    params = e1;

    div2.appendChild(e1);
    div2.appendChild(e2);
    div2.appendChild(e3);
    div2.appendChild(e4);
    div.appendChild(div2);

    document.getElementById("main").appendChild(div);
    document.getElementById("head").hidden = "True";
}

function del() {
    let obj = {
        id: divCount,
    };

    xhttp.open("DELETE", endPoint, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(JSON.stringify(obj));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
}

function post() {
    let obj = {
        id: divCount,
        body: JSON.stringify(params.value),
    };
    xhttp.open("POST", endPoint, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(JSON.stringify(obj));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
}

function put() {
    let obj = {
        id: divCount,
        body: JSON.stringify(params.value),
    };

    xhttp.open("PUT", endPoint, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(JSON.stringify(obj));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }

        else if (this.status = 404){
            console.log("404 NOT FOUND")
        }

        else if (this.status = 500){
            console.log("500 INTERNAL SERVER ERROR")
        }
    };
}

document.getElementById("add").onclick = function () {
    add();
};