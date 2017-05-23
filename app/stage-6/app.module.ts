import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { JokeComponent } from "./joke/joke.component";
import { JokeService } from "./joke/joke.service";
import {  SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        SIDEDRAWER_DIRECTIVES,
        AppComponent,
        ProfileComponent,
        JokeComponent
    ],
    providers: [
        JokeService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModuleStage6 { }


