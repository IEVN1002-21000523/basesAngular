// Importamos las clases
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Decorador que define el componente
@Component({
  selector: 'app-cinepolisangular',
  templateUrl: './cinepolisangular.component.html', // Ruta del archivo HTML
  styleUrls: ['./cinepolisangular.component.css'] // Ruta del archivo CSS
})
export class CinepolisangularComponent {
  // propiedades del componente
  formulario!: FormGroup;
  valorPagar!: number;
  valorPagar1!: number;
  valorPagar2!: number;
  mensajeFinal!: string;

  
  // Método que se ejecuta cuando se inicializa el componente
  ngOnInit(): void {
    // Inicializamos el formulario reactivo y definimos sus controles y validaciones
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required), // Control para el nombre, requerido
      cantCompradores: new FormControl('', Validators.required), // Control para cantidad de compradores, requerido
      tarjeta: new FormControl('', Validators.required), // Control para selección de tarjeta, requerido
      cantBoletos: new FormControl('', Validators.required), // Control para cantidad de boletos, requerido
    });
  }

  // Método que se llama al realizar la compra
  realizarCompra(): void {
    // Obtenemos los valores de los controles del formulario
    let nombre = this.formulario.get('nombre')?.value; // Nombre del comprador
    let cantCompradores = parseInt(this.formulario.get('cantCompradores')?.value); // Cantidad de compradores
    let tarjeta = parseInt(this.formulario.get('tarjeta')?.value); // Valor de la tarjeta (1 o 2)
    let cantBoletos = parseInt(this.formulario.get('cantBoletos')?.value); // Cantidad de boletos a comprar

    // Lógica para calcular el costo basado en las reglas definidas
    if (cantCompradores == 1 && cantBoletos <= 7) {
      // Regla para un solo comprador y hasta 7 boletos
      if (cantBoletos >= 5) {
        // Si compra 5 o más boletos
        if (tarjeta == 1) {
          // Si tiene tarjeta
          this.valorPagar = cantBoletos * 12; // Costo total sin descuento
          this.valorPagar1 = this.valorPagar * 0.235; // Descuento del 23.5%
          this.valorPagar2 = this.valorPagar - this.valorPagar1; // Precio final después del descuento
        } else if (tarjeta == 2) {
          // Si no tiene tarjeta
          this.valorPagar = cantBoletos * 12; // Costo total sin descuento
          this.valorPagar1 = this.valorPagar * 0.135; // Descuento del 13.5%
          this.valorPagar2 = this.valorPagar - this.valorPagar1; // Precio final
        }
      } else if (cantBoletos >= 3) {
        // Si compra entre 3 y 4 boletos
        if (tarjeta == 1) {
          this.valorPagar = cantBoletos * 12; // Costo total
          this.valorPagar1 = this.valorPagar * 0.20; // Descuento del 20%
          this.valorPagar2 = this.valorPagar - this.valorPagar1; // Precio final
        } else if (tarjeta == 2) {
          this.valorPagar = cantBoletos * 12; // Costo total
          this.valorPagar1 = this.valorPagar * 0.10; // Descuento del 10%
          this.valorPagar2 = this.valorPagar - this.valorPagar1; // Precio final
        }
      } else if (cantBoletos <= 2) {
        // Si compra 1 o 2 boletos
        if (tarjeta == 1) {
          this.valorPagar = cantBoletos * 12; // Costo total
          this.valorPagar1 = this.valorPagar * 0.10; // Descuento del 10%
          this.valorPagar2 = this.valorPagar - this.valorPagar1; // Precio final
        } else if (tarjeta == 2) {
          this.valorPagar1 = cantBoletos * 12; // Costo total
          this.valorPagar2 = this.valorPagar1; // Sin descuento
        }
      }
    } else if (cantCompradores == 1 && cantBoletos >= 7) {
      // Si una persona intenta comprar más de 7 boletos
      this.mensajeFinal = "No se puede que una persona compre más de 7 boletos."; // Mensaje de error
      return; // Salimos de la función
    } else if (cantCompradores >= 2) {
      // Si hay dos o más compradores
      if (cantBoletos > 5) {
        // Si compran más de 5 boletos
        if (tarjeta == 1) {
          this.valorPagar = cantBoletos * 12; // Costo total
          this.valorPagar1 = this.valorPagar * 0.235; // Descuento del 23.5%
          this.valorPagar2 = this.valorPagar - this.valorPagar1; // Precio final
        } else if (tarjeta == 2) {
          this.valorPagar = cantBoletos * 12; // Costo total
          this.valorPagar1 = this.valorPagar * 0.15; // Descuento del 15%
          this.valorPagar2 = this.valorPagar - this.valorPagar1; // Precio final
        }
      } else if (cantBoletos >= 3) {
        // Si compran entre 3 y 5 boletos
        if (tarjeta == 1) {
          this.valorPagar = cantBoletos * 12; // Costo total
          this.valorPagar1 = this.valorPagar * 0.20; // Descuento del 20%
          this.valorPagar2 = this.valorPagar - this.valorPagar1; // Precio final
        } else if (tarjeta == 2) {
          this.valorPagar = cantBoletos * 12; // Costo total
          this.valorPagar1 = this.valorPagar * 0.10; // Descuento del 10%
          this.valorPagar2 = this.valorPagar - this.valorPagar1; // Precio final
        }
      } else if (cantBoletos <= 2) {
        // Si compran 1 o 2 boletos
        if (tarjeta == 1) {
          this.valorPagar = cantBoletos * 12; // Costo total
          this.valorPagar1 = this.valorPagar * 0.10; // Descuento del 10%
          this.valorPagar2 = this.valorPagar - this.valorPagar1; // Precio final
        } else if (tarjeta == 2) {
          this.valorPagar1 = cantBoletos * 12; // Costo total
          this.valorPagar2 = this.valorPagar1; // Sin descuento
        }
      }
    }

    // Mensaje final basado en si el usuario tiene tarjeta o no
    if (tarjeta === 1) {
      this.mensajeFinal = `Hola ${nombre}, compraste ${cantBoletos} boletos. El costo es de ${this.valorPagar2.toFixed(2)} pesos mexicanos ya que tienes la tarjeta CINEANG.`;
    } else if (tarjeta === 2) {
      this.mensajeFinal = `Hola ${nombre}, compraste ${cantBoletos} boletos. El costo es de ${this.valorPagar2.toFixed(2)} pesos mexicanos ya que no tienes la tarjeta CINEANG.`;
    }
  }
}
