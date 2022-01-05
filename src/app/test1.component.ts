import { Component } from '@angular/core';

@Component({
  selector: 'test1',
  template: `
  <div class="row">
  <div class="col-12" *ngFor="let question of questions; let qi = index;">
  <div class = "card mt-2 mb-2">
    <div class="card-header">
      {{question.statement}}
    </div>
    <div class="card-body">
      <label>
        <input type="radio" value="1" name="option_{{qi}}" [(ngModel)]="question.userSelectedOption"/>
        {{question.option1}}
      </label>
    </div>
    <div class="card-body">
      <label>  
        <input type="radio" value="2" name="option_{{qi}}">
        {{question.option2}}
      </label>
    </div>
    <div class="card-body">
      <label>
        <input type="radio" value="3" name="option_{{qi}}">
        {{question.option3}}
      </label>
      </div>
    <div class="card-body">
      <label>
        <input type="radio" value="4" name="option_{{qi}}">
        {{question.option4}}
      </label>
    </div>

    <div class="card-footer">
      Marks: {{question.marks}}
    </div>
  </div>
  </div>
  </div>
  `,
})
export class Test1Component {
  public questions = [
    {
      statement: 'AAA',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
      userSelectedOption: 0,
    },
    {
      statement: 'BBB',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
      userSelectedOption: 0,

    },
    {
      statement: 'CCC',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
      userSelectedOption: 0,
    },
    {
      statement: 'DDD',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
      userSelectedOption: 0,
    },
    {
      statement: 'EEE',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
      userSelectedOption: 0,
    },
    {
      statement: 'AAA',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
      userSelectedOption: 0,
    },
  ];
}
