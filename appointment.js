/*
var form = document.getElementById('my-form');
var name11 = document.getElementById('name');
var email = document.getElementById('email');


form.addEventListener('submit', storeLocal);




function storeLocal(e) {
    e.preventDefault();
    var name1 = name11.value;
    var email1 = email.value;
    // console.log(name1);
    // console.log(email1);

    let obj = {
        name1,
        email1
    }
    axios.post(`http://localhost:3000/insert`, obj)
        .then((response) => {

            console.log(response.data);



            display(obj, id);
            name1 = "";
            email1 = "";
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + '<h4> something went wrong while post request</h4>'
        });


}

function display(user, id) {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    const parentNode = document.getElementById('users');
    const childHTML = `<li id='${id}'> ${user.name1} - ${user.email1}
                    <button onCLick = deleteUser('${id}')>Delete</button>
                    <button onClick = EditUser('${user.name1}','${user.email1}','${id}')>Edit</button>
                    </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;

}

window.addEventListener('DOMContentLoaded', () => {

    axios.get(`http://localhost:3000/get`)
        .then((response) => {
            // console.log(response.data[0].Name);

            for (let i = 0; i < response.data.length; i++) {
                const parentNode = document.getElementById('users');

                const childHTML = `<li id ='${response.data[i].Email}' > ${response.data[i].Name}  - ${response.data[i].Email}
            
                              <button onClick = deleteUser('${response.data[i].Email}') > Delete </button> &nbsp&nbsp
                              
                               <button onClick = EditUser('${response.data[i].Name}','${response.data[i].Email}','${response.data[i]._id}') > Edit </button>
                               </li>`
                parentNode.innerHTML = parentNode.innerHTML + childHTML;

            }
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + '<h4> No data</h4>';
        })

});



function deleteUser(id) {
    console.log('delete');
}

function EditUser(a, b, id) {

}

*/


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