
// take a veriable form and referance it to html page
const form = document.querySelector("#main_form")
/*generate a number
   get the serial no input ref
   */
const slNumberInput = document.querySelector("#slNumber")
// console.log(slNumberInput);

slNumberInput.value = Math.random()

/*to fix the receive date to todays date create a veriable and ref that "receiveDateInout"
and create a function formatDate()
*/
const receiveDateInout = document.querySelector("#receiveDate")
receiveDateInout.value = formatDate();

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
    console.log(customerData);
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
            console.log(addressError);
            addressError.classList.add("address-error")
            addressError.innerText = "please put your address"

        }
        if (!customerData.phoneNumber) {
            const phoneNumberError = document.querySelector(".phoneNumber-error")
            console.log(phoneNumberError);
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
    formData.push(customerData)
    // console.log(formData);
    /*after submitting we have to save our data in local storage*/
    localStorage.setItem("formData", JSON.stringify(formData))

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

//bring the same data of edit page from local storage




