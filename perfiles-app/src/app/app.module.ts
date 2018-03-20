import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { FormularioComponent } from './perfil/formulario.component';
import {PerfilService} from './perfil/perfil.service';

const routes: Routes = [
  {path: '', redirectTo: '/perfil', pathMatch: 'full'},
  {path: 'perfil', component: PerfilComponent},
  {path: 'perfil/formulario', component: FormularioComponent},
  {path: 'perfil/formulario/:id', component: FormularioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PerfilComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PerfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
