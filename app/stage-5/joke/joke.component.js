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
            jokeService.get(_this.fName, _this.lName).then(function (joke) {
                _this.joke = joke.text;
            }, function (error) {
                alert(error);
            });
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
    __metadata("design:paramtypes", [joke_service_1.JokeService,
        router_1.PageRoute])
], JokeComponent);
exports.JokeComponent = JokeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9rZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqb2tlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLCtDQUFtRDtBQUVuRCxzREFBd0Q7QUFDeEQsdUNBQXFDO0FBUXJDLElBQWEsYUFBYTtJQU14Qix1QkFDVSxXQUF3QixFQUN4QixTQUFvQjtRQUY5QixpQkFrQkM7UUFqQlMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7YUFDMUIsU0FBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQzthQUNsRCxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2QsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsV0FBVyxDQUFDLEdBQUcsQ0FDYixLQUFJLENBQUMsS0FBSyxFQUNWLEtBQUksQ0FBQyxLQUFLLENBQ1gsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFVO2dCQUNoQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEIsQ0FBQyxFQUFFLFVBQUMsS0FBSztnQkFDUCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtLQUNyQyxDQUFDO3FDQVF1QiwwQkFBVztRQUNiLGtCQUFTO0dBUm5CLGFBQWEsQ0F5QnpCO0FBekJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKb2tlU2VydmljZSwgSm9rZSB9IGZyb20gXCIuL2pva2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqb2tlJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IGAuL2pva2UuY29tcG9uZW50Lmh0bWxgXG59KVxuZXhwb3J0IGNsYXNzIEpva2VDb21wb25lbnQge1xuXG4gIHB1YmxpYyBqb2tlOiBzdHJpbmc7XG4gIHByaXZhdGUgZk5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBsTmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgam9rZVNlcnZpY2U6IEpva2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUpIHtcbiAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG4gICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgIHRoaXMuZk5hbWUgPSBwYXJhbXNbXCJmTmFtZVwiXTtcbiAgICAgICAgdGhpcy5sTmFtZSA9IHBhcmFtc1tcImxOYW1lXCJdO1xuICAgICAgICBqb2tlU2VydmljZS5nZXQoXG4gICAgICAgICAgdGhpcy5mTmFtZSxcbiAgICAgICAgICB0aGlzLmxOYW1lXG4gICAgICAgICkudGhlbigoam9rZTogSm9rZSkgPT4ge1xuICAgICAgICAgIHRoaXMuam9rZSA9IGpva2UudGV4dDtcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgfVxufSJdfQ==