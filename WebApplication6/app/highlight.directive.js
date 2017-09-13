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
const forms_1 = require("@angular/forms");
function highlightValidator(c, forbiddenName) {
    var myval = c.value;
    console.log('func: ' + myval);
    //return { "highlightme": { value: (String(myval) == forbiddenName) } };
    return (control) => {
        const forbidden = String(myval) == forbiddenName;
        return forbidden ? { 'highlightme': { value: c.value } } : null;
    };
}
exports.highlightValidator = highlightValidator;
let HighlightDirective = HighlightDirective_1 = class HighlightDirective {
    validate(control) {
        console.log(this.forbiddenName);
        return (this.forbiddenName != null) ? highlightValidator(control, this.forbiddenName) : null;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HighlightDirective.prototype, "forbiddenName", void 0);
HighlightDirective = HighlightDirective_1 = __decorate([
    core_1.Directive({
        selector: "[highlightme]",
        providers: [
            {
                provide: forms_1.NG_VALIDATORS,
                useExisting: HighlightDirective_1,
                multi: true
            }
        ]
    })
], HighlightDirective);
exports.HighlightDirective = HighlightDirective;
var HighlightDirective_1;
//# sourceMappingURL=highlight.directive.js.map