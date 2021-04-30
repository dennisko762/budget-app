import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss']
})
export class BudgetItemComponent implements OnInit {

  @Input() isIncome: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
