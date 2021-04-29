import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing'; // importar las contantes del archivo de rutas
import { HttpClientModule } from '@angular/common/http'; //sin esto ninguna peticion ajax funcionara en angular
import { MomentModule } from 'angular2-moment'; //instalar modulo mediante npm install --save angular2-moment 


import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.componet'; //importamos el componente 
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component' 
import { EsParPipe } from './pipes/espar.pipe'; //importar pipes ersonalizados y cargar en declarations
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component'; //necesario para trabajar con formularios se tiene que importar manual mente y cargar en imports
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente, //se declara el componente
    PeliculasComponent, PruebasComponent, HeaderComponent, SliderComponent, SidebarComponent, FooterComponent, HomeComponent, BlogComponent, FormularioComponent, PaginaComponent, ErrorComponent, PeliculaComponent , EsParPipe, ArticlesComponent, ArticleComponent, SearchComponent, ArticleCreateComponent, ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent] //aqui es donde se especifica cual es el componente principal que se cargara del proyecto
})
export class AppModule { }
