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
            </div>
            <div>
                <h3 class='text-primary'>Name : ${user.name.title} ${user.name.first} ${user.name.last}</h3>
            </div>
        </div>
    `;
    console.log(user);
}

loadUsers();