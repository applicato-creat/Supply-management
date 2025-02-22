let appointments = [];
let clinicOpen = false;
const currentDate = new Date().toISOString().split('T')[0];

//  Õ„Ì· «·»Ì«‰«  „‰ LocalStorage
function loadAppointments() {
    const storedData = localStorage.getItem(`appointments_${currentDate}`);
    appointments = storedData ? JSON.parse(storedData) : [];
    updateDoctorAppointments();
}

// Õ›Ÿ «·»Ì«‰«  ›Ì LocalStorage
function saveAppointments() {
    localStorage.setItem(`appointments_${currentDate}`, JSON.stringify(appointments));
}

// „”Õ «·»Ì«‰«  ›Ì ‰Â«Ì… «·ÌÊ„
function clearDailyData() {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    const timeLeft = endOfDay - now;
    setTimeout(() => {
        localStorage.removeItem(`appointments_${currentDate}`);
        appointments = [];
        updateDoctorAppointments();
    }, timeLeft);
}

function openClinic() {
    clinicOpen = true;
    document.getElementById('clinic-status').textContent = 'Õ«·… «·⁄Ì«œ…: „› ÊÕ…';
    document.getElementById('notification').classList.remove('hidden');
    alert(' „ › Õ «·⁄Ì«œ…°  „ ≈—”«· ≈‘⁄«— ··„—÷Ï!');
}

function closeClinic() {
    clinicOpen = false;
    document.getElementById('clinic-status').textContent = 'Õ«·… «·⁄Ì«œ…: „€·ﬁ…';
    document.getElementById('notification').classList.add('hidden');
    alert(' „ ≈€·«ﬁ «·⁄Ì«œ….');
}

function updateDoctorAppointments() {
    const doctorList = document.getElementById('doctor-appointments');
    doctorList.innerHTML = '';

    appointments.forEach((appointment, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${appointment.fullName} - ${appointment.address} - ${appointment.phone} - ${appointment.type} - «·”«⁄… ${appointment.time}`;
        if (appointment.completed) li.classList.add('completed');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Õ–› ( √Œ—)';
        deleteBtn.onclick = () => deleteAppointment(index);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = '≈ „«„ «·ﬂ‘›';
        completeBtn.onclick = () => completeAppointment(index);

        li.appendChild(deleteBtn);
        li.appendChild(completeBtn);
        doctorList.appendChild(li);
    });
}

function deleteAppointment(index) {
    appointments.splice(index, 1);
    saveAppointments();
    updateDoctorAppointments();
    alert(' „ Õ–› «·„—Ì÷ »”»» «· √Œ—.');
}

function completeAppointment(index) {
    appointments[index].completed = true;
    saveAppointments();
    updateDoctorAppointments();
}

//  Õ„Ì· «·»Ì«‰«  Ê ›⁄Ì· «·„”Õ «·ÌÊ„Ì
loadAppointments();
clearDailyData();