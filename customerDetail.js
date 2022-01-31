/*1-get selected customer serial number
2-on click set serial no in the lical storage
3-redirect to customer detail page
4-get serial numberand saved form data
5-get the selected customer details  */

console.log(localStorage.getItem('selectedCustomer'));
const customerDetail= JSON.parse(localStorage.getItem('selectedCustomer'))
console.log(customerDetail);

const cardBody = document.querySelector("#card_body")
console.log(cardBody);
const cardItem = document.createElement("div")
console.log(cardItem);
cardItem.classList.add("card_item")

const nameField = document.createElement("h4")
    nameField.innerText = "Name: " + customerDetail.name

    const SlNumberField = document.createElement("h4")
    SlNumberField.innerText = "SlNumber: " + customerDetail.slNumber

    const phoneNumberField = document.createElement("h4")
    phoneNumberField.innerText = "PhoneNumber: " + customerDetail.phoneNumber

    const addressField = document.createElement("h4")
    addressField.innerText = "Address: " + customerDetail.address

    const receiveDateField = document.createElement("h4")
    receiveDateField.innerText = "ReceiveDate: " + customerDetail.receiveDate

    const deliverDateField = document.createElement("h4")
    deliverDateField.innerText = "DeliverDate: " + customerDetail.deliverDate

    const itemField = document.createElement("h4")
    console.log(itemField);
    itemField.innerText = "item: " + customerDetail.items

    const totalAmountField = document.createElement("h4")
    totalAmountField.innerText = "totalAmount: " + customerDetail.totalAmount

    const editButton = document.createElement("button")
    editButton.innerHTML = "Edit"
     
    editButton.addEventListener("click",e =>{
        //redirtect to form page
        window.location.href = "/form.html"
        

    })

    cardItem.appendChild(nameField)
    cardItem.appendChild(SlNumberField)
    cardItem.appendChild(phoneNumberField)
    cardItem.appendChild(addressField)
    cardItem.appendChild(receiveDateField)
    cardItem.appendChild(deliverDateField)
    cardItem.appendChild(itemField)
    cardItem.appendChild(totalAmountField)
    cardItem.appendChild(editButton)

    cardBody.appendChild(cardItem);

