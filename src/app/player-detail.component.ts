import { Component } from '@angular/core';



// To define the component you always import the Component symbol.
// @Component decorator provieds Angular metadat for the component. 
// Player-detail will match the element tag that identifies this component whithin a parent component template.(Parent is AppComponent: child: player-detail component)
@Component({
    selector: 'player-detail',

})


 // always export the component class because you will always import it elsewhere.
export class PlayerDetailComponent {

}