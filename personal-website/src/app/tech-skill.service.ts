import { Injectable } from '@angular/core';
import { TechItem, techItems } from './technologies'

@Injectable({
  providedIn: 'root'
})

export class TechSkillService {

  TechSkillLevels(items:Array<TechItem>) {
    var levels:{[key:string]:Array<TechItem>} = {
    };
    for (let item of items) {
      if (item.level in levels) {
        levels[item.level].push(item);
      } else {
        levels[item.level] = [item];
      }
    }
    return levels;
  }

  getSkills(): TechItem[] {
    return techItems;
  }

  getLevelSkills():{[key:string]:Array<TechItem>} {
    return this.TechSkillLevels(techItems);
  }

  constructor() { }
}
