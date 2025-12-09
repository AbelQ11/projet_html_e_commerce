const body = document.querySelector("body")
const button = document.getElementById("darkActivation")

button.addEventListener('click', () => {
    if (body.classList.contains("light")) {
        body.classList.add("dark")
        body.classList.remove("light")
        localStorage.setItem("display", "dark")
    }
    else {
        body.classList.add("light")
        body.classList.remove("dark")
        localStorage.setItem("display", "light")
    }
});
const display = localStorage.getItem("display")
if (display === "dark"){
    document.querySelector("body").classList.add("dark")
}else{
    document.querySelector("body").classList.remove("dark")
}