import { Component, Input } from '@angular/core';

import { Player } from './player';



// To define the component you always import the Component symbol.
// @Component decorator provieds Angular metadat for the component. 
// Player-detail will match the element tag that identifies this component whithin a parent component template.(Parent is AppComponent: child: player-detail component)
@Component({
    selector: 'player-detail',
    template: `
      <div *ngIf="player">
        <h2>{{player.name}} Info</h2>
        <div><label>id: </label>{{player.id}}</div>
      <div>
         <label>name: </label>
         <input> [(ngModel)] ="player.name" placeholder="name"/>
         <label>positon: </label>
         <input> [(ngModel)] ="player.position" placeholder="positon"/>
         <label>team: </label>
         <input> [(ngModel)] ="player.team" placeholder="team"/>
      </div>
      </div>
   `
})


 // always export the component class because you will always import it elsewhere.
export class PlayerDetailComponent {
    @Input() player: Player;

}