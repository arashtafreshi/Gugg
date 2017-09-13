import { Directive, ElementRef, Renderer, Input } from '@angular/core';
import { NG_VALIDATORS, FormControl, AbstractControl, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';

export function highlightValidator(c: AbstractControl, forbiddenName: string): ValidatorFn {
    var myval = c.value;
    console.log('func: ' + myval);
    //return { "highlightme": { value: (String(myval) == forbiddenName) } };

    return (control: AbstractControl): { [key: string]: any } => {
        const forbidden = String(myval) == forbiddenName;
        return forbidden ? { 'highlightme': { value: c.value } } : null;
    };
}


@Directive({
    selector: "[highlightme]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: HighlightDirective,
            multi: true
        }
    ]
})
export class HighlightDirective implements Validator{
    @Input() forbiddenName: string;
    
    validate(control: AbstractControl): { [key: string]: any } {
        console.log(this.forbiddenName);
        return (this.forbiddenName != null) ? highlightValidator(control, this.forbiddenName) : null;
    }
    
}