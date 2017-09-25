import { Component } from '@angular/core';

export class Player {
    id: number;
    name: string;
    position: string;
    team: string;
}

const PLAYERS: Player[] = [
    { id: 1, name: 'Steph Curry', position: 'Point-Guard', team:'GoGojImmie' },
    { id: 2, name: 'Mike Conley', position: 'Point-Guard', team: 'GoGojImmie'},
    { id: 3, name: 'Cj Mcolloum', position: 'Shooting-Guard', team: 'GoGojImmie' },
    { id: 4, name: 'Harrison Barnes', position: 'Forward', team: 'GoGojImmie' },
    { id: 5, name: 'Joe Engles', position: 'Forward', team: 'GoGojImmie' },
    { id: 6, name: 'Rudy Gay', position: 'Forward', team: 'GoGojImmie' },
    { id: 7, name: 'Al Horford', position: 'Forward/Center', team: 'GoGojImmie' },
    { id: 8, name: 'Rudy Gobert', position: 'Center', team: 'GoGojImmie'},
    { id: 9, name: 'Devin Booker', position: 'Shooting-Guard', team: 'GoGojImmie' },
    { id: 10, name: 'LeMarcus Aldridge', position: 'Poing-Guard', team: 'GoGojImmie' }
];

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Players</h2>
    <ul class="players">
      <li *ngFor="let player of players"
        [class.selected]="player === selectedPlayer"
        (click)="onSelect(player)">
        <span class="badge">{{player.id}}</span> {{player.name}}
      </li>
    </ul>
    <div *ngIf="selectedPlayer">
      <h2>{{selectedPlayer.name}} info</h2>
      <div><label>id: </label>{{selectedPlayer.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedPlayer.name" placeholder="name"/> 
        <label>position: </label>
        <input [(ngModel)]="selectedPlayer.position" placeholder="position"/>
        <label>team: </label>
        <input [(ngModel)]="selectedPlayer.team" placeholder="team"/>
      </div>
    </div>
  `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .players {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .players li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .players li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .players li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .players .text {
      position: relative;
      top: -3px;
    }
    .players .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
    title = 'OPTM Fantasy League';
    players = PLAYERS;
    selectedPlayer: Player;

    onSelect(player: Player): void {
        this.selectedPlayer = player;
    }
}
