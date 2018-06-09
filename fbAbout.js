var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Basicinfo = /** @class */ (function () {
    function Basicinfo(name, DOB, city, email) {
        var _this = this;
        this.name = name;
        this.DOB = DOB;
        this.city = city;
        this.email = email;
        this.locations = [];
        this.work = [];
        this.Basic = [];
        this.methAddIn = function () {
            _this.Basic.concat(_this.name, _this.DOB, _this.city, _this.email);
            console.log("Basic info Uploaded");
        };
        this.methUploadDisplay = function () {
            var pic;
            console.log("This method uploads Display Pic");
            return pic;
        };
        this.methEdit = function () {
            console.log("Record Edited");
        };
        this.methDelete = function () {
            console.log("Record Deleted");
        };
        this.methDisplay = function () {
            console.log("This method Displays data from Json Array of exisiting object");
        };
        this.methSave = function () {
            console.log("Record Saved");
        };
        this.methGetCoordinates = function () {
            // This method gets coordinates from GPS to push it into location array
            console.log("Location Recieved from GPS for " + _this.city);
            return _this.city;
        };
        this.methGetLocation = function () {
            _this.methGetCoordinates();
            console.log("Recieves the cooridnates and verifies the current location");
            return _this.city;
        };
        this.methCalcAge = function (date) {
            var Age;
            console.log("calculates and returns age " + _this.DOB);
            return Age;
        };
        this.name = name;
        this.DOB = DOB;
        this.city = city;
        this.email = email;
    }
    return Basicinfo;
}());
var Work = /** @class */ (function (_super) {
    __extends(Work, _super);
    function Work(companyName, since, position, city) {
        var _this = _super.call(this, 'name', 'dob', 'city', 'email') || this;
        _this.companyName = companyName;
        _this.since = since;
        _this.position = position;
        _this.city = city;
        _this.methGetExperience = function () {
            _this.exp = _this.methCalcAge(_this.since); //Date is passed to calculate experience in an org
            return _this.exp;
        };
        _this.methGetCompanyLocation = function () {
            _this.methGetLocation();
            console.log('Company locationis ' + _this.city);
        };
        _this.companyName = companyName;
        _this.since = since;
        _this.position = position;
        _this.city = city;
        _this.methSave();
        return _this;
    } //
    return Work;
}(Basicinfo));
var Places = /** @class */ (function (_super) {
    __extends(Places, _super);
    function Places(city) {
        var _this = _super.call(this, 'name', 'dob', 'city', 'email') || this;
        _this.city = city;
        _this.locCoordinates = _this.methGetLocation();
        //this variable gets the co-ordinates of the location and adds to the array
        _this.methCheckIn = function () {
            //Function to add location in existing location array 
            console.log("Checkin added successfully" + _this.city);
        };
        _this.city = city;
        return _this;
    } //
    return Places;
}(Basicinfo));
//Like wise we can add classes for Family, LifeEvents,Books,Shows,Movies which will add data to Json and display it
var myProfile = new Basicinfo('Anurag', '03/03/1997', 'mumbai', 'manurag@gmail.com');
myProfile.methCalcAge('03/03/1997');
myProfile.methUploadDisplay();
var myWorkex = new Work('capgemini', '09092015', 'Software Engineer', 'Pune');
myWorkex.methGetCompanyLocation();
var myPlaces = new Places('Havana');
myPlaces.methCheckIn();
