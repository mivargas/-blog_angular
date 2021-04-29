import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public url:string;

  @Input() articles:Article[] //no se crea un arreglo con datos en el constructor porque ya hay un servicio programado en el backed

  constructor() {
    this.url = Global.url;
   }

  ngOnInit(): void {

  }

}
