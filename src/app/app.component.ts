import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Maria';
  age = 18;
  img = "https://phantom-marca.unidadeditorial.es/8d51e0bba2ea50747296c499719750b9/resize/660/f/webp/assets/multimedia/imagenes/2021/08/11/16286724786905.jpg"
  btnDisabled = true

  persona = {
    name: 'Selena Gomez',
    age : 29,
    avatar :"https://phantom-marca.unidadeditorial.es/8d51e0bba2ea50747296c499719750b9/resize/660/f/webp/assets/multimedia/imagenes/2021/08/11/16286724786905.jpg"
  }

}
