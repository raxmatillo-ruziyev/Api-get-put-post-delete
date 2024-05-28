const modal = document.querySelector(".modal")
const close = document.querySelector("#close")
const open = document.querySelector("#open")
var id = null;


// ----------qoshish-modal
open.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "block"
})
close.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "none"
})
// -----------------------------------

const boxList = document.querySelector("#boxList");
const edit = document.querySelector(".edit");
const closePut = document.querySelector("#closePut");
const Putselect = document.querySelector("#PutSelect");
const putSend = document.querySelector("#putSend")
// Ma'lumotni yuklash

fetch('https://autoapi.dezinfeksiyatashkent.uz/api/models')
    .then(response => response.json())
    .then(data => {
        data.data.forEach(elment => {
            const listItem = document.createElement('li');
            listItem.className = 'boxItem';
            
            const brandTitle = document.createElement('h1');
            brandTitle.className = 'title';
            brandTitle.textContent = elment.brand_title;
            
            const nameTitle = document.createElement('h1');
            nameTitle.className = 'title';
            nameTitle.textContent = elment.name;
            
            // const editButton = document.createElement('button');
            // editButton.className = 'btn';
            // editButton.type = 'submit';
            // editButton.textContent = 'Edit';
            // editButton.addEventListener('click', (e) => {
            //     id = elment.id
            //     e.preventDefault();
            //     edit.style.display = 'block';
            // });
          
    
           
            
             
            
            listItem.appendChild(brandTitle);
            listItem.appendChild(nameTitle);
            listItem.appendChild(editButton);
            boxList.appendChild(listItem);
        });
    });


closePut.addEventListener('click', (e) => {
    e.preventDefault();
    edit.style.display = 'none';
});



fetch('https://autoapi.dezinfeksiyatashkent.uz/api/brands')
.then(response => response.json())
.then(data => {
    data.data.forEach(elment => {
        Putselect.innerHTML += `<option value=${elment.id} class="boxItem">
        <h1> ${elment.title}</h1>  
         
         </option>`
         
    })


})
 // =============================Put=========
 const sendPut = document.querySelector("#sendPut")
    sendPut.addEventListener('click', (e) => {
        e.preventDefault();
         fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/models/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: putSend.value,
                brand_id:Putselect.value
              
            }),
            headers: {
                'Authorization':`Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
              
            },
        }).then(response => response.json())
            .then(data => {
                window.location.reload()
            })
    })
// --------------delete---------






// ----------------------------------------------------
fetch('https://autoapi.dezinfeksiyatashkent.uz/api/brands')
    .then(response => response.json())
    .then(data => {
        data.data.forEach(elment => {
            select.innerHTML += `<option value=${elment.id} class="boxItem">
            <h1> ${elment.title}</h1>  
             
             </option>`
             
        })


    })

// ==========================================================post========
const sendInput = document.querySelector('#inputsend')
const select = document.querySelector("#select")
const send = document.querySelector("#send")


    send.addEventListener('click', (e) => {
        e.preventDefault();
         fetch('https://autoapi.dezinfeksiyatashkent.uz/api/models', {
            method: 'POST',
            body: JSON.stringify({
                name: sendInput.value,
                brand_id:select.value
            }),
            headers: {
                'Authorization':`Bearer ${localStorage.getItem("access_token")}`,
                'Content-Type': 'application/json',
              
            },
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                window.location.reload()
            })
    })










        

    
   
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/models')
        .then(response => response.json())
        .then(data => {
            data.data.forEach(elment => {
                const listItem = document.createElement('li');
                listItem.className = 'boxItem';
                
                const brandTitle = document.createElement('h1');
                brandTitle.className = 'title';
                brandTitle.textContent = elment.brand_title;
                
                const nameTitle = document.createElement('h1');
                nameTitle.className = 'title';
                nameTitle.textContent = elment.name;
                
                const editButton = document.createElement('button');
                editButton.className = 'btn1';
                editButton.type = 'submit';
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', (e) => {
                    id = elment.id
                    e.preventDefault();
                    edit.style.display = 'block';
                });
    
                const deleteButton = document.createElement('button');
                deleteButton.className = 'btn';
                deleteButton.type = 'button';
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    deleteModel(elment.id);
                });
                
                listItem.appendChild(brandTitle);
                listItem.appendChild(nameTitle);
                listItem.appendChild(editButton);
                listItem.appendChild(deleteButton);
                boxList.appendChild(listItem);
            });
        });
    

    
    function deleteModel(id) {
        fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/models/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access_token")}`
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.reload(); // Ma'lumotlar yangilanishi uchun sahifani qayta yuklash
        })
        .catch(error => console.error('Error:', error));
    }
    
    
    


    
    