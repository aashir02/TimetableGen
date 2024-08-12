function generateTimetable() {
    const timetable = document.getElementById('timetable');
    timetable.innerHTML = ''; // Clear the current timetable

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const periods = 6; // Assuming 6 periods per day

    for (let day of days) {
        for (let period = 1; period <= periods; period++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.innerText = `${day} - Period ${period}`;
            timetable.appendChild(gridItem);
        }
    }
}
