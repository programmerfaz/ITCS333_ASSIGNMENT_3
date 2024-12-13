async function getData() {
    const url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error('API request failed', response.status);
            return;
        }

        const data = await response.json();
        console.log(data); // Check if data is fetched correctly
        const tablebody = document.getElementById("table1").getElementsByTagName("tbody")[0];

        data.records.forEach(record => {
            const fields = record.fields;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${fields.year || "N/A"}</td>
                <td>${fields.semester || "N/A"}</td>
                <td>${fields.the_programs || "N/A"}</td>
                <td>${fields.nationalities || "N/A"}</td>
                <td>${fields.colleges || "N/A"}</td>
                <td>${fields.enrollment_count || "N/A"}</td>
            `;
            tablebody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData();
