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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }