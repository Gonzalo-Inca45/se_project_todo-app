class TodoCounter {
  constructor(counterSelector) {
    this._counterElement = document.querySelector(counterSelector);
    this._total = 0;
    this._completed = 0;
  }

  updateCompleted(value) {
    this._completed += value;
    this._updateText();
  }

  updateTotal(value) {
    this._total += value;
    this._updateText();
  }

  _updateText() {
    this._counterElement.textContent = `${this._completed}/${this._total} Completed`;
  }
}

export default TodoCounter;
