import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public stringSearch:string

  constructor(
    private _route: Router,
    private _router: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goSearch(){
    //alert(this.stringSearch)
    this._route.navigate(['/buscar', this.stringSearch])

  }

}
