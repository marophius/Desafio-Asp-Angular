import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Colaborador } from '../models/colaborador.model'; import { ColaboradorService } from '../services/colaborador.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-colaborador-form',
  templateUrl: './colaborador-form.component.html',
  styleUrls: ['./colaborador-form.component.scss']
})
export class ColaboradorFormComponent implements OnInit {

  public colaborador: Colaborador = {};
  public mensagem: string;

  constructor(private colaboradorService: ColaboradorService, private router: Router) { }

   ngOnInit(): void {
    // this.colaborador.dataNascimento.toDateString();
  }

  public cadastrar() {
    this.colaboradorService.cadastrar(this.colaborador).subscribe(colaboradorJson => {
      // colaboradorJson.dataNascimento.toDateString();
      console.log(colaboradorJson);
      this.router.navigate(['/']);
    },
    e => {
      console.log(e.error);
      this.mensagem = e.error;
    }
    );
  }

  public limpar(): void {

  }

}
