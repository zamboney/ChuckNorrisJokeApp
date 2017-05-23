import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { JokeComponent } from "./joke/joke.component";

const routes: Routes = [
    { path: "", redirectTo: "/profile", pathMatch: "full" },
    { path: "profile", component: ProfileComponent },
    { path: "joke", component: JokeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
