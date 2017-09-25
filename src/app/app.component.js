"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PLAYERS = [
    { id: 1, name: 'Steph Curry', position: 'Point-Guard', team: 'GoGojImmie' },
    { id: 2, name: 'Mike Conley', position: 'Point-Guard', team: 'GoGojImmie' },
    { id: 3, name: 'Cj Mcolloum', position: 'Shooting-Guard', team: 'GoGojImmie' },
    { id: 4, name: 'Harrison Barnes', position: 'Forward', team: 'GoGojImmie' },
    { id: 5, name: 'Joe Engles', position: 'Forward', team: 'GoGojImmie' },
    { id: 6, name: 'Rudy Gay', position: 'Forward', team: 'GoGojImmie' },
    { id: 7, name: 'Al Horford', position: 'Forward/Center', team: 'GoGojImmie' },
    { id: 8, name: 'Rudy Gobert', position: 'Center', team: 'GoGojImmie' },
    { id: 9, name: 'Devin Booker', position: 'Shooting-Guard', team: 'GoGojImmie' },
    { id: 10, name: 'LeMarcus Aldridge', position: 'Poing-Guard', team: 'GoGojImmie' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'OPTM Fantasy League';
        this.players = PLAYERS;
    }
    AppComponent.prototype.onSelect = function (player) {
        this.selectedPlayer = player;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>My Players</h2>\n    <ul class=\"players\">\n      <li *ngFor=\"let player of players\"\n        [class.selected]=\"player === selectedPlayer\"\n        (click)=\"onSelect(player)\">\n        <span class=\"badge\">{{player.id}}</span> {{player.name}}\n      </li>\n    </ul>\n    <player-detail [player] = \"selectedPlayer\"><player-detail>\n\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .players {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .players li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .players li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .players li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .players .text {\n      position: relative;\n      top: -3px;\n    }\n    .players .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map