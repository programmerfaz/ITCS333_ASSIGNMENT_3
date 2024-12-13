async function getData() {
    const url = "https://data.gov.bh/explore/dataset/01-statistics-of-students-nationalities_updated/table/?disjunctive.year&disjunctive.semester&disjunctive.the_programs&sort=number_of_students";
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
