import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'cadastro', component:Cadastro},
    {path: 'home', component: Home}
];
