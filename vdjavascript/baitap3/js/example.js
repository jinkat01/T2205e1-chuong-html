(function () {
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function () {
            var offerRate = this.roomRate *((100- this.discount)/100);
            return offerRate;
        }
    };
    var hotelName, roomRate, specialRate;
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$'+ hotel.offerPrice();

var expiryMsg;
var today;
var elEnds;

function offerExpires(today) {
    var weekFromtoday,day,date,month,year,dayNames,monthNames;

    weekFromtoday = new Date(today.getTime()+7*24*60*60*1000);

    daynames = ['Sunday','Monday','Tuesday','Wenesday','Thursday','Friday','Saturday'];
    monthNames = ['January','February','March','April','May','June','July','August','September','Octorber','November','December'];

    day = dayNames[weekFromtoday.getDay()];
    date = weekFromtoday.getDate();
    month = monthNames[weekFromtoday.getMonth()];
    year    = weekFromtoday.getFullYear();

    expiryMsg = 'Offer Expires Next';
    expiryMsg += day +'<br/>('+date + '' +month +''+year+')';
    return expiryMsg
}
today= new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);
}());


)