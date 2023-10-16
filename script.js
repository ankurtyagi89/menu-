const menu = document.querySelectorAll('.hide');
const button = document.querySelector('button');

button.addEventListener("click", (e) => {
 menu.forEach(element => {
     if(element.style.display != 'none')
         element.style.display = 'none';
    else {
        element.style.display = 'block';
    }
    });
})