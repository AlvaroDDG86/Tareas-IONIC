import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.component.html'
})
export class DetallePage {
  idx:number;
  lista:any;
  constructor(public _navCtrl: NavController, 
        public _navParams:NavParams,
        private _listaDeseosService:ListaDeseosService, 
        public alertCtrl: AlertController) {
            this.idx=this._navParams.get("index");
            this.lista=this._navParams.get("lista");
      }

      actualizar(item:ListaItem){
          item.completado = !item.completado;
          let todosMarcados = true;
          for (var L of this.lista.items) {
            if(!L.completado){
              todosMarcados = false;
              break;
            }
          }
          this.lista.terminada = todosMarcados;
          this._listaDeseosService.actualizarData();
      }
      
      borrarLista(){
        let confirm = this.alertCtrl.create({
          title: 'Borrar lista',
          message: '¿Deseas eliminar la lista de forma permanente?',
          buttons: [
            {
              text: 'Cancelar',
              handler: () => {
                  return;
              }
            },
            {
              text: 'Aceptar',
              handler: () => {
                this._listaDeseosService.eliminarLista(this.lista);
                this._navCtrl.pop();
              }
            }
          ]
        });
        confirm.present();
      }
}
