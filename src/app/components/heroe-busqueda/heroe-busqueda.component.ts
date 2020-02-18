import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-heroe-busqueda',
  templateUrl: './heroe-busqueda.component.html',
})
export class HeroeBusquedaComponent implements OnInit {

  heroes:Heroe[] = []
  termino:string;

  constructor(private _heroesService:HeroesService,
              private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params["termino"]);
    });
  }

  ngOnInit(): void {
  }



}
