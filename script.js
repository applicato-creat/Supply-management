let missingItems = [];
let invoiceItems = [];

// ����� ��� ��� ����� �������
function addMissingItem() {
    const itemInput = document.getElementById('missingItem');
    const item = itemInput.value.trim();

    if (item) {
        missingItems.push(item);
        updateMissingList();
        itemInput.value = '';
    }
}

// ����� ��� ��� ������ ������
function addInvoiceItem() {
    const itemInput = document.getElementById('invoiceItem');
    const item = itemInput.value.trim();

    if (item) {
        invoiceItems.push(item);
        updateInvoiceList();
        itemInput.value = '';
    }
}

// ����� ����� �������
function updateMissingList() {
    const list = document.getElementById('missingList');
    list.innerHTML = '';
    missingItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

// ����� ����� ������ ������
function updateInvoiceList() {
    const list = document.getElementById('invoiceList');
    list.innerHTML = '';
    invoiceItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

// ������ �������� ���� ������� ������� �� �������
function processInvoice() {
    invoiceItems.forEach(invoiceItem => {
        const index = missingItems.indexOf(invoiceItem);
        if (index !== -1) {
            missingItems.splice(index, 1); // ��� ����� �� �������
        }
    });

    // ����� ����� ������ ������ ��� ��������
    invoiceItems = [];
    updateMissingList();
    updateInvoiceList();
    alert('�� ������ �������� �����!');
}