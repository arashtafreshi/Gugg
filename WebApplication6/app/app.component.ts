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
    customName = 'aram';
    
    fare: number = 0;

    initMeteredFare() {
        this.meteredFare.milesBelow6mph = 0;
        this.meteredFare.minutesAbove6mph = 0;
        this.meteredFare.startDate = new Date(Date.now());
        this.meteredFare.nyTaxPerRide = NyTaxPerRide;
        this.meteredFare.entry = Entry;
        this.meteredFare.peakSurcharge = PeakSurcharge;
    }

    constructor() {
        this.initMeteredFare();
    }
    
    getFare(): number {
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