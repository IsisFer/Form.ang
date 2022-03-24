import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DadosComponent } from './dados/dados.component';



@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent  {

  DadosForm:FormGroup = new FormGroup ({

      name:new FormControl('',[
      Validators.required,
      Validators.minLength(4)
      ]),
      lastname:new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      username:new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      cpf:new FormControl('',[
        Validators.required,
        Validators.minLength(11)
      ]),
      endereco:new FormControl('',[
        Validators.required,
      ]),
      complemento:new FormControl('',[
        Validators.required,
      ]),
      senha:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      senha2:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      telefone:new FormControl ('',[
         Validators.required,
         Validators.minLength(11)
      ])

  })

  Name:FormControl = new FormControl('')
  Lastname: FormControl = new FormControl('')
  CPF: FormControl = new FormControl('')
  Endereco: FormControl = new FormControl('')
  Sobrenome: FormControl = new FormControl('')
  Username: FormControl = new FormControl('')
  Complemento: FormControl = new FormControl('')
  Senha:FormControl = new FormControl('')
  Senha2:FormControl = new FormControl('')
  Telefone:FormControl = new FormControl('')

  ngOnInit() {

  }

  constructor (
    public dialog: MatDialog
  ){}

  MostrarDados(): void {
    let usu = this.dialog.open(DadosComponent)

    usu.componentInstance.name =this.Name.value
    usu.componentInstance.lastname =this.Lastname.value
    usu.componentInstance.cpf =this.CPF.value
    usu.componentInstance.complemento =this.Complemento.value
    usu.componentInstance.endereco =this.Endereco.value
    usu.componentInstance.sobrenome =this.Sobrenome.value
    usu.componentInstance.username =this.Username.value
    usu.componentInstance.senha =this.Senha.value
    usu.componentInstance.senha2 =this.Senha2.value
    usu.componentInstance.telefone =this.Telefone.value

  }

  EnviarForm(senha1: string, senha2: string): void {
    if (senha1 === senha2) {
      alert ( 'Formulário enviado')
   } else {
     alert('Senhas Incorretas')
    }
  }


}
