import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
  providers: [ArticleService]
})
export class ArticleCreateComponent implements OnInit {

  public article: Article;
  public status: string;
  public page_title: string;
  public is_edit: boolean;

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
    private _ruter: Router,
    private _rute: ActivatedRoute,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null, null);
    this.page_title = "Crear articulo";
    this.is_edit = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(this.article)
    this._articleService.create(this.article).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.status = 'success'
          this.article = response.article
          console.log(response)

          //alerta
          Swal.fire(
            '¡Articulo creado!',
            'El articulo se ha creado exitosamente',
            'success'
          );

          this._ruter.navigate(['/blog'])
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

  imageUpload(data) {
    let image_data = data.body.image
    //alert(data.body.image)
    this.article.image = image_data; //lo que se hace es subir el archivo, recoger el nombre del archivo subido adjuntarlo dentro del objeto del articulo incrustarlo dentro de la proiedad image y asi ya lo tengo guardado como tal, entonces cuando se cree un articulo ya se tiene la imagen vinculada comotal 
  }

}
