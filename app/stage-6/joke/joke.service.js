"use strict";
var core_1 = require("@angular/core");
var http_1 = require("http");
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
                text: data.value.joke
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9rZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiam9rZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQStCO0FBUS9CLElBQWEsV0FBVztJQUR4QjtRQUVZLFVBQUssR0FBRyxJQUFJLEtBQUssRUFBUSxDQUFBO0lBZ0JyQyxDQUFDO0lBZlUseUJBQUcsR0FBVixVQUFXLFNBQWlCLEVBQUUsUUFBZ0I7UUFBOUMsaUJBVUM7UUFURyxNQUFNLENBQUMsY0FBTyxDQUFDLGlEQUErQyxTQUFTLGtCQUFhLFFBQVUsQ0FBQzthQUMxRixJQUFJLENBQUMsVUFBQyxJQUFTO1lBQ1osSUFBSSxJQUFJLEdBQVM7Z0JBQ2IsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTthQUN4QixDQUFBO1lBQ0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFDTSw4QkFBUSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7R0FDQSxXQUFXLENBaUJ2QjtBQWpCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ2V0SlNPTiB9IGZyb20gXCJodHRwXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9rZSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0ZXh0OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKb2tlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBqb2tlcyA9IG5ldyBBcnJheTxKb2tlPigpXG4gICAgcHVibGljIGdldChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IFByb21pc2U8Sm9rZT4ge1xuICAgICAgICByZXR1cm4gZ2V0SlNPTihgaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tP2ZpcnN0TmFtZT0ke2ZpcnN0TmFtZX0mbGFzdE5hbWU9JHtsYXN0TmFtZX1gKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBqb2tlOiBKb2tlID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZGF0YS52YWx1ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZGF0YS52YWx1ZS5qb2tlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuam9rZXMucHVzaChqb2tlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gam9rZTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIHB1YmxpYyBnZXRKb2tlcygpOiBBcnJheTxKb2tlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmpva2VzXG4gICAgfVxuXG59Il19