window.addEventListener("scroll",func =()=> {
    const nav = document.querySelector(".barraNav");
    nav.classList.toggle("bajar", window.scrollY >200)
})