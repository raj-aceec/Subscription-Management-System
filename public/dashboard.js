const apiBaseUrl = 'http://localhost:3000/user/users';
const subscriberTableBody = document.getElementById('subscriberTableBody');
const addModal = document.getElementById('addModal');
const addBtn = document.getElementById('add-btn');
const addForm = document.getElementById('subscriberForm');
var spanAdd = document.getElementsByClassName("closeAdd")[0];
var spanEdit = document.getElementsByClassName("closeEdit")[0];
const editModal = document.getElementById('editModal');
const editForm = document.getElementById('editForm');
function fetchSubscribers() {
    fetch(apiBaseUrl)
        .then(response => response.json())
        .then(data => {
            subscriberTableBody.innerHTML = '';
            data.subscribers.forEach(subscriber => {
                const row = document.createElement('tr');
                row.setAttribute('data-id', subscriber.id);
                row.innerHTML = `
                    <td>${subscriber.id}</td>
                    <td>${subscriber.Subscription_type}</td>
                    <td>${subscriber.start_data}</td>
                    <td>${subscriber.end_date}</td>
                    <td>${subscriber.p_status}</td>
                    <td>${subscriber.last_p_date}</td>
                    <td>
                        <button class="editbtn" onclick="openEditModal(${subscriber.id})">Edit</button>
                        <button class="deletebtn" onclick="deleteSubscriber(${subscriber.id})">Delete</button>
                    </td>
                `;
                subscriberTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching Subscribers:', error));
}
addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newSubscriber = {
        id: document.getElementById('sid').value,
        Subscription_type: document.getElementById('stype').value,
        start_data: document.getElementById('startDate').value,
        end_date: document.getElementById('endDate').value,
        p_status: document.getElementById('pStatus').value,
        last_p_date: document.getElementById('lpDate').value
    };
    fetch(apiBaseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSubscriber)
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Subscriber data added successfully') {
                fetchSubscribers();
                closeModal();
            }
        })
        .catch(error => console.error('Error adding Subsriber:', error));
});
function deleteSubscriber(id) {
    fetch(`${apiBaseUrl}/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Subscriber data deleted successfully') {
                fetchSubscribers();
            }
        })
        .catch(error => console.error('Error deleting subscriber:', error));
}
function openEditModal(id) {
    fetch(`${apiBaseUrl}/${id}`)
        .then(response => response.json())
        .then(data => {
            const subscriber = data.subscribers[0];
            document.getElementById('e_sid').value = subscriber.id;
            document.getElementById('e_stype').value = subscriber.Subscription_type;
            document.getElementById('e_startDate').value = subscriber.start_data;
            document.getElementById('e_endDate').value = subscriber.end_date;
            document.getElementById('e_pStatus').value = subscriber.p_status;
            document.getElementById('e_lpDate').value = subscriber.last_p_date;
            editModal.style.display = 'block';
        })
}
editForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newUpdatedSubscriber = {
        Subscription_type: document.getElementById('e_stype').value,
        start_data: document.getElementById('e_startDate').value,
        end_date: document.getElementById('e_endDate').value,
        p_status: document.getElementById('e_pStatus').value,
        last_p_date: document.getElementById('e_lpDate').value
    };
    const id = document.getElementById('e_sid').value;
    fetch(`${apiBaseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUpdatedSubscriber)
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Subscriber data updated successfully') {
                fetchSubscribers();
                closeEditModal();
            }
        })
        .catch(error => console.error('Error in updating Subsriber:', error));

});
function openModal() {
    addModal.style.display = 'block';
}
function closeModal() {
    addModal.style.display = 'none';
    addForm.reset();
}
function closeEditModal() {
    editModal.style.display = 'none';
    editForm.reset();
}
spanAdd.onclick = function () {
    addModal.style.display = "none";
}
spanEdit.onclick = function () {
    editModal.style.display = "none";
}
addBtn.addEventListener('click', openModal);
fetchSubscribers();