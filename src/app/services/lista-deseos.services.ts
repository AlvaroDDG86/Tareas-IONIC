import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';


@Injectable()
export class ListaDeseosService{

    listas: Lista[] = [];
    constructor(){
        this.cargarData();
        console.log("Servicio inicializado");
    }

    actualizarData(){
        localStorage.setItem("data", JSON.stringify(this.listas));
    }
    cargarData(){
        if(localStorage.getItem("data")){
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
    }
    agregarLista(lista: Lista){
        this.listas.push(lista);
        this.actualizarData();
    }
    eliminarLista(lista: Lista){
        let index = this.listas.indexOf(lista);
        if (index > -1){
            console.log(this.listas.splice(index, 1));
        }
        this.actualizarData();
    }
}