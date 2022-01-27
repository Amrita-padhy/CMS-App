
// take a veriable form and referance it to html page
const form = document.querySelector("#main_form")

//add a event listner to the form element for submitting the form
form.addEventListener("submit", e => {
    e.preventDefault()
    /* we take a veriable "data"in that we have all the referance to the form elements
    by the use of formData we can access all the element of the form
    formData returns value of all the form element
    */
    const data = new FormData(e.target)
    const value = Object.fromEntries(data.entries());
    console.log(value);
    /* if there is no name,address,phn number then show alert*/
    if (!value.name || !value.address || !value.number) {
        if (!value.name) {

            alert('please put your name')
            return
        }
        if (!value.address) {
            alert('please put your address')
            return
        }
        if (!value.number) {
            alert('please put your PhoneNumber')
            return
        }
    }
    
    
    // if not create a empty array 
    let formData = []
    
    //check if any data exist or not
    //if yes get the local storage data and store it in a veriable
    if (localStorage.getItem("formData")) {
        formData = JSON.parse(localStorage.getItem("formData"));
    }
    formData.push(value)
    /*after submitting we have to save our data in local storage*/
    localStorage.setItem("formData", JSON.stringify(formData))

})
