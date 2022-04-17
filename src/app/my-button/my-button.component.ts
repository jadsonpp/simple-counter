import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  public count: number = 0;

  constructor() { }


  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  ngOnInit(): void {
  }

}
