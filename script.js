// your code here
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", function () {
        let name = document.getElementById("name").value.trim();
        let year = document.getElementById("year").value.trim();
        
        let baseURL = "https://localhost:8080/";
        let params = new URLSearchParams();

        if (name) params.append("name", name);
        if (year) params.append("year", year);

        let finalURL = baseURL + (params.toString() ? "?" + params.toString() : "");
        
        document.getElementById("url").textContent = finalURL;
    });
});

