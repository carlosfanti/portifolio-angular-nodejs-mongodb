import { Component, OnInit, Input } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-cv-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skills: any;

  constructor() { }

  ngOnInit() {
  }

  onClickSkill(cls: String){
    $('.skillsItens').addClass('d-none');
    $('.skills_'+cls).removeClass('d-none');
    $('.navSkill-item').removeClass('active');
    $(this).addClass('active');
  }
}
