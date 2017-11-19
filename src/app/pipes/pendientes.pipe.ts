import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pendientes',
    pure: false
})
export class PendientesPipe implements PipeTransform {
  transform(listas: any[] , estado:boolean = false): any[] {
    let nuevaLista:any[] = [];

    for (var lista of listas) {
        if (lista.terminada == estado){
            console.log(lista.terminada, lista.nombre);
            nuevaLista.push(lista);     
        }
    }

    return nuevaLista;
  }
}