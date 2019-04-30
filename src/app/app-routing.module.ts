import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleRandomComponent } from './simple-random/simple-random.component';
import { StratifiedRandomComponent } from './stratified-random/stratified-random.component';

const routes: Routes = [
  { path: '', redirectTo: '/simple_random', pathMatch: 'full' },
  { path: 'simple_random', component: SimpleRandomComponent },
  { path: 'stratified_random', component: StratifiedRandomComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
