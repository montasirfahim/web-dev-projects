function loadDept(faculty) {

    if (faculty === "") {
        document.getElementById("output").innerHTML = "";
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "mbstu.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var data = JSON.parse(xhr.responseText); console.log(data);
            var html = "<ul>";

            for (var i = 0; i < data.length; i++) {
                if (data[i].faculty === faculty) {
                    for (var j = 0; j < data[i].dept.length; j++) {
                        html += "<li>" + data[i].dept[j] + "</li>";
                    }
                }
            }

            html += "</ul>";
            document.getElementById("output").innerHTML = html;
        }
    };

    xhr.send();
}