import { Component } from '@angular/core';

interface Option2 {
  text: string;
  isCorrect: boolean;
  marks: number;
  hasUserSelected: boolean;
}

interface Questions2 {
  statement: string;
  options: Option2[];
}

@Component({
  selector: 'test2', // custom HTML tag.
  template: `
  <div class="row">
    <div class = "col-12" *ngFor="let question of questions">
      <div class="card mt-2 mb-2">

        <div class="card-header">
          {{question.statement}}
        </div>

        <div class="card-body" *ngFor="let option of question.options">
          <label>
            <!--Tow way data binding done using the ngModel-->
            <input type="checkbox" [(ngModel)]="option.hasUserSelected"/> 
            {{option.text}}
          </label>
        </div>
      </div>    
    </div>

    <div class="col-12">
      <button class="btn btn-primary" (click)="finish()">Finish</button>
    </div>
    
  </div>
  `,
})
export class Test2Component {
  public finish() {}
  public questions: Questions2[] = [
    {
      statement: 'AAA',
      options: [
        { text: 'A1', isCorrect: false, marks: 2, hasUserSelected: false },
        { text: 'A1', isCorrect: false, marks: 2, hasUserSelected: true },
      ],
    },
    {
      statement: 'BBB',
      options: [
        { text: 'B1', isCorrect: false, marks: 2, hasUserSelected: false },
        { text: 'B2', isCorrect: false, marks: 4, hasUserSelected: true },
        { text: 'B3', isCorrect: false, marks: 5, hasUserSelected: false },
      ],
    },
  ];
}
