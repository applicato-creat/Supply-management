let appointments = [];
const currentDate = new Date().toISOString().split('T')[0];

// ����� �������� �� LocalStorage
function loadAppointments() {
    const storedData = localStorage.getItem(`appointments_${currentDate}`);
    appointments = storedData ? JSON.parse(storedData) : [];
    updatePatientAppointments();
}

// ��� �������� �� LocalStorage
function saveAppointments() {
    localStorage.setItem(`appointments_${currentDate}`, JSON.stringify(appointments));
}

function registerPatient(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const appointmentType = document.getElementById('appointment-type').value;
    const appointmentTime = document.getElementById('appointment-time').value;

    const appointment = {
        fullName,
        address,
        phone,
        type: appointmentType === 'first' ? '��� ��� ���' : '����� ���',
        time: appointmentTime,
        completed: false,
        locked: true
    };

    appointments.push(appointment);
    saveAppointments();
    updatePatientAppointments();

    alert(`�� ����� ������ ${fullName} ���� ������ ����� �� ������ ${appointmentTime}`);
    document.getElementById('patient-form').reset();
}

function updatePatientAppointments() {
    const patientList = document.getElementById('patient-appointments');
    patientList.innerHTML = '';

    appointments.forEach(appointment => {
        if (!appointment.completed) {
            const li = document.createElement('li');
            li.textContent = `${appointment.fullName} - ${appointment.type} - ������ ${appointment.time}`;
            patientList.appendChild(li);
        }
    });
}

// ������ ���� ������� (�����)
function checkClinicStatus() {
    const clinicStatus = localStorage.getItem('clinicOpen');
    const notification = document.getElementById('notification');
    if (clinicStatus === 'true') {
        notification.classList.remove('hidden');
    } else {
        notification.classList.add('hidden');
    }
}

// ����� �������� ���� ���� ������� ���� ����
loadAppointments();
setInterval(checkClinicStatus, 1000); // ���� �� �����