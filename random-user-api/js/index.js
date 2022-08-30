const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => displayUsers(data.results[0]))
}

const displayUsers = (user) => {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `
        <div class="d-flex justify-content-between bg-light p-3" style="width:100%;">
            <img src='${user.picture.large}' class='rounded-circle border border-5 border-primary' style="width:15%;">
            <div>
                <h3 class='text-primary'>Name : ${user.name.title} ${user.name.first} ${user.name.last}</h3>
                <h5 class='text-secondary'>Country : ${user.location.country}</h5>
                <h5 class='text-secondary'>City : ${user.location.city}</h5>
                <h5 class='text-secondary'>Phone : ${user.phone}</h5>
                <h5 class='text-secondary'>Email : ${user.email}</h5>
            </div>
            <div>
                <h6 class='text-secondary'>Street : ${user.location.street.name} ${user.location.street.number}</h6>
                <h6 class='text-secondary'>Time Zone : ${user.location.timezone.description}</h6>
                <h6 class='text-secondary'>Post Code : ${user.location.postcode}</h6>
                <h6 class='text-secondary'>Date of Birth : ${user.dob.date.slice(0,10)}</h6>
                <h6 class='text-secondary'>Date of Birth : ${user.login.username}</h6>
            </div>
        </div>
    `;
    console.log(user);
}

loadUsers();