import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'home', component: FormComponent },
  { path: 'confirm', component: ConfirmationComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }, //catchall redirect home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
