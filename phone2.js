


let phone = [];

function addphone() {
  let phoneName = prompt("Add phone name");
  let price = +prompt("Add price");
  let newphone={phoneName: phoneName , price:price};

phone.push( newphone);
  console.clear();
  showPhones();
}  


function showPhones() {
  phone.forEach((phone, index) => {
   
    console.log(phone);
  });
}

function deletePhone() {
  let phoneIndex = +prompt("Enter phone index you want to delete");
  phone.splice(phoneIndex - 1, 1);
  console.clear();
  showPhones();
}

function update() {
  let phoneIndex = +prompt("Enter phone index you want to update");
  let newPrice = +prompt("Enter new price");
  phone[phoneIndex - 1].price = newPrice;
  console.clear();
  showPhones();
}

