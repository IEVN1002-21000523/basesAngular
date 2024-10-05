
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-resistenciasangular',
  templateUrl: './resistenciasangular.component.html',
  styleUrls: ['./resistenciasangular.component.css'] 
})

// Definición de la clase del componente
export class ResistenciasangularComponent {
  // Definición de las propiedades del componente
  resistencia!: FormGroup; // Formulario reactivo para seleccionar colores y tolerancia
  valor!: number; // Valor calculado de la resistencia
  valorMax!: number; // Valor máximo con tolerancia
  valorMin!: number; // Valor mínimo con tolerancia
  color1Seleccionado!: string; // Primer color seleccionado
  color2Seleccionado!: string; // Segundo color seleccionado
  color3Seleccionado!: string; // Tercer color seleccionado
  toleranciaSeleccionada!: string; // Tolerancia seleccionada

  // Arreglo que contiene los colores posibles para las bandas de la resistencia
  colores: string[] = ['Negro', 'Cafe', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Morado', 'Gris', 'Blanco'];

  // Constructor de la clase (no hace nada por ahora)
  constructor() { }

  // Método que se ejecuta cuando se inicializa el componente
  ngOnInit(): void {
    // Inicialización del formulario con los valores por defecto para cada color y la tolerancia
    this.resistencia = new FormGroup({
      color1: new FormControl('Negro', Validators.required), // Primer color, obligatorio
      color2: new FormControl('Negro', Validators.required), // Segundo color, obligatorio
      color3: new FormControl('Negro', Validators.required), // Tercer color, obligatorio
      tolerancia: new FormControl('Oro', Validators.required) // Tolerancia, obligatoria
    });
  }

  // Método que realiza el cálculo de la resistencia basado en los colores seleccionados
  calcular() {
    // Se obtienen los valores de los colores y la tolerancia desde el formulario, y se convierten a números
    const color1Value = this.convertirColor(this.resistencia.get('color1')?.value); // Valor del primer color
    const color2Value = this.convertirColor(this.resistencia.get('color2')?.value); // Valor del segundo color
    const color3Value = this.convertirColor(this.resistencia.get('color3')?.value); // Multiplicador (tercer color)
    const toleranciaValue = this.tolerancia(this.resistencia.get('tolerancia')?.value); // Valor de la tolerancia

    // Fórmula para calcular el valor de la resistencia
    this.valor = (color1Value * 10 + color2Value) * Math.pow(10, color3Value); // Calcula el valor nominal de la resistencia

    // Calcula el valor máximo y mínimo basado en la tolerancia
    this.valorMax = this.valor + (this.valor * toleranciaValue); // Valor máximo con tolerancia
    this.valorMin = this.valor - (this.valor * toleranciaValue); // Valor mínimo con tolerancia

    // Asigna los colores seleccionados y la tolerancia para mostrarlos en la interfaz
    this.color1Seleccionado = this.resistencia.get('color1')?.value.toLowerCase(); // Primer color en minúsculas
    this.color2Seleccionado = this.resistencia.get('color2')?.value.toLowerCase(); // Segundo color en minúsculas
    this.color3Seleccionado = this.resistencia.get('color3')?.value.toLowerCase(); // Tercer color en minúsculas
    this.toleranciaSeleccionada = this.resistencia.get('tolerancia')?.value.toLowerCase(); // Tolerancia en minúsculas
  }

  // Método que convierte el color seleccionado a su valor numérico correspondiente
  convertirColor(color: string | null): number {
    switch (color) {
      case 'Negro': return 0;
      case 'Cafe': return 1;
      case 'Rojo': return 2;
      case 'Naranja': return 3;
      case 'Amarillo': return 4;
      case 'Verde': return 5;
      case 'Azul': return 6;
      case 'Morado': return 7;
      case 'Gris': return 8;
      case 'Blanco': return 9;
      default: return 0; // Valor por defecto si no se reconoce el color
    }
  }

  // Método que convierte el valor de la tolerancia seleccionada a su porcentaje numérico
  tolerancia(tolerancia: string | null): number {
    if (tolerancia === 'Oro') return 0.05; // 5% de tolerancia
    else if (tolerancia === 'Plata') return 0.1; // 10% de tolerancia
    return 0; // Valor por defecto si no se reconoce la tolerancia
  }
}
