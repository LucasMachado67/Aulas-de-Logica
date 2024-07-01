import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: 'produto', component: ProdutoComponent},
    { path: 'detail', component: DetailComponent},
    { path: 'detail/:id', component: DetailComponent},
    { path: 'about', component: AboutComponent}
];
