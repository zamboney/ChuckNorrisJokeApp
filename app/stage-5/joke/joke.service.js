"use strict";
var core_1 = require("@angular/core");
var http_1 = require("http");
var JokeService = (function () {
    function JokeService() {
        this.jokes = new Array();
    }
    JokeService.prototype.get = function (firstName, lastName) {
        return http_1.getJSON("http://api.icndb.com/jokes/random?firstName=" + firstName + "&lastName=" + lastName)
            .then(function (data) {
            return {
                id: data.value.id,
                text: data.value.joke
            };
        });
    };
    return JokeService;
}());
JokeService = __decorate([
    core_1.Injectable()
], JokeService);
exports.JokeService = JokeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9rZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiam9rZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQStCO0FBUS9CLElBQWEsV0FBVztJQUR4QjtRQUVZLFVBQUssR0FBRyxJQUFJLEtBQUssRUFBUSxDQUFBO0lBV3JDLENBQUM7SUFWVSx5QkFBRyxHQUFWLFVBQVcsU0FBaUIsRUFBRSxRQUFnQjtRQUMxQyxNQUFNLENBQUMsY0FBTyxDQUFDLGlEQUErQyxTQUFTLGtCQUFhLFFBQVUsQ0FBQzthQUMxRixJQUFJLENBQUMsVUFBQyxJQUFTO1lBQ1osTUFBTSxDQUFRO2dCQUNWLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7YUFDdkIsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7R0FDQSxXQUFXLENBWXZCO0FBWlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldEpTT04gfSBmcm9tIFwiaHR0cFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEpva2Uge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdGV4dDogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSm9rZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgam9rZXMgPSBuZXcgQXJyYXk8Sm9rZT4oKVxuICAgIHB1YmxpYyBnZXQoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBQcm9taXNlPEpva2U+IHtcbiAgICAgICAgcmV0dXJuIGdldEpTT04oYGh0dHA6Ly9hcGkuaWNuZGIuY29tL2pva2VzL3JhbmRvbT9maXJzdE5hbWU9JHtmaXJzdE5hbWV9Jmxhc3ROYW1lPSR7bGFzdE5hbWV9YClcbiAgICAgICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxKb2tlPntcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEudmFsdWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGEudmFsdWUuam9rZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxufSJdfQ==