import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PersonaService } from './Service/persona.service';
import { EditComponent } from './Componentes/Clientes/edit/edit.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,

    ],
    providers: [
        PersonaService,
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimationsAsync()]
    })
export class AppModule { }
