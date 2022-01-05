import { Component } from '@angular/core';

@Component({
  selector: 'test1',
  styles: [
    `
    .wrong {
        font-size: 12pt;
        color: red;
    }

    .correct {
      font-size: 12pt;
      color: green;
    }

    .nomarks{
      font-size: 12pt;
      color: black;
    }
  `,
  ],
  template: `
    <div class="row">
    <div class="col-12" *ngFor="let question of questions; let qi = index;">
    <div class = "card mt-2 mb-2">
      <div class="card-header">
        {{question.statement}}
      </div>
      <div class="card-body">
        <label>
          <input type="radio" [value]="1" name="option_{{qi}}" [(ngModel)]="question.userSelectedOption"
          [disabled] = "isTestOver"/>
          {{question.option1}}
          <span *ngIf="isTestOver">
            <span *ngIf="question.correctAnswer === 1" class="correct">
              Correct
            </span>

            <span *ngIf="question.correctAnswer === 1 && question.userSelectedOption === 1" class="correct">
              + {{question.marks}}
            </span>


            <span *ngIf="question.correctAnswer !== 1 && question.userSelectedOption === 1" class="wrong">
              Wrong
            </span>

          </span>
        </label>
      </div>
      <div class="card-body">
        <label>  
          <input type="radio" [value]="2" name="option_{{qi}}" [(ngModel)]="question.userSelectedOption" [disabled] = "isTestOver">
          {{question.option2}}
          <span *ngIf="isTestOver">
            <span *ngIf="question.correctAnswer === 2" class="correct">
              Correct
            </span>
            <span *ngIf="question.correctAnswer === 2 && question.userSelectedOption === 2" class="correct">
            + {{question.marks}}
            </span>

            <span *ngIf="question.correctAnswer !== 2 && question.userSelectedOption == 2" class="wrong">
              Wrong
            </span>

          </span>
        </label>
      </div>
      <div class="card-body">
        <label>
          <input type="radio" [value]="3" name="option_{{qi}}" [(ngModel)]="question.userSelectedOption" [disabled] = "isTestOver">
          {{question.option3}}
          <span *ngIf="isTestOver">
            <span *ngIf="question.correctAnswer === 3" class="correct">
              Correct
            </span>
            <span *ngIf="question.correctAnswer === 3 && question.userSelectedOption === 3" class="correct">
            + {{question.marks}}  
            </span>

            <span *ngIf="question.correctAnswer !== 3 && question.userSelectedOption === 3" class="wrong">
              Wrong
            </span>

          </span>
        </label>
        </div>
      <div class="card-body">
        <label>
          <input type="radio" [value]="4" name="option_{{qi}}" [(ngModel)]="question.userSelectedOption" [disabled] = "isTestOver">
          {{question.option4}}
          <span *ngIf="isTestOver">
            <span *ngIf="question.correctAnswer === 4" class="correct">
              Correct - +{{question.marks}}
            </span>
            <span *ngIf="question.correctAnswer === 4 && question.userSelectedOption === 4" class="correct">
            + {{question.marks}}
            </span>

            <span *ngIf="question.correctAnswer !== 4 && question.userSelectedOption === 4" class="wrong">
              Wrong
            </span>
          </span>
        </label>
      </div>

      <div class="card-footer">
        Marks: {{question.marks}}
      </div>
    </div>
    </div>
    
    <div class = "row mt-2 mb-5" *ngIf="!isTestOver">
      <div class="col-12">
        <button class="btn btn-primary" (click)="finish()">Finish</button>
      </div>
    </div>

    <div class = "row mt-2 mb-5">
      <div class="col-12">
        You obtained {{userMarks}} out of {{totalMarks}}
      </div>
    </div>

    </div>
  `,
})
export class Test1Component {
  public isTestOver = false;
  public userMarks = 0;
  public totalMarks = 0;

  finish() {
    for (let question of this.questions) {
      if (question.correctAnswer === question.userSelectedOption) {
        this.userMarks += question.marks;
      }
      this.totalMarks += question.marks;
    }

    this.isTestOver = true;
  }

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
