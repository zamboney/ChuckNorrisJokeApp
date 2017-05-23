"use strict";
var core_1 = require("@angular/core");
var http_1 = require("http");
var entities_1 = require("entities");
var JokeService = (function () {
    function JokeService() {
        this.jokes = new Array();
    }
    JokeService.prototype.get = function (firstName, lastName) {
        var _this = this;
        return http_1.getJSON("http://api.icndb.com/jokes/random?firstName=" + firstName + "&lastName=" + lastName)
            .then(function (data) {
            var joke = {
                id: data.value.id,
                text: entities_1.decodeHTML(data.value.joke) // <---
            };
            _this.jokes.push(joke);
            return joke;
        });
    };
    JokeService.prototype.getJokes = function () {
        return this.jokes;
    };
    return JokeService;
}());
JokeService = __decorate([
    core_1.Injectable()
], JokeService);
exports.JokeService = JokeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9rZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiam9rZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQStCO0FBQy9CLHFDQUFzQztBQU90QyxJQUFhLFdBQVc7SUFEeEI7UUFFWSxVQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQTtJQWdCckMsQ0FBQztJQWZVLHlCQUFHLEdBQVYsVUFBVyxTQUFpQixFQUFFLFFBQWdCO1FBQTlDLGlCQVVDO1FBVEcsTUFBTSxDQUFDLGNBQU8sQ0FBQyxpREFBK0MsU0FBUyxrQkFBYSxRQUFVLENBQUM7YUFDMUYsSUFBSSxDQUFDLFVBQUMsSUFBUztZQUNaLElBQUksSUFBSSxHQUFTO2dCQUNiLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksRUFBRSxxQkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzthQUM1QyxDQUFBO1lBQ0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFDTSw4QkFBUSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7R0FDQSxXQUFXLENBaUJ2QjtBQWpCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ2V0SlNPTiB9IGZyb20gXCJodHRwXCI7XG5pbXBvcnQgeyBkZWNvZGVIVE1MIH0gZnJvbSBcImVudGl0aWVzXCI7XG5leHBvcnQgaW50ZXJmYWNlIEpva2Uge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdGV4dDogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSm9rZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgam9rZXMgPSBuZXcgQXJyYXk8Sm9rZT4oKVxuICAgIHB1YmxpYyBnZXQoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBQcm9taXNlPEpva2U+IHtcbiAgICAgICAgcmV0dXJuIGdldEpTT04oYGh0dHA6Ly9hcGkuaWNuZGIuY29tL2pva2VzL3JhbmRvbT9maXJzdE5hbWU9JHtmaXJzdE5hbWV9Jmxhc3ROYW1lPSR7bGFzdE5hbWV9YClcbiAgICAgICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgam9rZTogSm9rZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEudmFsdWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGRlY29kZUhUTUwoZGF0YS52YWx1ZS5qb2tlKSAvLyA8LS0tXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuam9rZXMucHVzaChqb2tlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gam9rZTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIHB1YmxpYyBnZXRKb2tlcygpOiBBcnJheTxKb2tlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmpva2VzXG4gICAgfVxuXG59Il19