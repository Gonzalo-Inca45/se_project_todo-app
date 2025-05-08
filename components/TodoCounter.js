class TodoCounter {
  constructor(counterSelector) {
    this._element = document.querySelector(counterSelector);
    this._completed = 0;
    this._total = 0;
    this._updateText();
  }

  updateCompleted(value) {
    this._completed = value;
    this._updateText();
  }

  updateTotal(value) {
    this._total = value;
    this._updateText();
  }

  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
