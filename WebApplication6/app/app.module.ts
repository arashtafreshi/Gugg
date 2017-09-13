import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, AbstractControl } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive'
import { } from 'jasmine'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HighlightDirective
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }