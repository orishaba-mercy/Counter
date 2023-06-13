// Reference to incerement button
const addBtn = document.getElementById("increament")

// Reference to decrement button
const deleteBtn = document.getElementById("decreament")

// Reference to restart button
const restartBtn = document.getElementById("restart")

// Reference to increment node
const incrementNode = document.getElementById("number")

// Reference to dynamic input
const input = document.getElementById("incrementValue")

// Increment reference
let value = 0


// Event Listener for Adding by 1

addBtn.addEventListener("click", () => {

    value= value + Number(input.value)

    incrementNode.innerHTML = value



})

// Event Listener for removing by 1

deleteBtn.addEventListener("click", () => {

    value= value - Number(input.value)

    incrementNode.innerHTML = value



})

// Event Listener for removing by 1

restartBtn.addEventListener("click", () => {

    value= 0

    incrementNode.innerHTML = value



})