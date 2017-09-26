import { Injectable } from '@angular/core';

import {Player } from './player';
import { PLAYERS } from './mock-players';


@Injectable()
export class PlayerService {
    getPlayers(): Promise<Player[]> {
        return Promise.resolve(PLAYERS);

    }
    getPlayersSlowly(): Promise<Player[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getPlayers()), 2000);
        });
    }

    getPlayer(id: number): Promise<Player> {
        return this.getPlayers()
            .then(players => players.find(player => player.id === id));
    }

}

