import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
