import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PersonaService } from './Service/persona.service';
import { RegisterComponent } from './Componentes/register/register.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './Componentes/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        InicioComponent

    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
        

    ],
    providers: [
        PersonaService,
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimationsAsync(),
        provideFirebaseApp(() => initializeApp({ "projectId": "hotellexus-5e4a0", "appId": "1:716147908655:web:46a408dac6a144274ca6da", "databaseURL": "https://hotellexus-5e4a0-default-rtdb.firebaseio.com", "storageBucket": "hotellexus-5e4a0.firebasestorage.app", "apiKey": "AIzaSyDyC76kSJYe0501Rjqfn_sZ9gyfCLzSmRA", "authDomain": "hotellexus-5e4a0.firebaseapp.com", "messagingSenderId": "716147908655" })),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore())]
})
export class AppModule { }
