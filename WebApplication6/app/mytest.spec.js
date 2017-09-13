"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
let comp;
let fixture;
let de;
let el;
beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
        declarations: [app_component_1.AppComponent],
    });
    fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
    comp = fixture.componentInstance; // BannerComponent test instance
    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(platform_browser_1.By.css('h2'));
    el = de.nativeElement;
});
//==============================================================================
describe('My tests', () => {
    it('true is true', () => expect(true).toBe(true));
    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain('fare');
    });
    it('should display a different test title', () => {
        comp.fare = 29;
        fixture.detectChanges();
        expect(el.textContent).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=mytest.spec.js.map