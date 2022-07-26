//tao mang va gan gia tri
var colors = ['white', 'black','custom'];

//update gia tri thu 3 trong mang

colors[2]='beige';

//lay gia tri thuoc tinh bang ID
var el=document.getElementById('colors');

//thay doi thuoc tinh tvoi gia tri thu 3 cua mang
el.textContent=colors[2];