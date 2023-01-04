// Exercise 2 : Work with forms

// 1. Retrieve the form and console.log it.
let form = document.forms[0]
console.log(form)
// 2. Retrieve the inputs by their id and console.log them.
document.querySelectorAll('#fname, #lname').forEach(input => console.log(input))
// 3. Retrieve the inputs by their name attribute and console.log them.
document.querySelectorAll('[name*="name"]').forEach(input => console.log(input))
// 4. When the user submits the form
form.addEventListener('submit', (event) => {
    // use event.preventDefault(), why ?
    event.preventDefault() // Use to prevent the form from being submitted as it is the default behaviour (and the page to be reloaded)
    // get the values of the input tags,
    let fname = form.elements.fname.value
    let lname = form.elements.lname.value
    // make sure that they are not empty
    fname = fname.trim()
    lname = lname.trim()
    if (fname.length && lname.length) {
        let answer = document.querySelector('.usersAnswer')
        // ( empty the answers list, if already populated)
        answer.innerHTML = '';
        // create an li per input value,
        [fname, lname].forEach(input => {
            let li = document.createElement('li')
            li.innerHTML = input
            // then append them to a the <ul class="usersAnswer"></ul>, below the form.
            answer.appendChild(li)
        })
    } else
        alert('Fist name or last name cannot be empty')
})