// Menu Show 
const showmenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showmenu('nav-toogle','nav-menu');


// Active and Remove menu
const navlink = document.querySelectorAll('.nav_link');

function linkAction(){
    // Active Link 
    navlink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    //Remove Menu mobile 
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navlink.forEach(n => n.addEventListener('click',linkAction));