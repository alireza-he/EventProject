$('#EventStart').persianDatepicker({
    observer: true,
    format: 'YYYY/MM/DD',
    autoClose: true
});

$('#EndEvent').persianDatepicker({
    observer: true,
    format: 'YYYY/MM/DD',
    autoClose: true
});

$('#dateInput-TicketDefinition').persianDatepicker({
    observer: true,
    format: 'چهار شنبه YYYY/MM/DD',
    autoClose: true
});


const formSalesInformation = document.getElementById('form-SalesInformation');
const NumberOfTickets = document.getElementById('NumberOfTickets');
const NumberOfChances = document.getElementById('NumberOfChances');
const TicketName0 = document.getElementById('TicketName0');
const TicketName1 = document.getElementById('TicketName1');
const invalidMessage = document.querySelectorAll('.invalid-message');

formSalesInformation.addEventListener('submit', function () {
    if (NumberOfTickets.value === '') {
        NumberOfTickets.style = 'border: 2px solid red !important';
        invalidMessage[0].textContent = 'لطفا تعداد بلیت های خود را انتخاب کنید';
        event.preventDefault();
    } else {
        NumberOfTickets.style = 'border: none !important';
        invalidMessage[0].textContent = '';
    }

    if (NumberOfChances.value === '') {
        NumberOfChances.style = 'border: 2px solid red !important';
        invalidMessage[1].textContent = 'لطفا تعداد سانس های خود را انتخاب کنید';
        event.preventDefault();
    } else {
        NumberOfChances.style = 'border: none !important';
        invalidMessage[1].textContent = '';
    }

    if (TicketName0.value === '') {
        TicketName0.style = 'border: 2px solid red !important';
        invalidMessage[1].textContent = 'لطفا تعداد سانس های خود را انتخاب کنید';
        event.preventDefault();
    } else {
        TicketName0.style = 'border: none !important';
        invalidMessage[1].textContent = '';
    }

    if (TicketName0.value === '') {
        TicketName0.style = 'border: 2px solid red !important';
        event.preventDefault();
    } else {
        TicketName0.style = 'border: none !important';
    }

    if (TicketName1.value === '') {
        TicketName1.style = 'border: 2px solid red !important';
        event.preventDefault();
    } else {
        TicketName1.style = 'border: none !important';
    }
});
