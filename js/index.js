//everytime the mouse leaves the  navigation header portion of the page, the event will be fired/counted!
const mainDoc=document.querySelector('.main-navigation');
mainDoc.addEventListener('mouseleave', e => { 
console.log(`HAHAAA UR RIDING THE FUN BUS!`)
})
//everytime we double click the heading, the eventlistener should make the font family change to whatever we assigned it to.
const changeHeading=document.querySelector(`.logo-heading`);
changeHeading.addEventListener(`dblclick`, e=>{changeHeading.style.fontFamily=`Amatic SC`, `cursive`});


