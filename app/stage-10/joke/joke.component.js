"use strict";
var core_1 = require("@angular/core");
var joke_service_1 = require("./joke.service");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var nativescript_social_share_1 = require("nativescript-social-share");
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
    JokeComponent.prototype.onShare = function () {
        nativescript_social_share_1.shareText(this.joke);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9rZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqb2tlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLCtDQUFtRDtBQUVuRCxzREFBd0Q7QUFDeEQsdUNBQXFDO0FBQ3JDLHVFQUFzRDtBQVF0RCxJQUFhLGFBQWE7SUFReEIsdUJBQ1UsV0FBd0IsRUFDeEIsU0FBb0I7UUFGOUIsaUJBV0M7UUFWUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUMxQixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDZCxLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBZE0sK0JBQU8sR0FBZDtRQUNFLHFDQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFjTSxpQ0FBUyxHQUFoQjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLEtBQUssQ0FDWCxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVU7WUFDaEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDUCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUEvQlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7S0FDckMsQ0FBQztxQ0FVdUIsMEJBQVc7UUFDYixrQkFBUztHQVZuQixhQUFhLENBK0J6QjtBQS9CWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSm9rZVNlcnZpY2UsIEpva2UgfSBmcm9tIFwiLi9qb2tlLnNlcnZpY2VcIjtcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5pbXBvcnQgeyBzaGFyZVRleHQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pva2UnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogYC4vam9rZS5jb21wb25lbnQuaHRtbGBcbn0pXG5leHBvcnQgY2xhc3MgSm9rZUNvbXBvbmVudCB7XG5cbiAgcHVibGljIGpva2U6IHN0cmluZztcbiAgcHJpdmF0ZSBmTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGxOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBvblNoYXJlKCl7XG4gICAgc2hhcmVUZXh0KHRoaXMuam9rZSk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBqb2tlU2VydmljZTogSm9rZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkge1xuICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgdGhpcy5mTmFtZSA9IHBhcmFtc1tcImZOYW1lXCJdO1xuICAgICAgICB0aGlzLmxOYW1lID0gcGFyYW1zW1wibE5hbWVcIl07XG4gICAgICAgIHRoaXMub25SZWZyZXNoKCk7XG4gICAgICB9KTtcblxuICB9XG5cbiAgcHVibGljIG9uUmVmcmVzaCgpIHtcbiAgICB0aGlzLmpva2VTZXJ2aWNlLmdldChcbiAgICAgIHRoaXMuZk5hbWUsXG4gICAgICB0aGlzLmxOYW1lXG4gICAgKS50aGVuKChqb2tlOiBKb2tlKSA9PiB7XG4gICAgICB0aGlzLmpva2UgPSBqb2tlLnRleHQ7XG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICBhbGVydChlcnJvcik7XG4gICAgfSlcbiAgfVxufSJdfQ==