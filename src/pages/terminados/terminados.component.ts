import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { DetallePage } from '../detalle/detalle.component';

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.component.html'
})
export class TerminadosPage {

  constructor(public navCtrl: NavController, private _listaDeseosService:ListaDeseosService) {

  }
  verDetalle(lista, index){
    this.navCtrl.push(DetallePage,{lista, index});
  }
}
