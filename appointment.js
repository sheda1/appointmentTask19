


var user_id = undefined;
var iddd = '0365815947244151beecec1e048d9846'


window.addEventListener('DOMContentLoaded', () => {
    axios.get(`http://localhost:3000/get`)
        .then(res => {
            console.log(res);
            for (let i = 0; i < res.data.length; i++) {
                
                showResponse(res.data[i]);

            }
        })
        .catch(err => console.error(err));
})



document.getElementById('form')
    .addEventListener('submit', addUser);

function addUser(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
   
    const obj = {
        name,
        email
    }
    //if (user_id === undefined) {
       // console.log(user_id);
        axios.post(`http://localhost:3000/insert`, obj)
            .then(res => {
                showResponse(res.data)
                console.log('added');
            })
            .catch(err => console.error(err));
    /*} else {
        console.log(user_id);
        axios.put(`https://crudcrud.com/api/${iddd}/appointment-data/${user_id}`, obj)
            .then(res => {

                let userList = document.getElementById('item_list');
                let list = document.createElement('li');
                list.id = user_id;
                list.innerHTML = `${name} - ${email}`;
                let deleteBtn = document.createElement('button');
                deleteBtn.appendChild(document.createTextNode('Delete'));
                deleteBtn.className = 'deleted';
                list.append(deleteBtn);

                let editBtn = document.createElement('button');
                editBtn.appendChild(document.createTextNode('Edit'));
                editBtn.className = 'edited';
                list.appendChild(editBtn);
                userList.appendChild(list);

                let user_List = document.getElementById('item_list');
                let lists = document.getElementById(user_id);
                if (lists) {
                    user_List.removeChild(lists);
                }
                user_id = undefined;

            })
            .catch(err => console.log(err));
    }*/

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
   

}

function showResponse(data) {
    let userList = document.getElementById('item_list');
    let list = document.createElement('li');
    list.id = data._id;
    list.innerHTML = `${data.Name} - ${data.Email}`;
    let deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.className = 'deleted';
    list.append(deleteBtn);

    let editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.className = 'edited';
    list.appendChild(editBtn);

    userList.appendChild(list);
}
/*
document.getElementById('item_list')
    .addEventListener('click', deleteORedit)

function deleteORedit(event) {
    if (event.target.classList.contains('deleted')) {
        axios.delete(`https://crudcrud.com/api/${iddd}/appointment-data/${event.target.parentElement.id}`)
            .then(res => {
                console.log('deleted')
                removeList(event.target.parentElement.id);
            })
            .catch(err => console.error(err));
    }
    if (event.target.classList.contains('edited')) {
        axios.get(`http://localhost:3000/get`)
            .then(res => {
                document.getElementById('name').value = res.data.name;
                document.getElementById('email').value = res.data.email;
             
                user_id = res.data._id;
                console.log('edited');
            })
            .catch(err => console.error(err));

    }

    function removeList(event) {
        let userList = document.getElementById('item_list');
        let childDeleted = document.getElementById(event);
        if (childDeleted) {
            userList.removeChild(childDeleted);
        }
    }
}*/
