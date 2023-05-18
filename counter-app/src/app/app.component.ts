import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';

  //counter number variable default
  countNumber = 0;

  //reset button function
  resetBtn() {
    this.countNumber = 0;
  }

  //increase button function
  increaseBtn() {
    this.countNumber = this.countNumber + 1;
  }

  //decrease button function
  decreaseBtn() {
    this.countNumber = this.countNumber - 1;
  }
}
