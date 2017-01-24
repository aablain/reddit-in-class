import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunnyComponent } from './funny/funny.component';
import { GifsComponent } from './gifs/gifs.component';
import { MoviesComponent } from './movies/movies.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'funny',
    component: FunnyComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'gifs',
    component: GifsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
