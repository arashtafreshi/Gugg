import { Component, Input } from '@angular/core';

import { MeteredFare } from './metered-fare';


const NyTaxPerRide: number = 0.5;
const PeakSurcharge: number = 1;
const Entry: number = 3;

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    meteredFare: MeteredFare = new MeteredFare;

    name = 'Angular';
    
    //passengers: number = 0;
    //date: Date = new Date(Date.now());
    //hours:number[] = [];
    //minutes: number[] = [];
    //minute: number = 0;
    //hour: number = 0;
    //am_pm = 'AM';

    //dateend: Date = new Date(Date.now());
    //hoursend: number[] = [];
    //minutesend: number[] = [];
    //am_pmend = 'AM';
    //minuteend: number = 0;
    //hourend: number = 0;

    //above6mph: number = 0;
    //below6mph: number = 0;

    //duration: number = 1;
    

    fare: number = 0;

    initMeteredFare() {
        this.meteredFare.milesBelow6mph = 0;
        this.meteredFare.minutesAbove6mph = 0;
        this.meteredFare.passengers = 0;
        this.meteredFare.startDate = new Date(Date.now());
        this.meteredFare.nyTaxPerRide = NyTaxPerRide;
        this.meteredFare.entry = Entry;
        this.meteredFare.peakSurcharge = PeakSurcharge;
    }

    constructor() {
        this.initMeteredFare();

        //for (var i = 1; i <= 59; i++) {
        //    this.minutes.push(i);
        //    this.minutesend.push(i);
        //}
        //for (var i = 1; i <= 12; i++) {
        //    this.hours.push(i);
        //    this.hoursend.push(i);
        //}
    }

    

    getFare(): number {
        this.fare = 0;
        //this.duration = 1;
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

        return this.fare;
    }

    //getDuration(): number {
    //    if (this.date != null && this.dateend != null) {
    //        var e = new Date(this.dateend).getTime();
    //        var s = new Date(this.date).getTime();
    //        return (e-s)/ (1000 * 60);
    //    } else {
    //        return -1;
    //    }
    //}

    isPeak(): boolean {
        if (this.isWeekday()) {
            var selectedDate = new Date(this.meteredFare.startDate);
            return (15 < selectedDate.getHours() && selectedDate.getHours() < 20) ? true : false;
        } else {
            return false;
        }
    }

    isWeekday(): boolean {
        var s = new Date(this.meteredFare.startDate);
        return (s.getDay()>0 && s.getDay() < 6) ? true : false;
    }
}