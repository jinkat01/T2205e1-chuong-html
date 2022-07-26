var greeting = 'Howdy';
var name = 'Molly';
var message = ',Please check your order';

var welcome = greeting+name+message;

var sign = 'Montague House';
var titles = sign.length;
var subTotal = title*5;
var shipping = 7;
var grandTotal=subTotal + shipping;

var el=document.getElementById('greeting');

el.textContent= welcome;

var elSign= document.getElementById('userSign');
elSign.textContent= sign;

var elTitle= document.getElementById('titles');
elTitle.textContent=titles;
 var elSubtotal=document.getElementById('subtotal');
 elSubtotal.textContent= '$'+ subTotal;

 var elShipping= document.getElementById('shipping');
 elShipping.textContent=shipping;
 var elGrandTotal=document.getElementById('grandTotal');
 elGrandTotal.textContent= '$'+grandTotal;
