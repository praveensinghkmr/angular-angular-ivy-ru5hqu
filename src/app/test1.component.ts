import { Component } from '@angular/core';

@Component({
  selector: 'test1',
  template: `
  <div class="row">
  <div class="col-12" *ngFor="let question of questions">
  <div class = "card mt-2 mb-2">
    <div class="card-header">
      {{question.statement}}
    </div>
    <div class="card-body">
      <input type="radio" value="1">
      {{question.option1}}
    </div>
    <div class="card-body">
      <input type="radio" value="2">
      {{question.option2}}
    </div>
    <div class="card-body">
      <input type="radio" value="3">
      {{question.option3}}
      </div>
    <div class="card-body">
      <input type="radio" value="4">
      {{question.option4}}
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
    },
    {
      statement: 'BBB',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
    },
    {
      statement: 'CCC',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
    },
    {
      statement: 'DDD',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
    },
    {
      statement: 'EEE',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
    },
    {
      statement: 'AAA',
      option1: 'A1',
      option2: 'A2',
      option3: 'A3',
      option4: 'A4',
      correctAnswer: 1,
      marks: 5,
    },
  ];
}
