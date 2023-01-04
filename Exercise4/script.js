"use strict"

// Exercice 4 : Volume of a sphere

// 1. Write a JavaScript program to calculate the volume of a sphere.
// V = 4/3 π r³
document.querySelector('#MyForm').addEventListener('submit', (e) => {
    e.preventDefault()
    let r = document.querySelector('#radius').value
    if (isNaN(r)) {
        alert('Radius must be a number')
        return
    }
    r = Number(r)
    let v = 4 / 3 * Math.PI * Math.pow(r, 3)
    document.querySelector('#volume').value = v.toFixed(3)
})