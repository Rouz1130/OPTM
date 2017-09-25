import { Component } from '@angular/core';

// Creatied a player class.
export class Player {
    id: number;
    name: string;
    position: string;
    team: string;
}

// {{}} Angulars interploation binding syntax for one-way binding.

@Component({
    selector: 'my-app',
    template:  `
     <h1>{{title}}</h1>
     <h2>{{player.name}} Info</h2>
     <div><label>id: </label>{{player.id}}</div>
     <div><label>name: </label>{{player.name}}</div>
     <div><label>position: </label>{{player.position}}</div>
     <div><label>team: </label>{{player.team}}</div>
     <div>
      <label>Info: </label>
      <input [(ngModel)] = "player.name" placeholder="name">
      <input [(ngModel)] = "player.position" placeholder="position">
      <input [(ngModel)] = "player.team" placeholder="team">

    `
})

    // ngModel directive: is a way to do two-way binding. Data flows both directions from the property to the textbox and from the textbox back to the property.




// Create player property to be of Type Player
export class AppComponent {
    title = 'OPTM Basketball';
    player: Player = {
        id: 1,
        name: 'Kevin Durant',
        position: 'Small-Forward',
        team: 'Boy-toys'
    };
}
