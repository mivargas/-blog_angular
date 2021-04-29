//importar los modulos del router de angular
// import { ModuleWithProviders } from '@angular/core' //obsoleto
import { Routes, RouterModule } from '@angular/router'

//importar comonentes a los cuales se les quiere hacer una pagina especifica
import { HomeComponent } from './components/home/home.component'
import { BlogComponent } from './components/blog/blog.component'
import { FormularioComponent } from './components/formulario/formulario.component'
import { PeliculasComponent } from './components/peliculas/peliculas.component'
import { PaginaComponent } from './components/pagina/pagina.component'
import { ErrorComponent } from './components/error/error.component'
import { ArticleComponent } from './components/article/article.component'
import { SearchComponent } from './components/search/search.component'
import { ArticleCreateComponent } from './components/article-create/article-create.component'
import { ArticleEditComponent } from './components/article-edit/article-edit.component'

//array de rutas
const appRoutes: Routes = [
    {path:'', component:HomeComponent },
    {path:'home', component:HomeComponent},
    {path:'blog', component:BlogComponent},
    {path:'blog/articulo/:id', component:ArticleComponent},
    {path:'blog/crear', component:ArticleCreateComponent},
    {path:'blog/editar/:id', component:ArticleEditComponent},
    {path:'buscar/:search', component:SearchComponent},
    {path:'formulario', component:FormularioComponent},
    {path:'peliculas', component:PeliculasComponent},
    {path:'pagina-de-pruebas', component:PaginaComponent},
    {path:'pagina-de-pruebas/:nombre', component:PaginaComponent}, //parametros por ruta
    {path:'peliculas', component:PeliculasComponent},
    {path:'**', component:ErrorComponent} //ruta 404 o no encontrada esta ruta se especifica con el ** y siempre debe ser la ultima o de lo contrario no funionaran las demas
];

//exportar el modulo de rutas
/*
export const appRoutinngProviders:any[] = []; //obsoleto
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
*/
 export const routing = RouterModule.forRoot(appRoutes);