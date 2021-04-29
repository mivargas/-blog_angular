import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() nombreSlider:string; //decoedor para recibir un componente (la posivilidad de variar el slider dependiendo de la pagina) propiedad input recibe del componente padre
  @Input() sizeSlider:string; //Necesario declarar este decorador para poder comprobar en el slider si va  a mostarse el grande o el pequeños
  constructor() { }

  ngOnInit(): void {
  }

}
