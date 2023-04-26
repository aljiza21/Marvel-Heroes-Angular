import { Component } from '@angular/core';
import { Heroes } from 'src/app/Interface/heroes';
import { HEROES } from 'src/app/Mock-data/mock-heroes';


@Component({
  selector: 'app-heroes-lists',
  templateUrl: './heroes-lists.component.html',
  styleUrls: ['./heroes-lists.component.css']
})
export class HeroesListsComponent {
  
  heroes = HEROES;

  hero : Heroes = {
    id: 1,
    name: 'Iron Man'
  }

  selectedHero?: Heroes;
  onSelect(hero: Heroes): void {
    this.selectedHero = hero;
  }
  
}
