import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', power: 'Kills with kindness' },
      { id: 12, name: 'Narco', power: 'Generates illicit drugs at will' },
      { id: 13, name: 'Bombasto', power: 'Explosions and bombs and stuff' },
      { id: 14, name: 'Celeritas', power: 'Rejuvenative powers' },
      { id: 15, name: 'Magneta', power: 'Like Magneto, but a badass woman' },
      { id: 16, name: 'RubberMan', power: 'Extremely elastic and mobile' },
      {
        id: 17,
        name: 'Dynama',
        power: `Bombasto and Magma's daughter, lot of fire and explosions`,
      },
      { id: 19, name: 'Magma', power: 'Fire and flames and hot stuff' },
      { id: 20, name: 'Tornado', power: 'Pretty self-explanatory' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
