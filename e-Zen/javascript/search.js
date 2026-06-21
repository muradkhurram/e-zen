function searchServices() {

    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    if (input === "") {
        return;
    }

    const result = services.find(service =>

        service.name.toLowerCase().includes(input)

        ||

        service.keywords.some(keyword =>
            keyword.toLowerCase().includes(input)
        )
    );

    if (result) {

        window.location.href = result.page;

    } else {

        alert("No matching service found.");

    }
}

function showSuggestions(){

    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const suggestionBox =
        document.getElementById("suggestions");

    suggestionBox.innerHTML = "";

    if(input === ""){
        return;
    }

    const matches = services.filter(service =>

        service.name.toLowerCase().includes(input)

        ||

        service.keywords.some(keyword =>
            keyword.includes(input)
        )
    );

    matches.forEach(service => {

        suggestionBox.innerHTML += `
            <div class="suggestion-item"
                 onclick="goToService('${service.page}')">

                 ${service.name}

            </div>
        `;

    });

}

function goToService(url){

    window.location.href = url;

}