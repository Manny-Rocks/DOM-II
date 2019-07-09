//everytime the mouse leaves the  navigation header portion of the page, the event will be fired/counted!
const mainDoc=document.querySelector('.main-navigation');
mainDoc.addEventListener('mouseleave', e => { 
console.log(`HAHAAA UR RIDING THE FUN BUS!`)
})
//everytime we double click the heading, the eventlistener should make the font family change to whatever we assigned it to.
const changeHeading=document.querySelector(`.logo-heading`);
changeHeading.addEventListener(`dblclick`, e=>{changeHeading.style.fontFamily=`Amatic SC`, `cursive`});

//everytime the mouse moves over the anchor tag, the event listener will activate the assigned color
const navItmes=document.querySelectorAll(`nav a`);
navItmes[0].addEventListener(`mouseover`, e => {navItmes[0].style.color=`red`});
navItmes[1].addEventListener(`mouseover`, e => {navItmes[1].style.color=`blue`});
navItmes[2].addEventListener(`mouseover`, e => {navItmes[2].style.color=`red`});
navItmes[3].addEventListener(`mouseover`, e => {navItmes[3].style.color=`blue`});

