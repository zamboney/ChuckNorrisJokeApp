import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    moduleId: module.id,
    templateUrl: `./profile.component.html`
})
export class ProfileComponent {
    public fName : string;
    public lName : string;
    constructor() {

    }
    public submit(){
        alert(this.fName + ', ' +this.lName);
    }
}