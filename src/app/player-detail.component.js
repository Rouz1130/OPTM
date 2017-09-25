"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var player_1 = require("./player");
// To define the component you always import the Component symbol.
// @Component decorator provieds Angular metadat for the component. 
// Player-detail will match the element tag that identifies this component whithin a parent component template.(Parent is AppComponent: child: player-detail component)
var PlayerDetailComponent = (function () {
    // always export the component class because you will always import it elsewhere.
    function PlayerDetailComponent() {
    }
    return PlayerDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", player_1.Player)
], PlayerDetailComponent.prototype, "player", void 0);
PlayerDetailComponent = __decorate([
    core_1.Component({
        selector: 'player-detail',
        template: "\n      <div *ngIf=\"player\">\n        <h2>{{player.name}} Info</h2>\n        <div><label>id: </label>{{player.id}}</div>\n       <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"player.name\" placeholder=\"name\"/> \n        <label>position: </label>\n        <input [(ngModel)]=\"player.position\" placeholder=\"position\"/>\n        <label>team: </label>\n        <input [(ngModel)]=\"player.team\" placeholder=\"team\"/>\n      </div>\n      </div>\n   "
    })
], PlayerDetailComponent);
exports.PlayerDetailComponent = PlayerDetailComponent;
//# sourceMappingURL=player-detail.component.js.map