import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ClientsComponent } from './main/clients/clients.component';
import { IllustrationsComponent } from './main/portfolio/illustrations/illustrations.component';
import { LogoDesignComponent } from './main/portfolio/logo-design/logo-design.component';
import { MobileDesignComponent } from './main/portfolio/mobile-design/mobile-design.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { WebDesignComponent } from './main/portfolio/web-design/web-design.component';
import { WebFrontendComponent } from './main/portfolio/web-frontend/web-frontend.component';
import { ResumeComponent } from './main/resume/resume.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'about', component:AboutComponent},
  {path:'clients', component:ClientsComponent},
  {path:'resume', component:ResumeComponent},
  {path:'mobile', component:MobileDesignComponent},
  {path:'web', component:WebDesignComponent},
  {path:'logo', component:IllustrationsComponent},
  {path:'illustrations', component:LogoDesignComponent},
  {path:'frontend', component:WebFrontendComponent},
  {path:'**', component:HomeComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
