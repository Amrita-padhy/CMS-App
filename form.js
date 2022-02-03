
// take a veriable form and referance it to html page

const form = document.querySelector("#main_form")
const selectedCustomer = JSON.parse(localStorage.getItem("selectedCustomer"))
console.log(selectedCustomer);


/*generate a number
   get the serial no input ref
   */
const slNumberInput = document.querySelector("#slNumber")
slNumberInput.value = selectedCustomer ? selectedCustomer.slNumber : Math.random()

/*to fix the receive date to todays date create a veriable and ref that "receiveDateInput"
and create a function formatDate()
*/
const receiveDateInput = document.querySelector("#receiveDate")
receiveDateInput.value = formatDate();

function formatDate() {
    const date = new Date().getDate()
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    return date + "-" + month + "-" + year
}




//add a event listner to the form element for submitting the form
form.addEventListener("submit", e => {
    e.preventDefault()
    /* we take a veriable "data"in that we have all the referance to the form elements
    by the use of formData we can access all the element of the form
    formData returns value of all the form element
    */
    const data = new FormData(e.target)
    const customerData = Object.fromEntries(data.entries());
  
    /* if there is no name,address,phn number then we select the error div 
    and give it a inner text 
    */
    if (!customerData.name || !customerData.address || !customerData.phoneNumber) {
        if (!customerData.name) {
            const nameError = document.querySelector(".name-error")
            nameError.innerText = "please fill your name"

        }
        if (!customerData.address) {
            const addressError = document.querySelector(".address-error")
            // console.log(addressError);
            addressError.classList.add("address-error")
            addressError.innerText = "please put your address"

        }
        if (!customerData.phoneNumber) {
            const phoneNumberError = document.querySelector(".phoneNumber-error")
            // console.log(phoneNumberError);
            phoneNumberError.classList.add("phoneNumberError-error")
            phoneNumberError.innerText = "please put your phoneNumber"

        }
        return
    }


    // if not create a empty array 
    let formData = []

    //check if any data exist or not
    //if yes get the local storage data and store it in a veriable
    if (localStorage.getItem("formData")) {
        formData = JSON.parse(localStorage.getItem("formData"));
    }
    
    //if there is no data submitted in the form then add /push new customer data
    console.log(formData);
    /*after submitting we have to save our data in local storage*/
    if (selectedCustomer) { // if edit
    //  if we want to edit some form then we have to get the same form store in local storage .
        const customerIndex = formData.findIndex(customer =>selectedCustomer.slNumber === customer.slNumber)
        //after data get matched we remove that index,by splice method and then add to formdata by push method
        //and save that data in local storage.
        formData.splice(customerIndex,1)
        formData.push(customerData)
        localStorage.setItem("formData", JSON.stringify(formData))
        alert('form updated successfully')
    }
    else {//if to create a fresh customer page 
        formData.push(customerData)
        localStorage.setItem("formData", JSON.stringify(formData))
        alert('form created successfully')
    }
    console.log(formData);


})
/*we select the name,address and phnno field and add a event listner
"keypress" in this event when we down any key it remove the erreo div */
const namefield = document.querySelector("#nameField")
namefield.addEventListener("keypress", (e) => {
    const nameError = document.querySelector(".name-error")
    nameError.innerText = ""
})
const addressField = document.querySelector("#adressField")
addressField.addEventListener("keypress", (e) => {
    const addressError = document.querySelector(".address-error")
    addressError.innerText = ""
})
const phoneNumberField = document.querySelector("#phoneNumberField")
phoneNumberField.addEventListener("keypress", (e) => {
    const phoneNumberError = document.querySelector(".phoneNumber-error")
    phoneNumberError.innerText = ""

})
const deliverDateField = document.querySelector("#deliverDate")
// console.log(deliverDateField);

const receiveDateField = document.querySelector("#receiveDate")
// console.log(receiveDateField);


const itemsField = document.querySelector("#items")
// console.log(itemsField);

const totalAmountField = document.querySelector("#totalAmount")
// console.log(totalAmountField);

//bring the same data of customer detailto form.html page from the  local storage 


// console.log(selectedCustomer);
if (selectedCustomer) {
    namefield.value = selectedCustomer.name
    addressField.value = selectedCustomer.address
    phoneNumberField.value = selectedCustomer.phoneNumber
    deliverDateField.value = selectedCustomer.deliverDate
    receiveDateField.value = selectedCustomer.receiveDate
    itemsField.value = selectedCustomer.items
    totalAmountField.value = selectedCustomer.totalAmount

    const submitBtn = document.querySelector("#subBtn")
    // console.log(submitBtn);
    submitBtn.innerText = "Update"
}





//get the ref of edit button and name it to update
