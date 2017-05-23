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
var AppModuleStage8 = (function () {
    function AppModuleStage8() {
    }
    return AppModuleStage8;
}());
AppModuleStage8 = __decorate([
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
], AppModuleStage8);
exports.AppModuleStage8 = AppModuleStage8;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyxpRUFBK0Q7QUFDL0Qsb0RBQW9FO0FBQ3BFLHdEQUFzRDtBQUN0RCxvREFBa0Q7QUFDbEQsc0VBQW1GO0FBQ25GLHdEQUEyRDtBQTBCM0QsSUFBYSxlQUFlO0lBQTVCO0lBQStCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFBaEMsSUFBZ0M7QUFBbkIsZUFBZTtJQXZCM0IsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiw4QkFBZ0I7WUFDaEIsK0JBQXVCO1NBQzFCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWixvQ0FBZ0I7WUFDaEIsK0JBQXFCO1lBQ3JCLDhCQUFhO1lBQ2IsbUNBQWtCO1NBQ3JCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsMEJBQVc7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxlQUFlLENBQUk7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuaW1wb3J0IHsgSm9rZUNvbXBvbmVudCB9IGZyb20gXCIuL2pva2Uvam9rZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEpva2VTZXJ2aWNlIH0gZnJvbSBcIi4vam9rZS9qb2tlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNJREVEUkFXRVJfRElSRUNUSVZFUyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBKb2tlc0xpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2xpc3QuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFByb2ZpbGVDb21wb25lbnQsXG4gICAgICAgIFNJREVEUkFXRVJfRElSRUNUSVZFUyxcbiAgICAgICAgSm9rZUNvbXBvbmVudCxcbiAgICAgICAgSm9rZXNMaXN0Q29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSm9rZVNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlU3RhZ2U4IHsgfVxuXG5cbiJdfQ==