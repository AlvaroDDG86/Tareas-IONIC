import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { AgregarPage } from '../agregar/agregar.component';
import { DetallePage } from '../detalle/detalle.component';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {
  constructor(public navCtrl: NavController, private _listaDeseosService:ListaDeseosService) {
      

    }

    irAgregar(){
      this.navCtrl.push(AgregarPage);
    }

    verDetalle(lista, index){
      this.navCtrl.push(DetallePage,{lista, index});
    }
}
