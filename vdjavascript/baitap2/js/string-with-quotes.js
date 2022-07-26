//tao bien
var title;
var message;

//gan grri vao bien

title="Molly's Special Offers";
message= '<a href=\"sale.html\">>25% off!</a>';

//lay thuoc tinh id title
var elTitle= document.getElementById('title');
// thay doi thuoc tinh
elTitle.textContent=title;

var elNote = document.getElementById('note');

elNote.innerHTML=message;
