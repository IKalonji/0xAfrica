import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DexComponent } from './dex/dex.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "0xAfrica/home"
  },
  {
    path: "0xAfrica/home",
    component: HomepageComponent
  },
  {
    path: "0xAfrica/dex",
    component: DexComponent
  },
  {
    path: "**/**",
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
