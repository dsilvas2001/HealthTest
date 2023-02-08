import { NgModule } from '@angular/core';


import { CargarScriptsService } from './cargar-scripts.service';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfiluserComponent } from './componentes/perfiluser/perfiluser.component';
import { PaginaprincipalComponent } from './componentes/paginaprincipal/paginaprincipal.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TestestresinfoComponent } from './componentes/testestresinfo/testestresinfo.component';
import { TestansiedadinfoComponent } from './componentes/testansiedadinfo/testansiedadinfo.component';
import { TestdepresioninfoComponent } from './componentes/testdepresioninfo/testdepresioninfo.component';
import { TestqueesestresComponent } from './componentes/testqueesestres/testqueesestres.component';
import { MenuestresComponent } from './componentes/menuestres/menuestres.component';
import { EstresnosiempreesmaloComponent } from './componentes/estresnosiempreesmalo/estresnosiempreesmalo.component';
import { EstressintomasComponent } from './componentes/estressintomas/estressintomas.component';
import { BlogestresComponent } from './componentes/blogestres/blogestres.component';
import { ControlarestresComponent } from './componentes/controlarestres/controlarestres.component';
import { TestqueesansiedadComponent } from './componentes/testqueesansiedad/testqueesansiedad.component';
import { BlogansiedadComponent } from './componentes/blogansiedad/blogansiedad.component';
import { MenuansiedadComponent } from './componentes/menuansiedad/menuansiedad.component';
import { SintomasansiedadComponent } from './componentes/sintomasansiedad/sintomasansiedad.component';
import { PreveniransiedadComponent } from './componentes/preveniransiedad/preveniransiedad.component';
import { MenudepresionComponent } from './componentes/menudepresion/menudepresion.component';
import { QueesdepresionComponent } from './componentes/queesdepresion/queesdepresion.component';
import { BlogsdepresionComponent } from './componentes/blogsdepresion/blogsdepresion.component';



@NgModule({
  declarations: [
    AppComponent,
    PerfiluserComponent,
    PaginaprincipalComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    TestestresinfoComponent,
    TestansiedadinfoComponent,
    TestdepresioninfoComponent,
    TestqueesestresComponent,
    MenuestresComponent,
    EstresnosiempreesmaloComponent,
    EstressintomasComponent,
    BlogestresComponent,
    ControlarestresComponent,
    TestqueesansiedadComponent,
    BlogansiedadComponent,
    MenuansiedadComponent,
    SintomasansiedadComponent,
    PreveniransiedadComponent,
    MenudepresionComponent,
    QueesdepresionComponent,
    BlogsdepresionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }