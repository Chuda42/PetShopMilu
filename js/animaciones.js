window.addEventListener("scroll",func =()=> {
    const nav = document.querySelector(".barraNav");
    if (!!nav)
        nav.classList.toggle("bajar", window.scrollY >300)
})