$(document).ready(function () {
    function renderCards(sortedData) {
        $('#wrapper').empty();

        $.each(sortedData, function (index, animal) {

            // Bildname weiterhin mit "name"
            let imageName = `images/animals/${animal.name}.jpeg`;

            let groupColors = {
                'A': { primary: 'rgb(200, 50, 50)', secondary: 'rgb(222, 111, 111)' },
                'B': { primary: 'rgb(204, 49, 126)', secondary: 'rgb(250, 150, 200)' },
                'C': { primary: 'rgb(33, 110, 33)', secondary: 'rgb(124, 194, 124)' },
                'D': { primary: 'rgb(0, 176, 155)', secondary: 'rgb(128, 209, 199)' },
                'E': { primary: 'rgb(34, 77, 142)', secondary: 'rgb(125, 163, 219)' },
                'F': { primary: 'rgb(235, 124, 14)', secondary: 'rgb(219, 153, 88)' },
                'G': { primary: 'rgb(237, 190, 0)', secondary: 'rgb(237, 212, 109)' },
                'H': { primary: 'rgb(124, 20, 184)', secondary: 'rgb(181, 134, 209)' },
            };

            let colors = groupColors[animal.group] || groupColors['E'];

            let divBox = $(`<div class="card-wrapper">
                <div class="card-content">
                    <div class="card-number" style="background-color: ${colors.primary}; color: white;">F${animal.id}</div>
                    <div class="card-title">${animal.name_german}</div> <!-- Geändert: "name_german" -->
                    <img src="${imageName}" alt="${animal.name}" class="card-image" /> <!-- "name" für Bild -->
                    <div class="card-trivia" style="background-color: ${colors.secondary};">${animal.trivia_german}</div> <!-- Geändert: "trivia_german" -->
                    <div class="stat-icon" style="background-color: ${colors.secondary};">
                        <img src="images/icons/weight.png" alt="weight" />
                    </div>
                    <div class="stat-value">${animal.max_weight} kg</div>
                    <div class="stat-icon" style="background-color: ${colors.secondary};">
                        <img src="images/icons/length.png" alt="length" />
                    </div>
                    <div class="stat-value">${animal.max_length} cm</div>
                    <div class="stat-icon" style="background-color: ${colors.secondary};">
                        <img src="images/icons/age.png" alt="maximum age" />
                    </div>
                    <div class="stat-value">${animal.max_age} Jahre</div>
                    <div class="stat-icon" style="background-color: ${colors.secondary};">
                        <img src="images/icons/speed.png" alt="max speed" />
                    </div>
                    <div class="stat-value">${animal.top_speed} km/h</div>
                    <div class="stat-icon" style="background-color: ${colors.secondary};">
                        <img src="images/icons/offspring.png" alt="offspring count per cycle" />
                    </div>
                    <div class="stat-value">${animal.litter_size}</div>
                    <div class="stat-icon" style="background-color: ${colors.secondary};">
                        <img src="images/icons/death.png" alt="casualties per year" />
                    </div>
                    <div class="stat-value">${animal.deaths}</div>
                </div>
            </div>`);
            $('#wrapper').append(divBox);
        });
    }

    renderCards(data);

    $('#sort-select').on('change', function () {
        let sortKey = $(this).val();

        let sortedData = [...data].sort((a, b) => {
            let valA = parseFloat(a[sortKey]) || 0;
            let valB = parseFloat(b[sortKey]) || 0;
            return valA - valB;
        });

        renderCards(sortedData);
    });
});
