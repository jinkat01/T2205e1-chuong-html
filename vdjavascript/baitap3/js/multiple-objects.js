function Hotel(name,rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function (){
        return this.rooms - this.booked;
    };
}

var details1 = quayhotel.name + 'rooms: ';
details1 += quayhotel.checkAvailability();

var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + 'rooms: ';
details2 += parkHotel.checkAvailability();

var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;
