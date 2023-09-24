import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { BioComponent } from './Pages/bio/bio.component';
import { MusicComponent } from './Pages/music/music.component';
import { StreamsComponent } from './Pages/streams/streams.component';
import { DatesComponent } from './Pages/dates/dates.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ContactComponent } from './Pages/contact/contact.component';

const routes: Routes = [
  {
    path: 'bio', component: BioComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'music', component: MusicComponent
  },
  {
    path: 'streams', component: StreamsComponent
  },
  {
    path: 'dates', component: DatesComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
