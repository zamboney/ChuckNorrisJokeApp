"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var profile_component_1 = require("./profile/profile.component");
var forms_1 = require("nativescript-angular/forms");
var joke_component_1 = require("./joke/joke.component");
var joke_service_1 = require("./joke/joke.service");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var list_component_1 = require("./list/list.component");
var AppModuleStage10 = (function () {
    function AppModuleStage10() {
    }
    return AppModuleStage10;
}());
AppModuleStage10 = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            forms_1.NativeScriptFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            profile_component_1.ProfileComponent,
            angular_1.SIDEDRAWER_DIRECTIVES,
            joke_component_1.JokeComponent,
            list_component_1.JokesListComponent
        ],
        providers: [
            joke_service_1.JokeService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModuleStage10);
exports.AppModuleStage10 = AppModuleStage10;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyxpRUFBK0Q7QUFDL0Qsb0RBQW9FO0FBQ3BFLHdEQUFzRDtBQUN0RCxvREFBa0Q7QUFDbEQsc0VBQW1GO0FBQ25GLHdEQUEyRDtBQTBCM0QsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUF2QjVCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLCtCQUF1QjtTQUMxQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osb0NBQWdCO1lBQ2hCLCtCQUFxQjtZQUNyQiw4QkFBYTtZQUNiLG1DQUFrQjtTQUNyQjtRQUNELFNBQVMsRUFBRTtZQUNQLDBCQUFXO1NBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcbmltcG9ydCB7IEpva2VDb21wb25lbnQgfSBmcm9tIFwiLi9qb2tlL2pva2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBKb2tlU2VydmljZSB9IGZyb20gXCIuL2pva2Uvam9rZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTSURFRFJBV0VSX0RJUkVDVElWRVMgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgSm9rZXNMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9saXN0LmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBQcm9maWxlQ29tcG9uZW50LFxuICAgICAgICBTSURFRFJBV0VSX0RJUkVDVElWRVMsXG4gICAgICAgIEpva2VDb21wb25lbnQsXG4gICAgICAgIEpva2VzTGlzdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEpva2VTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZVN0YWdlMTAgeyB9XG5cblxuIl19