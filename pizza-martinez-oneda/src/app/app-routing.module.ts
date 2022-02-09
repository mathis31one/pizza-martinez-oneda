import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CommandeComponentComponent } from './commande-component/commande-component.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
    {path: '', component: AccueilComponent},
    {path: 'commande', component: CommandeComponentComponent},
    {path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
