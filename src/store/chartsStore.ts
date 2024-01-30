import {makeAutoObservable, observable} from 'mobx';

export class ChartsStore {
  items: number[] = [];
  isConnect: boolean = true;
  score: number = 1000;

  constructor() {
    makeAutoObservable(
      this,
      {items: observable, isConnect: observable, score: observable},
      {autoBind: true},
    );
  }

  add(item: number) {
    this.items.push(item);
    if (this.items.length > 30) {
      this.items.splice(0, 1);
    }
  }

  clean() {
    this.items = [];
    this.isConnect = false;
  }

  onConnect() {
    this.isConnect = true;
  }

  toggleScore() {
    this.score = this.score === 0 ? 1000 : 0;
  }

  get charts() {
    return this.items;
  }

  get connect() {
    return this.isConnect;
  }

  get scoreValue() {
    return this.score;
  }
}

export const chartsStore = new ChartsStore();
