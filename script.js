// take a veriable customerlist 

let customerList = (JSON.parse(localStorage.getItem('formData')));
if (!customerList) {
    customerList = []
}
console.log(customerList);
/* show the customer data in the screen*/
const bodyContainer = document.querySelector('#body-container')
/*we create a row and give it rhe class "row"and append it into the body container */
const row = document.createElement('div')
row.classList.add('row')
bodyContainer.appendChild(row)
/*we create a for each loop to itrate over the customberlist
to get the each customer  */
customerList.forEach(customer => {

    const col = document.createElement("div")
    col.classList.add("col-4")

    const card = document.createElement("div")
    card.classList.add("card")

    const nameField = document.createElement("h5")
    nameField.innerText = "Name: " + customer.name

    const numberField = document.createElement("h5")
    numberField.innerText = "Phone Number: " + customer.phoneNumber

    const dateField = document.createElement("h5")
    dateField.innerText = "Deliver date: " + customer.deliverDate

    const slNunberField = document.createElement("h5")
    slNunberField.classList.add("slNunberField")

    slNunberField.innerText = "Sl Number: " + customer.slNumber

    card.appendChild(nameField)
    card.appendChild(numberField)
    card.appendChild(dateField)
    card.appendChild(slNunberField)

    col.appendChild(card)
    row.appendChild(col)

});
// const Container = document.querySelector("#body-container")
// console.log(Container);
/*on click in the card all the card details will display on the customer detail page  */
const cards = document.querySelectorAll(".card")
const cardArray = Array.from(cards);
// console.log(cardArray);

cardArray.forEach((card, index) => {
    card.addEventListener("click", e => {
        const customer = customerList[index];
        console.log(customer);
        localStorage.setItem("selectedCustomer", JSON.stringify(customer))
        window.location.href = "/customerDetail.html"
    })
});

//  click on add button clear customber details from local storage


const addBtn = document.querySelector("#addBtn")
console.log(addBtn);
addBtn.addEventListener("click", e => {
    localStorage.removeItem("selectedCustomer")
})

// we need to referanse the input field
const formInput = document.querySelector("#form_input")
console.log(formInput);

//when we start to search something it will show options
formInput.addEventListener("keypress", e => {
    console.log(formInput.value);
    const filteredArray = customerList.filter(customer => customer.name.includes(formInput.value))
    console.log(filteredArray);
})

