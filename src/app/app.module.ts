import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BioComponent } from './Pages/bio/bio.component';
import { MusicComponent } from './Pages/music/music.component';
import { StreamsComponent } from './Pages/streams/streams.component';
import { DatesComponent } from './Pages/dates/dates.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { VisualArtComponent } from './Pages/visual-art/visual-art.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BodyComponent,
    FooterComponent,
    BioComponent,
    MusicComponent,
    StreamsComponent,
    DatesComponent,
    ServicesComponent,
    ContactComponent,
    VisualArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
