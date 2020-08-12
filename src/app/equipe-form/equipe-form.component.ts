import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';
import { Equipe } from '../models/equipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe-form',
  templateUrl: './equipe-form.component.html',
  styleUrls: ['./equipe-form.component.scss']
})
export class EquipeFormComponent implements OnInit {

  public equipe: Equipe = {};
  public mensagem: string;

  constructor(private equipeService: EquipeService, private router: Router) { }

  ngOnInit(): void {

  }

  public cadastrar() {
    this.equipeService.cadastrar(this.equipe).subscribe(equipe => {
      console.log(equipe);
      this.router.navigate(['/cadastrarEquipe']);
      this.clear();
    },
    e => {
      console.log(e.error);
      this.mensagem = e.error;
    });
  }

  public clear() {
    this.equipe.nomeEquipe = '';
    this.equipe.nomeGestor = '';
  }

}
