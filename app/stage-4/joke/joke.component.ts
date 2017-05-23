import { Component } from '@angular/core';
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'joke',
  moduleId: module.id,
  templateUrl: `./joke.component.html`
})
export class JokeComponent {

  public joke: string;
  private fName: string;
  private lName: string;

  constructor(private pageRoute: PageRoute) {
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach((params) => {
        this.fName = params["fName"];
        this.lName = params["lName"];
        this.joke = `this is a ${this.fName} ${this.lName} joke`;
      });
      
  }
}