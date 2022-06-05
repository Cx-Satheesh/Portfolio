import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MySpaceComponent } from './my-space/my-space.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './main/about/about.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ClientsComponent } from './main/clients/clients.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ResumeComponent } from './main/resume/resume.component';
import { MySocialComponent } from './my-social/my-social.component';
import { MobileDesignComponent } from './main/portfolio/mobile-design/mobile-design.component';
import { WebDesignComponent } from './main/portfolio/web-design/web-design.component';
import { LogoDesignComponent } from './main/portfolio/logo-design/logo-design.component';
import { IllustrationsComponent } from './main/portfolio/illustrations/illustrations.component';
import { WebFrontendComponent } from './main/portfolio/web-frontend/web-frontend.component';
import { ProjectsComponent } from './main/portfolio/mobile-design/projects/projects.component';
import { HorizontalScrollDirective } from './main/portfolio/mobile-design/projects/horizontal-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    MySpaceComponent,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    SkillsComponent,
    ClientsComponent,
    HomeComponent,
    MainComponent,
    ResumeComponent,
    MySocialComponent,
    MobileDesignComponent,
    WebDesignComponent,
    LogoDesignComponent,
    IllustrationsComponent,
    WebFrontendComponent,
    ProjectsComponent,
    HorizontalScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
