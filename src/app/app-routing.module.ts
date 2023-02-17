import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaprincipalComponent } from './componentes/paginaprincipal/paginaprincipal.component';
import { PerfiluserComponent } from './componentes/perfiluser/perfiluser.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { TestestresinfoComponent } from './componentes/testestresinfo/testestresinfo.component';
import { TestansiedadinfoComponent } from './componentes/testansiedadinfo/testansiedadinfo.component';
import { TestdepresioninfoComponent } from './componentes/testdepresioninfo/testdepresioninfo.component';
import { TestqueesestresComponent } from './componentes/testqueesestres/testqueesestres.component';
import { EstresnosiempreesmaloComponent } from './componentes/estresnosiempreesmalo/estresnosiempreesmalo.component';
import { EstressintomasComponent } from './componentes/estressintomas/estressintomas.component';
import { BlogestresComponent } from './componentes/blogestres/blogestres.component';
import { ControlarestresComponent } from './componentes/controlarestres/controlarestres.component';
import { TestqueesansiedadComponent } from './componentes/testqueesansiedad/testqueesansiedad.component';
import { BlogansiedadComponent } from './componentes/blogansiedad/blogansiedad.component';
import { SintomasansiedadComponent } from './componentes/sintomasansiedad/sintomasansiedad.component';
import { PreveniransiedadComponent } from './componentes/preveniransiedad/preveniransiedad.component';
import { QueesdepresionComponent } from './componentes/queesdepresion/queesdepresion.component';
import { SintomasdepresionComponent } from './componentes/sintomasdepresion/sintomasdepresion.component';
import { BlogsdepresionComponent } from './componentes/blogsdepresion/blogsdepresion.component';
import { PaginaadminComponent } from './componentes/paginaadmin/paginaadmin.component';
import { EstadisticasuserComponent } from './componentes/estadisticasuser/estadisticasuser.component';
import { EstadisticatestComponent } from './componentes/estadisticatest/estadisticatest.component';
import { ContactanosadminComponent } from './componentes/contactanosadmin/contactanosadmin.component';
import { PerfiladminComponent } from './componentes/perfiladmin/perfiladmin.component';
import { PaginapacienteComponent } from './componentes/paginapaciente/paginapaciente.component';
import { ReportetestpacienteComponent } from './componentes/reportetestpaciente/reportetestpaciente.component';
import { ContactanospacienteComponent } from './componentes/contactanospaciente/contactanospaciente.component';
import { LoginregisterComponent } from './componentes/loginregister/loginregister.component';
import { PaginapsicologoComponent } from './componentes/paginapsicologo/paginapsicologo.component';



const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'paginaprincipal'},
  {path: 'paginaprincipal', component: PaginaprincipalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfiluser', component: PerfiluserComponent},
  {path: 'testestresinfo', component: TestestresinfoComponent},
  {path: 'testansiedadinfo', component: TestansiedadinfoComponent},
  {path: 'testdepresioninfo', component: TestdepresioninfoComponent},
  {path: 'testqueesestres', component: TestqueesestresComponent},
  {path: 'estresnosiempreesmalo', component: EstresnosiempreesmaloComponent},
  {path: 'estressintomas', component: EstressintomasComponent},
  {path: 'blogestres', component: BlogestresComponent},
  {path: 'controlarestres', component: ControlarestresComponent},
  {path: 'testqueesansiedad', component: TestqueesansiedadComponent},
  {path: 'blogansiedad', component: BlogansiedadComponent},
  {path: 'sintomasansiedad', component: SintomasansiedadComponent},
  {path: 'preveniransiedad', component: PreveniransiedadComponent},
  {path: 'queesdepresion', component: QueesdepresionComponent},
  {path: 'sintomasdepresion', component: SintomasdepresionComponent},
  {path: 'blogsdepresion', component: BlogsdepresionComponent},
  {path: 'paginaadmin', component: PaginaadminComponent},
  {path: 'estadisticasuser', component: EstadisticasuserComponent},
  {path: 'estadisticatest', component: EstadisticatestComponent},
  {path: 'contactanosadmin', component: ContactanosadminComponent},
  {path: 'perfiladmin', component: PerfiladminComponent},
  {path: 'paginapaciente', component: PaginapacienteComponent},
  {path: 'reportetestpaciente', component: ReportetestpacienteComponent},
  {path: 'contactanospaciente', component: ContactanospacienteComponent},
  {path: 'loginregister', component: LoginregisterComponent},
  {path: 'paginapsicologo', component: PaginapsicologoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }