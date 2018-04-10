import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Importar Componentres
import { HomeComponent} from './components/home/controller/home.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
