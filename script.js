async function getData() {
    const url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";
    const response = await fetch(url);
    console.log(response.ok);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);

    
    const data = await response.json();
    const tablebody = document.getElementById("table1");

    data.results.forEach(element => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${element.year || "N/A"}</td>
            <td>${element.semester || "N/A"}</td>
            <td>${element.the_programs || "N/A"}</td>
            <td>${element.the_nationality || "N/A"}</td>
            <td>${element.colleges || "N/A"}</td>
            <td>${element.number_of_students || "N/A"}</td>
        `;
        tablebody.appendChild(row);
    });
}

getData();
