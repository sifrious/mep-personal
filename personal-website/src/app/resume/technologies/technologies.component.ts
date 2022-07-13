import { Component, OnInit } from '@angular/core';

import { TechSkillService } from 'src/app/tech-skill.service';
import { TechItem } from '../technologies';

@Component({
  selector: 'resume-tech',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  providers: [TechSkillService]
})

export class TechComponent implements OnInit {
  
  skill_levels:{[key:string]:Array<TechItem>};
  intermediate_string:String;
  hobbyist_string:String;
  interest_string:String;

  constructor(private techSkillService:TechSkillService) {
    this.skill_levels = this.techSkillService.getLevelSkills();
    this.intermediate_string = this.formSkillString(this.skill_levels["intermediate"]);
    this.hobbyist_string = this.formSkillString(this.skill_levels["hobbyist"]);
    this.interest_string = this.formSkillString(this.skill_levels["interest"]);
  };

  formSkillString(skill_list:TechItem[]) {
    var skill_string:String = ''
    for (let skill of skill_list) {
      skill_string += skill.name + ", ";
    }
    return skill_string.slice(0, -2);
  }

  getLevelSkills(): void {
    this.skill_levels = this.techSkillService.getLevelSkills();
  }

  ngOnInit(): void {
    this.getLevelSkills();
  };
}