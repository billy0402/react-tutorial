import { addTwoNumbers } from './math';

export default class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count = addTwoNumbers(this.count, 1);
  }

  async setCountFromDatabase() {
    const response = await fetch('https://url/count');
    const { count } = await response.json();
    this.count = count;
  }
}
