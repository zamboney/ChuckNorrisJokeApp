"use strict";
var core_1 = require("@angular/core");
var joke_service_1 = require("./joke.service");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var JokeComponent = (function () {
    function JokeComponent(jokeService, pageRoute) {
        var _this = this;
        this.jokeService = jokeService;
        this.pageRoute = pageRoute;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            _this.fName = params["fName"];
            _this.lName = params["lName"];
            _this.onRefresh();
        });
    }
    JokeComponent.prototype.onRefresh = function () {
        var _this = this;
        this.jokeService.get(this.fName, this.lName).then(function (joke) {
            _this.joke = joke.text;
        }, function (error) {
            alert(error);
        });
    };
    return JokeComponent;
}());
JokeComponent = __decorate([
    core_1.Component({
        selector: 'joke',
        moduleId: module.id,
        templateUrl: "./joke.component.html"
    }),
    __metadata("design:paramtypes", [joke_service_1.JokeService,
        router_1.PageRoute])
], JokeComponent);
exports.JokeComponent = JokeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9rZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqb2tlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLCtDQUFtRDtBQUVuRCxzREFBd0Q7QUFDeEQsdUNBQXFDO0FBUXJDLElBQWEsYUFBYTtJQU14Qix1QkFDVSxXQUF3QixFQUN4QixTQUFvQjtRQUY5QixpQkFXQztRQVZTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSxpQ0FBUyxHQUFoQjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLEtBQUssQ0FDWCxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVU7WUFDaEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDUCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3QlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7S0FDckMsQ0FBQztxQ0FRdUIsMEJBQVc7UUFDYixrQkFBUztHQVJuQixhQUFhLENBNkJ6QjtBQTdCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSm9rZVNlcnZpY2UsIEpva2UgfSBmcm9tIFwiLi9qb2tlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnam9rZScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBgLi9qb2tlLmNvbXBvbmVudC5odG1sYFxufSlcbmV4cG9ydCBjbGFzcyBKb2tlQ29tcG9uZW50IHtcblxuICBwdWJsaWMgam9rZTogc3RyaW5nO1xuICBwcml2YXRlIGZOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgbE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGpva2VTZXJ2aWNlOiBKb2tlU2VydmljZSxcbiAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlKSB7XG4gICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxuICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICB0aGlzLmZOYW1lID0gcGFyYW1zW1wiZk5hbWVcIl07XG4gICAgICAgIHRoaXMubE5hbWUgPSBwYXJhbXNbXCJsTmFtZVwiXTtcbiAgICAgICAgdGhpcy5vblJlZnJlc2goKTtcbiAgICAgIH0pO1xuXG4gIH1cblxuICBwdWJsaWMgb25SZWZyZXNoKCkge1xuICAgIHRoaXMuam9rZVNlcnZpY2UuZ2V0KFxuICAgICAgdGhpcy5mTmFtZSxcbiAgICAgIHRoaXMubE5hbWVcbiAgICApLnRoZW4oKGpva2U6IEpva2UpID0+IHtcbiAgICAgIHRoaXMuam9rZSA9IGpva2UudGV4dDtcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICB9KVxuICB9XG59Il19