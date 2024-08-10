
let apiUrl = "http://localhost:8000/people";

function getPeople() {
    fetch(apiUrl)
        .then(response => {return response.json()})
        .then(data => {
            setTimeout(() => {
                // Actual code here
                var content = "<ul>";
                for (var i in data) {
                    content = content + "<li>" + data[i]["name"] + "</li>";
                }
                var content = content + "</ul>";
                document.getElementById("peopleList").innerHTML = content;
            }, 2000)
        })
        .catch(err => {console.log(err)});
}

getPeople();
