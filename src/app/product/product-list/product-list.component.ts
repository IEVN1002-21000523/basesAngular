import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productos:any[]=[
    {
      "producto":1,
      "Modelo":"Sentra",
      "Descripcion":"a puertas",
      "Precio":2000,
      "year":2023,
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenURL":""
    },
    {
      "producto":2,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio":2000,
      "year":2023,
      "Marca":"NISSAN",
      "Color":"Negro",
      "ImagenURL":""
    },
    {
      "producto":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio":23000,
      "year":2020,
      "Marca":"KIA",
      "Color":"Rojo",
      "ImagenURL":""
    },
  ]
}
