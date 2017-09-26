import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import {Router} from '@angular/router';

import { PlayerService } from './player.service';


@Component({
    selector: 'my-players',
    template: './players.component.html',
    styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
    players: Player[];
    selectedPlayer: Player;

    constructor(
        private router: Router,
        private playerService: PlayerService) { }


    getPlayers(): void {
        this.playerService.getPlayers().then(players => this.players = players);
    }

    ngOnInit(): void {
        this.getPlayers();
    }


    onSelect(player: Player): void {
        this.selectedPlayer = player;
    }


    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedPlayer.id]);
    }
}
