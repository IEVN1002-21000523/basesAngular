import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //Añadir propiedades para css sin usar un archivo css
  imageWidth:number=60;
  imageMargin:number=2;
  //Mostrar o ocultar imagen
  muestraImg:boolean=true;
  //inicializar los filtros (aun no funciona)
  listFilter:string=''

  //metodo o que oculta la imagen
  muestImg():void{
    this.muestraImg=!this.muestraImg; //el signo ! hace que ponga el contrario del valor actual si en true pasa a false
  }

  //*ngIf=true o false validar si la lista tiene objetos
  productos:IProductos[]=[
    {
      "productoID": 1,
      "Modelo": "Sentra",
      "Descripcion": "4 puertas",
      "Precio": 20000,
      "Year": "2022",
      "Marca": "NISSAN",
      "Color": "Azul",
      "ImagenUrl": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
    },
    {
      "productoID": 2,
      "Modelo": "A4",
      "Descripcion": "4 puertas",
      "Precio": 30000,
      "Year": "2022",
      "Marca": "AUDI",
      "Color": "Blanco",
      "ImagenUrl": "https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Large/audi/a4/mx/RT_PU_4f813f5a5f4142d89f2244758c587ca0.webp"
    },
    {
      "productoID": 3,
      "Modelo": "Rio",
      "Descripcion": "4 puertas",
      "Precio": 150000,
      "Year": "2020",
      "Marca": "KIA",
      "Color": "Azul",
      "ImagenUrl": "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzE2MzM5L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzE1NjMwMTcxNjQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjU0MCwiaGVpZ2h0IjozMTB9fX0="
    }
  ]
}
