const totalPerson = document.getElementById("people-input")
const totalTime = document.getElementById("time-input")

document.addEventListener("click", (e) => {
    if(e.target.id == "start-btn") {
        handleStart()
    }
})

function handleStart() {
    alert('This is handleStart')
    console.log("Total Person: ", totalPerson.value)
    console.log("Total Time: ", totalTime.value)

    document.getElementById("startSec").classList.add('hidden')
    document.getElementById("nextPersonSec").classList.remove('hidden')
}