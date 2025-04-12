import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReflectionsComponent } from './reflections/reflections.component';
import { ProfileComponent } from './profile/profile.component';
import { RechtlichesComponent } from './rechtliches/rechtliches.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'reflections', component: ReflectionsComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'rechtliches', component: RechtlichesComponent
  },
  {
    path: 'profile/:id', 
    component: ProfileComponent
  },
  {
    path: 'projects', 
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
