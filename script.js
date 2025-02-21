let missingItems = [];
let invoiceItems = [];

// ÅÖÇİÉ Õäİ Åáì ŞÇÆãÉ ÇáäæÇŞÕ
function addMissingItem() {
    const itemInput = document.getElementById('missingItem');
    const item = itemInput.value.trim();

    if (item) {
        missingItems.push(item);
        updateMissingList();
        itemInput.value = '';
    }
}

// ÅÖÇİÉ Õäİ Åáì İÇÊæÑÉ ÇáæÇÑÏ
function addInvoiceItem() {
    const itemInput = document.getElementById('invoiceItem');
    const item = itemInput.value.trim();

    if (item) {
        invoiceItems.push(item);
        updateInvoiceList();
        itemInput.value = '';
    }
}

// ÊÍÏíË ŞÇÆãÉ ÇáäæÇŞÕ
function updateMissingList() {
    const list = document.getElementById('missingList');
    list.innerHTML = '';
    missingItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

// ÊÍÏíË ŞÇÆãÉ İÇÊæÑÉ ÇáæÇÑÏ
function updateInvoiceList() {
    const list = document.getElementById('invoiceList');
    list.innerHTML = '';
    invoiceItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

// ãÚÇáÌÉ ÇáİÇÊæÑÉ æÍĞİ ÇáÃÕäÇİ ÇáæÇÑÏÉ ãä ÇáäæÇŞÕ
function processInvoice() {
    invoiceItems.forEach(invoiceItem => {
        const index = missingItems.indexOf(invoiceItem);
        if (index !== -1) {
            missingItems.splice(index, 1); // ÍĞİ ÇáÕäİ ãä ÇáäæÇŞÕ
        }
    });

    // ÅÚÇÏÉ ÊÚííä İÇÊæÑÉ ÇáæÇÑÏ ÈÚÏ ÇáãÚÇáÌÉ
    invoiceItems = [];
    updateMissingList();
    updateInvoiceList();
    alert('Êã ãÚÇáÌÉ ÇáİÇÊæÑÉ ÈäÌÇÍ!');
}