import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { EquipeFormComponent } from './equipe-form/equipe-form.component';
import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'CadastrarEquipe', component: EquipeFormComponent },
  { path: 'CadastrarColaborador', component: ColaboradorFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

