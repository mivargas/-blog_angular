import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-create/article-create.component.html', //se reusa el de componete html de create y se compian abajo casi todos los metodos
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public page_title: string;
  public is_edit:boolean; //este booleano nos ayuda a mostrar la imagen ya guardada en caso que estemos en edit ()
  public url:string;
  public title:string; //titulo  que define si estamos en crear o editar


  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + "upload-image/",
      method: "POST",
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Adjuntar imagen de articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
    }
  };

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) {
    this.page_title = "Editar articulo";
    this.is_edit = true;
    this.url = Global.url;
    //this.article = new Article('', '', '', null, null) //esto se necesita para dar una estructura y valores por defecto al llenar el objeto con los datos que llegan del back. N0TA: se puede obviar esto colocando un ngIf="article" ya que el objeto aticle llega vacio del modelo y por lo tanto existe mas no existen las propiedades asi que se evitan errores

  }

  ngOnInit(): void {
    this.getArticle()
  }

  onSubmit() {
    //console.log(this.article)
    this._articleService.update(this.article._id, this.article).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = 'success'
          this.article = response.article
          console.log(response)
          //alerta
          Swal.fire(
            '¡Articulo editado!',
            'El articulo se ha editado exitosamente',
            'success'
          );
          this._router.navigate(['/blog/articulo', this.article._id])
        } else {
          this.status = 'error'
        }
      },
      (error) => {
        console.log(error)
        this.status = 'error'
      }
    )
  }

  getArticle() {
    this._route.params.subscribe((params: Params) => {
      console.log(params)
      let paramtro = params.id



      this._articleService.getArticle(paramtro).subscribe((response) => {
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
    })
  }

  imageUpload(data) {
    let image_data = data.body.image
    //alert(data.body.image)
    this.article.image = image_data; //lo que se hace es subir el archivo, recoger el nombre del archivo subido adjuntarlo dentro del objeto del articulo incrustarlo dentro de la proiedad image y asi ya lo tengo guardado como tal, entonces cuando se cree un articulo ya se tiene la imagen vinculada comotal 
  }


}
