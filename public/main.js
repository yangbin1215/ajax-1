let n = 0
getNextPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n+1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4
            && request.status === 200) {
            const array = JSON.parse(request.response);
            let first = xxx.firstElementChild;
            while (first) {
                first.remove();
                first = xxx.firstElementChild;
            }
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id;
                xxx.appendChild(li);
            })
            n++;
        }
    }

    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();

    request.open("GET", "5.json");

    request.onreadystatechange = () => {
        if (request.readyState === 4 &&
            request.status >= 200 &&
            request.status < 300) {
            const json = JSON.parse(request.response);
            console.log(json);
        }
    }
    request.send();
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();

    request.open("GET", "4.xml");

    request.onreadystatechange = () => {
        if (request.readyState === 4 &&
            request.status >= 200 &&
            request.status < 300) {
            const xml = request.responseXML;
            const text = xml.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();

    request.open("GET", "3.html");

    request.onload = () => {
        const div = document.createElement("div")

        div.innerHTML = request.response;
        document.body.appendChild(div);
    }

    request.onerror = () => {
        console.log("请求失败了。");
    }

    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();

    request.open("GET", "2.js");

    request.onload = () => {
        const js = document.createElement("script");

        js.innerHTML = request.response;
        document.body.appendChild(js);
    }

    request.onerror = () => {
        console.log("请求失败");
    }

    request.send();
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();

    request.open("GET", "style.css")
    request.onreadystatechange = () => {
        if (request.readyState === 4 &&
            request.status >= 200 &&
            request.status < 300) {
            const style = document.createElement("style");
            style.innerHTML = request.response;
            document.head.appendChild(style);
        }
    }
    request.send();
}
