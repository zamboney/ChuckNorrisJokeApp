import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";

@Component({
    selector: 'profile',
    moduleId: module.id,
    templateUrl: `./profile.component.html`
})
export class ProfileComponent  implements OnInit{
constructor(private page: Page) {}
  ngOnInit() {
    this.page.className = "page";
  }
}