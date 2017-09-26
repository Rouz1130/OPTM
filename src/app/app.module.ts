import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PlayerDetailComponent } from './player-detail.component';
import { PlayerService } from './player.service';
import { PlayersComponent } from './players.component';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';


// Path: the router matches the path to the URL in the browser address bar (players)
// Component: The component that the router should create when navigating to this route.(playerComponent)

@NgModule({
    imports: [

        BrowserModule,
        FormsModule,
        AppRoutingModule

    ],

    //general, the declarations array contains a list of application components, pipes, and directives that belong to the module. A component must be declared in a module before other components can reference it
    declarations: [
        AppComponent,
        PlayerDetailComponent,
        PlayersComponent,
        DashboardComponent
    ],
    providers: [
        PlayerService

    ],

    bootstrap: [AppComponent]

})
export class AppModule { }



