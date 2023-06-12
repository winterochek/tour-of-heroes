import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/interfaces';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    const id = Number(paramId);
    this.heroService.getHero(id).subscribe(data => this.hero = data)
  }

  goBack(): void {
    this.location.back()
  }
}
