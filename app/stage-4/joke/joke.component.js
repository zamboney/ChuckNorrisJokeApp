"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var JokeComponent = (function () {
    function JokeComponent(pageRoute) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            _this.fName = params["fName"];
            _this.lName = params["lName"];
            _this.joke = "this is a " + _this.fName + " " + _this.lName + " joke";
        });
    }
    return JokeComponent;
}());
JokeComponent = __decorate([
    core_1.Component({
        selector: 'joke',
        moduleId: module.id,
        templateUrl: "./joke.component.html"
    }),
    __metadata("design:paramtypes", [router_1.PageRoute])
], JokeComponent);
exports.JokeComponent = JokeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9rZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqb2tlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLHNEQUF3RDtBQUN4RCx1Q0FBcUM7QUFPckMsSUFBYSxhQUFhO0lBTXhCLHVCQUFvQixTQUFvQjtRQUF4QyxpQkFTQztRQVRtQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUMxQixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDZCxLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsSUFBSSxHQUFHLGVBQWEsS0FBSSxDQUFDLEtBQUssU0FBSSxLQUFJLENBQUMsS0FBSyxVQUFPLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO0tBQ3JDLENBQUM7cUNBTytCLGtCQUFTO0dBTjdCLGFBQWEsQ0FnQnpCO0FBaEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnam9rZScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBgLi9qb2tlLmNvbXBvbmVudC5odG1sYFxufSlcbmV4cG9ydCBjbGFzcyBKb2tlQ29tcG9uZW50IHtcblxuICBwdWJsaWMgam9rZTogc3RyaW5nO1xuICBwcml2YXRlIGZOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgbE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlKSB7XG4gICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxuICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICB0aGlzLmZOYW1lID0gcGFyYW1zW1wiZk5hbWVcIl07XG4gICAgICAgIHRoaXMubE5hbWUgPSBwYXJhbXNbXCJsTmFtZVwiXTtcbiAgICAgICAgdGhpcy5qb2tlID0gYHRoaXMgaXMgYSAke3RoaXMuZk5hbWV9ICR7dGhpcy5sTmFtZX0gam9rZWA7XG4gICAgICB9KTtcbiAgICAgIFxuICB9XG59Il19