"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// Creatied a player class.
var Player = (function () {
    function Player() {
    }
    return Player;
}());
exports.Player = Player;
// {{}} Angulars interploation binding syntax for one-way binding.
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'OPTM Basketball';
        this.player = {
            id: 1,
            name: 'Kevin Durant',
            position: 'Small-Forward',
            team: 'Boy-toys'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n     <h1>{{title}}</h1>\n     <h2>{{player.name}} Info</h2>\n     <div><label>id: </label>{{player.id}}</div>\n     <div><label>name: </label>{{player.name}}</div>\n     <div><label>position: </label>{{player.position}}</div>\n     <div><label>team: </label>{{player.team}}</div>\n     <div>\n      <label>Info: </label>\n      <input [(ngModel)] = \"player.name\" placeholder=\"name\">\n      <input [(ngModel)] = \"player.position\" placeholder=\"position\">\n      <input [(ngModel)] = \"player.team\" placeholder=\"team\">\n\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map