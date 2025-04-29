import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileName'
})
export class FileNamePipe implements PipeTransform {
  transform(value: string): string {
    // Usamos 'split' para separar la ruta y el nombre del archivo
    return value.split('/').pop() ?? value;  // Si no hay ruta, devuelve el valor tal cual
  }
}
