import { Pipe, PipeTransform } from '@angular/core';
import { IProductos } from './productos';

@Pipe({
  name: 'productoFilter'
})
export class ProductoFilterPipe implements PipeTransform {

  transform(value: IProductos[], args:string): IProductos[] {
    //le pasamos lo que escribimos en el input de filtro y lo convierte en minusculas, si es que tiene texto
    let filter:string=args ? args.toLocaleLowerCase():"";
    //regresda el objeto de IProductos por marca (que se convierte en minuscula), y va a regresar el index
    return filter ? value.filter((product:IProductos)=>product.Marca.toLocaleLowerCase().indexOf(filter)!=-1):value;
  }

}
