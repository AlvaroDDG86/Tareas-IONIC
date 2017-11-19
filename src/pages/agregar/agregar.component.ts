import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarPage {
  nombreLista:string = "";
  nombreItem:string = "";
  items:ListaItem[] = [];
  constructor(public navCtrl: NavController, private _listaDeseosService:ListaDeseosService, public alertCtrl: AlertController) {

      }
    agregar(){
      if(this.nombreItem.length == 0){
        return;
      }
      let item = new ListaItem();
      item.nombre = this.nombreItem;
      this.items.push(item);
      this.nombreItem = "";
    }
    eliminar(id:number){
      this.items.splice(id,1);
    }
    guardarLista(){
      if(this.nombreLista.length == 0){
        let alert = this.alertCtrl.create({
          title: 'Nombre requerido',
          subTitle: 'Ingrese un nombre válido para agregar la lista',
          buttons: ['OK']
        });
        alert.present();
        return;
      }

      let lista = new Lista(this.nombreLista);
      lista.items = this.items;
      this._listaDeseosService.agregarLista(lista);
      this.navCtrl.pop();
    }
}
