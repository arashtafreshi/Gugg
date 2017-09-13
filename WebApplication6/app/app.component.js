"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const metered_fare_1 = require("./metered-fare");
const NyTaxPerRide = 0.5;
const PeakSurcharge = 1;
const Entry = 3;
let AppComponent = class AppComponent {
    constructor() {
        this.meteredFare = new metered_fare_1.MeteredFare;
        this.name = 'Angular';
        this.customName = 'aram';
        this.fare = 0;
        this.initMeteredFare();
    }
    initMeteredFare() {
        this.meteredFare.milesBelow6mph = 0;
        this.meteredFare.minutesAbove6mph = 0;
        this.meteredFare.startDate = new Date(Date.now());
        this.meteredFare.nyTaxPerRide = NyTaxPerRide;
        this.meteredFare.entry = Entry;
        this.meteredFare.peakSurcharge = PeakSurcharge;
    }
    getFare() {
        this.fare = 0;
        //upon entry
        this.fare += this.meteredFare.entry;
        //NY tax
        this.fare += this.meteredFare.nyTaxPerRide;
        //above 6mph
        this.fare += (0.35 * this.meteredFare.minutesAbove6mph);
        //beloww 6mph
        this.fare += (0.35 * this.meteredFare.milesBelow6mph);
        //Peak
        this.fare = this.isPeak() ? (this.fare + this.meteredFare.peakSurcharge) : this.fare;
        // #passengers
        return this.fare;
    }
    isPeak() {
        if (this.isWeekday()) {
            var selectedDate = new Date(this.meteredFare.startDate);
            return (15 < selectedDate.getHours() && selectedDate.getHours() < 20) ? true : false;
        }
        else {
            return false;
        }
    }
    isWeekday() {
        var s = new Date(this.meteredFare.startDate);
        return (s.getDay() > 0 && s.getDay() < 6) ? true : false;
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map