//localStorage.clear();
let customer = JSON.parse(localStorage.getItem("customer")) || [];

function btnaddCustomrOnAction() {
    alert("add customer");
    let cust = {
        id : document.getElementById("txtid").value,
        name : document.getElementById("txtname").value,
        age : document.getElementById("txtage").value,
        address : document.getElementById("txtaddress").value
    }
    customer.push(cust);
    localStorage.setItem("customer",JSON.stringify(customer));
}

function btnSearchCustomrOnAction() {
    alert("search customer");
    for(let i=0 ; i<customer.length ; i++){
        if(customer[i].id===document.getElementById("txtid").value){
            document.getElementById("txtname").value = customer[i].name;
            document.getElementById("txtage").value = customer[i].age;
            document.getElementById("txtaddress").value = customer[i].address;
        }
    }
}

function btnDeleteCustomrOnAction() {
    alert("delete customer");
    for(let i=0 ; i<customer.length ; i++){
        if(customer[i].id===document.getElementById("txtid").value){
            customer.pop(customer[i]);
        }
    }
    localStorage.setItem("customer",JSON.stringify(customer));
}

function btnUpdateCustomrOnAction() {
    alert("update customer");
    for(let i=0 ; i<customer.length ; i++){
        if(customer[i].id===document.getElementById("txtid").value){
            customer[i].name = document.getElementById("txtname").value;
            customer[i].age = document.getElementById("txtage").value;
            customer[i].address = document.getElementById("txtaddress").value;
        }
    }
    localStorage.setItem("customer",JSON.stringify(customer));
}

function btnClearStorageOnAction() {
    alert("clear storage");
    localStorage.clear();
}

function btnLoadTableOnAction() {
    alert("load table");
}