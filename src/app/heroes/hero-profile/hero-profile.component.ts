import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IHero} from '../../common/models/hero';
import {HeroesService} from '../../common/services/heros/heroes.service';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements OnInit {
  hero: IHero;
  dataLoaded = false;
  dataFound: boolean;

  constructor(private route: ActivatedRoute, private heroesService: HeroesService) {
  }

  ngOnInit() {
    const heroId = this.route.snapshot.params.id;
    this.heroesService.getHeroById(heroId).subscribe(response => {
      this.dataLoaded = true;
      if (response) {
        this.hero = response;
        this.dataFound = true;
      }
    });
  }

}
