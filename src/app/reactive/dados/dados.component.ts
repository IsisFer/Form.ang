import { FormControl, FormGroup } from '@angular/forms';

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveComponent } from '../reactive.component';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent  {
      name:string = ''
      lastname:string = ''
      username: string = ''
      cpf: string = ''
      endereco:string = ''
      complemento:string = ''
      senha:string = ''
      senha2:string = ''
      telefone:string = ''
      sobrenome:string = ''

  constructor(
    public dialogRef: MatDialogRef<DadosComponent>,
  ) {}

}
