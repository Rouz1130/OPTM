import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';

import { Player } from './player';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { PlayerService } from './player.service';





// To define the component you always import the Component symbol.
// @Component decorator provieds Angular metadat for the component. 
// Player-detail will match the element tag that identifies this component whithin a parent component template.(Parent is AppComponent: child: player-detail component)
@Component({
    selector: './player-detail',
    template:'./player-detail.component.html',
})


 // always export the component class because you will always import it elsewhere.
   
export class PlayerDetailComponent implements OnInit {
    player: Player;

    constructor(
        private playerService: PlayerService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.playerService.getPlayer(+params.get('id')))
            .subscribe(player => this.player = player);
    }


    goBack(): void {
        this.location.back();
    }
}
