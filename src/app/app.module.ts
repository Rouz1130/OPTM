import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PlayerDetailComponent } from './player-detail.component';

@NgModule({
    imports: [

        BrowserModule,
        FormsModule
    ],

    //general, the declarations array contains a list of application components, pipes, and directives that belong to the module. A component must be declared in a module before other components can reference it
    declarations: [
        AppComponent,
        PlayerDetailComponent
    ],

    bootstrap: [AppComponent]

})
export class AppModule { }
