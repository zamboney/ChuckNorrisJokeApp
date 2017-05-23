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
                text: entities_1.decodeHTML(data.value.joke)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9rZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiam9rZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQStCO0FBQy9CLHFDQUFzQztBQU90QyxJQUFhLFdBQVc7SUFEeEI7UUFFWSxVQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQTtJQWdCckMsQ0FBQztJQWZVLHlCQUFHLEdBQVYsVUFBVyxTQUFpQixFQUFFLFFBQWdCO1FBQTlDLGlCQVVDO1FBVEcsTUFBTSxDQUFDLGNBQU8sQ0FBQyxpREFBK0MsU0FBUyxrQkFBYSxRQUFVLENBQUM7YUFDMUYsSUFBSSxDQUFDLFVBQUMsSUFBUztZQUNaLElBQUksSUFBSSxHQUFTO2dCQUNiLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksRUFBRSxxQkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ3BDLENBQUE7WUFDRCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUNNLDhCQUFRLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtHQUNBLFdBQVcsQ0FpQnZCO0FBakJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBnZXRKU09OIH0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCB7IGRlY29kZUhUTUwgfSBmcm9tIFwiZW50aXRpZXNcIjtcbmV4cG9ydCBpbnRlcmZhY2UgSm9rZSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0ZXh0OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKb2tlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBqb2tlcyA9IG5ldyBBcnJheTxKb2tlPigpXG4gICAgcHVibGljIGdldChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IFByb21pc2U8Sm9rZT4ge1xuICAgICAgICByZXR1cm4gZ2V0SlNPTihgaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tP2ZpcnN0TmFtZT0ke2ZpcnN0TmFtZX0mbGFzdE5hbWU9JHtsYXN0TmFtZX1gKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBqb2tlOiBKb2tlID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZGF0YS52YWx1ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZGVjb2RlSFRNTChkYXRhLnZhbHVlLmpva2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuam9rZXMucHVzaChqb2tlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gam9rZTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIHB1YmxpYyBnZXRKb2tlcygpOiBBcnJheTxKb2tlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmpva2VzXG4gICAgfVxuXG59Il19