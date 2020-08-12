import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';
import { Equipe } from '../models/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { ColaboradorService } from '../services/colaborador.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponent implements OnInit {

  equipes: Equipe[];
  colaboradores: Colaborador[];

  constructor(private equipeService: EquipeService, private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.equipeService.obterTodas().subscribe(equipes => this.equipes = equipes);
    this.colaboradorService.obterTodos().subscribe(colaboradores => this.colaboradores = colaboradores);
  }

}
