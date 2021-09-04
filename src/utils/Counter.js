import { addTwoNumbers } from './math';

export default class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count = addTwoNumbers(this.count, 1);
  }
}
