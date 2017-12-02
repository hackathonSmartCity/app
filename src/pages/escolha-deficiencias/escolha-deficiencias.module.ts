import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscolhaDeficienciasPage } from './escolha-deficiencias';

@NgModule({
  declarations: [
    EscolhaDeficienciasPage,
  ],
  imports: [
    IonicPageModule.forChild(EscolhaDeficienciasPage),
  ],
})
export class EscolhaDeficienciasPageModule {}
