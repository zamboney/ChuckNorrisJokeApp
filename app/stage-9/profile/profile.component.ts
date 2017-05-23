import { Component } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'profile',
    moduleId: module.id,
    templateUrl: `./profile.component.html`
})
export class ProfileComponent {
    public fName: string;
    public lName: string;
    constructor(private routerExtensions: RouterExtensions) {

    }
    public submit() {
        this.routerExtensions.navigate([
            "/joke",
            {
                fName: this.fName || 'Chuck',
                lName: this.lName || 'Norris'
            }],{
            transition : {
                /**
                 * http://docs.nativescript.org/api-reference/interfaces/_ui_frame_.navigationtransition.html#name
                 */
                // name: 'flip'
            }
        });
    }
}