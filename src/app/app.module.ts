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
import { SintomasdepresionComponent } from './componentes/sintomasdepresion/sintomasdepresion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { PaginaadminComponent } from './componentes/paginaadmin/paginaadmin.component';
import { EstadisticasuserComponent } from './componentes/estadisticasuser/estadisticasuser.component';
import { MenuadminComponent } from './componentes/menuadmin/menuadmin.component';
import { EstadisticatestComponent } from './componentes/estadisticatest/estadisticatest.component';
import { ContactanosadminComponent } from './componentes/contactanosadmin/contactanosadmin.component';
import { PerfiladminComponent } from './componentes/perfiladmin/perfiladmin.component';
import { PaginapacienteComponent } from './componentes/paginapaciente/paginapaciente.component';
import { ReportetestpacienteComponent } from './componentes/reportetestpaciente/reportetestpaciente.component';
import { ContactanospacienteComponent } from './componentes/contactanospaciente/contactanospaciente.component';
import { LoginregisterComponent } from './componentes/loginregister/loginregister.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PaginaclientesComponent } from './componentes/paginaclientes/paginaclientes.component';
import { PaginapsicologovisualizarpacienteComponent } from './componentes/paginapsicologovisualizarpaciente/paginapsicologovisualizarpaciente.component';
import { MostrarpacientesComponent } from './componentes/mostrarpacientes/mostrarpacientes.component';



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
    BlogsdepresionComponent,
    SintomasdepresionComponent,
    PaginaadminComponent,
    EstadisticasuserComponent,
    MenuadminComponent,
    EstadisticatestComponent,
    ContactanosadminComponent,
    PerfiladminComponent,
    PaginapacienteComponent,
    ReportetestpacienteComponent,
    ContactanospacienteComponent,
    LoginregisterComponent,
    PaginaclientesComponent,
    PaginapsicologovisualizarpacienteComponent,
    MostrarpacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }