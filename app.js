//* make it a fixed header
const header = document.querySelector('header')


window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 70){
        header.classList.add('show-link');
    } else { 
        header.classList.remove('show-link')
    }

})


//* link sections 
const links = document.querySelectorAll(".link");

links.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("id").slice(1);
        const element = document.getElementById(id);

        const headerHeight = header.getBoundingClientRect().height; 
        const showlink = header.classList.contains('show-link');
        let position = element.offsetTop;

        if (!showlink){
            position = position-headerHeight;
        }

        position = position - 100;

        window.scrollTo({
            left:0, 
            top: position,
        });

    })
})


const topLink = document.querySelector('.top-link');
console.log(topLink);

window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 70){
        topLink.classList.add("scroll-link")
    } else { 
        topLink.classList.remove("scroll-link")
    }

})