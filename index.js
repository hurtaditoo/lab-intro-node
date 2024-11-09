class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items); // Separa cada nº del array y los va ordenando
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items); // Separa cada nº del array y los va ordenando
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
