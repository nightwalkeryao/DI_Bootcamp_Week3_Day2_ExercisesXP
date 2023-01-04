"use strict"

// Exercise 5 : Event Listeners

// 1. Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
let btn = document.querySelector('button')

btn.addEventListener('click', () => {
    btn.style.transform = 'translate(2px, 4px)'
})

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'rgb(135, 33, 33)'
    btn.style.color = 'black'
    btn.style.fontSize = '30pt'
})

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'brown'
    btn.style.color = 'azure'
    btn.style.fontSize = '16pt'
})

btn.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'black'
    btn.style.backgroundColor = 'white'
    btn.style.color = 'black'
    btn.style.transform = 'translate(0px, 240px)'
})