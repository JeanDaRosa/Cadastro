let fields = document.querySelectorAll("#form-user-create [name]")
let user = {}

function addLine(dataUser) {

    let tr = document.createElement("tr")

    tr.innerHTML = `
        <tr>
            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.admin}</td>
            <td>${user.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">delete</button>
            </td>
        </tr>
    `

    document.getElementById("table-users").appendChild(tr)

}

document.getElementById("form-user-create").addEventListener("submit", (event)=>{

    event.preventDefault()

    fields.forEach((field, index)=>{

        if (field.name === "gender" && field.checked) {
            user[field.name] = field.value
        } else {
            user[field.name] = field.value
        }
    
       // console.log(field.id,index,field.name)
    })
    
    addLine(user)

})
