import { Component, OnInit } from '@angular/core';
import { TechSkillService } from '../../tech-skill.service';
import { TechItem } from '../../technologies'

@Component({
  selector: 'app-using',
  templateUrl: './using.component.html',
  styleUrls: ['./using.component.css'],
  providers: [TechSkillService]
})

export class UsingComponent implements OnInit {

  skills:TechItem[] = [];

  constructor(private techSkillService:TechSkillService) { }

  getTechSkills(): void {
    this.skills = this.techSkillService.getSkills();
  }

  ngOnInit(): void {
    this.getTechSkills();
  }

}
