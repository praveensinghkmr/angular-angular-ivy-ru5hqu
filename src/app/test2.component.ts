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
  styles: [
    `
    .wrong {
        font-size: 8pt,
        color: red;
    }

    .correct {
      font-size: 8pt;
      color: green;
    }

    .nomarks{
      font-size: 8pt;
      color:yellow:
    }
  `,
  ],

  template: `
  <div class="row">
    <!--ng-container *ngIf="!isTestOver"-->
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
            <span *ngIf="isTestOver">
              <span *ngIf="option.isCorrect && option.hasUserSelected" class = "correct">
                  Correct - +{{option.marks}}
              </span>

              <span *ngIf="!option.isCorrect && option.hasUserSelected" class = "wrong">
                Wrong: -{{option.marks}}
              </span>

              <span *ngIf="!option.hasUserSelected" class = "nomarks">
                Not Attempted. 0 Marks. 
              </span>
            </span>
          </label>
        </div>
      </div>    
    </div>
    <!--/ng-container-->

    <div class="col-12">
      <button class="btn btn-primary" (click)="finish()">Finish</button>
    </div>
    <div class="col-12" *ngIf="isTestOver">
      <div class="card">
        <div class="card-header">
          Test Result
        </div>

        <div class="card-body">
          You obtained {{userMarks}} out of {{totalMarks}}
        </div>
      </div>
    </div>

    
  </div>
  `,
})
export class Test2Component {
  public isTestOver = false;
  public userMarks = 0;
  public totalMarks = 0;

  public finish(/* this = reference of an object*/) {
    this.userMarks = 0;
    for (let question of this.questions) {
      for (let option of question.options) {
        if (option.isCorrect && option.hasUserSelected) {
          this.userMarks += option.marks;
        } else if (!option.isCorrect && option.hasUserSelected) {
          this.userMarks -= option.marks;
        }
        //if (option.isCorrect) {
        this.totalMarks += option.marks;
        //}
      }
    }

    this.isTestOver = true;
  }
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
