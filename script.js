let timetableEntries = [];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const periods = 6; // Assuming 6 periods per day

function addEntry() {
    const teacherName = document.getElementById('teacher-name').value;
    const subjectName = document.getElementById('subject-name').value;

    if (teacherName && subjectName) {
        timetableEntries.push({
            teacher: teacherName,
            subject: subjectName
        });

        // Clear the input fields
        document.getElementById('teacher-name').value = '';
        document.getElementById('subject-name').value = '';
    } else {
        alert('Please enter both teacher name and subject.');
    }
}

function generateTimetable() {
    const timetable = document.getElementById('timetable');
    timetable.innerHTML = ''; // Clear the current timetable

    // Create header for periods
    const header = document.createElement('div');
    header.className = 'grid-item';
    header.innerText = 'Day/Period';
    timetable.appendChild(header);

    for (let period = 1; period <= periods; period++) {
        const periodHeader = document.createElement('div');
        periodHeader.className = 'grid-item';
        periodHeader.innerText = `Period ${period}`;
        timetable.appendChild(periodHeader);
    }

    // Create rows for each day
    for (let day = 0; day < days.length; day++) {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'grid-item';
        dayHeader.innerText = days[day];
        timetable.appendChild(dayHeader);

        for (let period = 1; period <= periods; period++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';

            // Calculate the index for the timetableEntries array
            const entryIndex = (day * periods + period - 1) % timetableEntries.length;
            const entry = timetableEntries[entryIndex];

            gridItem.innerText = entry ? `${entry.subject}\n${entry.teacher}` : '';
            timetable.appendChild(gridItem);
        }
    }
}
