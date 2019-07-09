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

//everytime the mouse leaves the nav anchor tag, the color will be set to blah blah blah.
const navAgain=document.querySelectorAll(`nav a`);
navAgain[0].addEventListener(`mouseout`, e => {navAgain[0].style.color=`green`});
navAgain[1].addEventListener(`mouseout`, e => {navAgain[1].style.color=`orange`});
navAgain[2].addEventListener(`mouseout`, e => {navAgain[2].style.color=`green`});
navAgain[3].addEventListener(`mouseout`, e => {navAgain[3].style.color=`orange`});

//everytime you open the webpage, the eventlistener should load a second window containing whatever u assigned the window to contain.
window.addEventListener(`load`, e=>{alert(`PLEASE KEEP WHATEVER YOU SEE CONFIDENTIAL!`)});  

//everytime you try to copy anything off of the page, eventlistener will activate a new window which tells u whatever u wanted it to.
const copyStuff=document.querySelector(`body`);
copyStuff.addEventListener(`copy`, e=>{alert('MAKE YOUR OWN!...THI IS MINES!')});

//everytime we scroll, eventlistener will count number of times I was scrolled.
window.addEventListener(`scroll`, e =>{console.log(` I WAS SCROLLED!`)});

//everytime u press a key on the keyborad, eventlistener will track and open an alert window...
const keyPress=document.querySelector(`body`);
keyPress.addEventListener(`keypress`, e=> {alert("ARE YOU HAVING FUN?")});

const btnC = document.querySelector(`.destination .btn`);
btnC.addEventListener('click', e => {
 console.log("I was freaking clicked, once I think....headscratch!!!")
});
