"use strict";
var core_1 = require("@angular/core");
var joke_service_1 = require("../joke/joke.service");
var nativescript_social_share_1 = require("nativescript-social-share");
var JokesListComponent = (function () {
    function JokesListComponent(jokeService) {
        this.jokes = [];
        this.jokes = jokeService.getJokes();
    }
    JokesListComponent.prototype.share = function (joke) {
        nativescript_social_share_1.shareText(joke);
    };
    return JokesListComponent;
}());
JokesListComponent = __decorate([
    core_1.Component({
        selector: 'joke-list',
        moduleId: module.id,
        templateUrl: "./list.component.html"
    }),
    __metadata("design:paramtypes", [joke_service_1.JokeService])
], JokesListComponent);
exports.JokesListComponent = JokesListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLHFEQUF5RDtBQUN6RCx1RUFBb0Q7QUFNcEQsSUFBYSxrQkFBa0I7SUFFN0IsNEJBQVksV0FBd0I7UUFEN0IsVUFBSyxHQUFpQixFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFdEMsQ0FBQztJQUVNLGtDQUFLLEdBQVosVUFBYSxJQUFJO1FBQ2YscUNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNqQixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLGtCQUFrQjtJQUw5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7S0FDckMsQ0FBQztxQ0FHeUIsMEJBQVc7R0FGekIsa0JBQWtCLENBVTlCO0FBVlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKb2tlLCBKb2tlU2VydmljZSB9IGZyb20gXCIuLi9qb2tlL2pva2Uuc2VydmljZVwiO1xuaW1wb3J0IHtzaGFyZVRleHR9IGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqb2tlLWxpc3QnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBgLi9saXN0LmNvbXBvbmVudC5odG1sYFxufSlcbmV4cG9ydCBjbGFzcyBKb2tlc0xpc3RDb21wb25lbnQge1xuICBwdWJsaWMgam9rZXMgOiBBcnJheTxKb2tlPiA9IFtdO1xuICBjb25zdHJ1Y3Rvcihqb2tlU2VydmljZTogSm9rZVNlcnZpY2UpIHtcbiAgICB0aGlzLmpva2VzID0gam9rZVNlcnZpY2UuZ2V0Sm9rZXMoKTtcblxuICB9XG5cbiAgcHVibGljIHNoYXJlKGpva2Upe1xuICAgIHNoYXJlVGV4dChqb2tlKVxuICB9XG59Il19