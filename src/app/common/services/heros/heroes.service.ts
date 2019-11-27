import {Injectable} from '@angular/core';
import {IHero} from '../../models/hero';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() {
  }

  getHeroes(): Observable<IHero[]> {
    return of([
      {
        id: 100023,
        name: 'MR. ROBOT',
        power: 'Coding with VIM, Know Angular',
        image: 'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
        rate: 4,
        description: 'The director of the World Wide Web Consortium (W3C)'
      },
      {
        id: 100024,
        name: 'Richard Stallman', power: 'Freedom Protector', rate: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1IlctjFqct0DjZq-lVIDqeiIfFCI3YZf00dqnEHrQVYKxJVhc',
        description: 'The director of the Freedom'
      },
      {
        id: 100025,
        name: 'Tim Bernners-Lee', power: 'Transport Objects Through HTTP', rate: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1IlctjFqct0DjZq-lVIDqeiIfFCI3YZf00dqnEHrQVYKxJVhc',
        description: 'The director of Transportation'
      },
      {
        id: 100026,
        name: 'MR. Ahmed', power: 'Coding with IDE, Know Angular', rate: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1IlctjFqct0DjZq-lVIDqeiIfFCI3YZf00dqnEHrQVYKxJVhc',
        description: 'The director of Art Department'
      },
      {
        id: 100027,
        name: 'MR. Khalid', power: 'HR', rate: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1IlctjFqct0DjZq-lVIDqeiIfFCI3YZf00dqnEHrQVYKxJVhc',
        description: 'The director of HR Department'
      },
      {
        id: 100028,
        name: 'Mohammed', power: 'Superhero', rate: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1IlctjFqct0DjZq-lVIDqeiIfFCI3YZf00dqnEHrQVYKxJVhc',
        description: 'The director of all superheros'
      }
    ]);
  }

  getHeroById(id: number): Observable<IHero> {
    if (!id) {
      return of(null);
    }
    return this.getHeroes().pipe(map(data => data.filter((res: any) => {
      return res.id == id;
    })[0]));
  }
}
