document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    addcontact();
});

function addcontact() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('number').value;

    var table = document.getElementById('table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cellname = newRow.insertCell(0);
    var cellphone = newRow.insertCell(1);

    cellname.innerHTML = name;
    cellphone.innerHTML = phone;

    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
}
