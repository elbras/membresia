import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosMembroComponent } from './dados-membro/dados-membro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DadosMembroComponent],
  exports: [DadosMembroComponent]
})
export class MembroModule { }
