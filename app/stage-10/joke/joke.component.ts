import { Component } from '@angular/core';
import { JokeService, Joke } from "./joke.service";
import { getString } from "application-settings";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
import { shareText } from "nativescript-social-share";


@Component({
  selector: 'joke',
  moduleId: module.id,
  templateUrl: `./joke.component.html`
})
export class JokeComponent {

  public joke: string;
  private fName: string;
  private lName: string;
  public onShare(){
    shareText(this.joke);
  }
  constructor(
    private jokeService: JokeService,
    private pageRoute: PageRoute) {
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach((params) => {
        this.fName = params["fName"];
        this.lName = params["lName"];
        this.onRefresh();
      });

  }

  public onRefresh() {
    this.jokeService.get(
      this.fName,
      this.lName
    ).then((joke: Joke) => {
      this.joke = joke.text;
    }, (error) => {
      alert(error);
    })
  }
}