class MyDate {
    constructor(year, month = 0, date = 1, hours = 0, minutes = 0, seconds = 0,ms = 0){
this._year = year;
this._month = month;
this._date = date;
this._hours = hours;
this._minutes = minutes;
this._seconds = seconds;
this._ms = ms;
this._monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//this._mounthDay = [31,28,31,30,31,30,31,31,30,31,30,31];
if(!year){
    this.year=2023;
};
if(!month && typeof year ==="number"){
    this.year = 1970;
    this.seconds = year;
}
    };
    // set date (value) {
    //     while( value > this._mounthDay[this._month]){
    //         value -= this._monthDays[this._month];
    //         this._month++
    //     }
    //     return this._date = value
    // }
    get monthName () {
        return this._monthNames[this._month]
    };
set year (value) {
    this._year = value;
};
get year  () {
    return this._year;
};
set month (value) {
    this._year += parseInt(value /12);
    this._month = value % 12;
};
get month () {
    return this._month;
};
set date (value) {
    this._month += parseInt( value / 30 );
    this._date = value % 30;
};
get date () {
    return this._date;
};
set hours (value) {
    this._date += parseInt( value / 24 );
    this._hours = value % 24;
};
get hours () {
    return this._hours;
};
set minutes (value) {
    this._hours += parseInt( value / 60 );
    this._minutes = value % 60;
};
get minutes () {
    return this._minutes;
};
set seconds (value) {
    this._minutes += parseInt( value / 60);
    this._seconds = value % 60;
};
get seconds () {
    return this._seconds;
};
set ms (value) {
    this._seconds += parseInt( value / 1000);
    this._ms = value % 1000;
};
get ms () {
    return this._ms
};
toString = function () {
    return `${this._year} / ${this.monthName} / ${this._date} / ${this._hours} : ${this._minutes} : ${this._seconds} : ${this._ms}`
};

};

let data =  new MyDate(1984,08,20,14,40,55,10);
data.month = 14;
console.log(data.toString());