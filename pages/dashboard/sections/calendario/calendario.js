document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('event-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const eventForm = document.getElementById('event-form');

    // Abrir modal al hacer clic en un día
    document.querySelectorAll('.day').forEach(day => {
        day.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });

    // Cerrar modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Agregar evento al calendario
    eventForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const eventDate = document.getElementById('event-date').value;
        const eventCategory = document.getElementById('event-category').value;
        const eventDescription = document.getElementById('event-description').value;

        // Lógica para agregar el evento al calendario
        console.log(`Evento agregado: ${eventDate}, ${eventCategory}, ${eventDescription}`);

        modal.style.display = 'none';
    });
});
