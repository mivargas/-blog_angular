import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public paramtro: string;
  public article: Article;
  public url: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) {
    this.url = Global.url;
   }
  
  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      console.log(params)
      this.paramtro = params.id

    })

    this._articleService.getArticle(this.paramtro).subscribe((response) => {
      console.log(response);

      if (response.article) {
        this.article = response.article;
      } else {
        this._router.navigate(['/home'])
      }

    },
      (error) => {
        console.log(error);
        this._router.navigate(['/home'])
      })
  }

  delete(id) {

    Swal.fire({
      title: '¿Deseas eliminar este articulo?',
      text: "El articulo sera removido y no podra ser recuperado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._articleService.delete(id).subscribe(
          (response) => {
            console.log(response)
            Swal.fire(
              '¡Eliminado!',
              'El articulo se ha eliminado exitosamente.',
              'success'
            )
            this._router.navigate(['/blog'])
          },
          (error) => {
            console.log(error)
          }
        )
      }
    })

  }

}
