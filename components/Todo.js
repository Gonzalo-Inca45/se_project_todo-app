class Todo {
  constructor(data, selector) {
    this._completed = data.completed;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
    this._selector = selector;
  }

  _getTemplate() {
    return document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
  }
  _generateDateEl() {
    this._dateEl = this._todoElement.querySelector(".todo__date");
    const dueDate = new Date(this._date);
    if (!isNaN(dueDate)) {
      this._dateEl.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  _generateNameEl() {
    this._nameEl = this._todoElement.querySelector(".todo__name");
    if (this._nameEl) {
      this._nameEl.textContent = this._name;
    }
  }

  generateCheckBoxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");

    this._todoCheckboxEl.checked = this._completed;
    this._todoCheckboxEl.id = `todo-${this._id}`;
    this._todoLabel.setAttribute("for", `todo-${this._id}`);
  }

  _handleDelete() {
    this._todoElement.remove();
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._completed = !this._completed;
    });

    this._deleteBtnEl.addEventListener("click", () => {
      this._handleDelete();
    });
  }

  generateCheckBoxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._completed;
    this._todoCheckboxEl.id = `todo-${this._id}`;
    this._todoLabel.setAttribute("for", `todo-${this._id}`);
  }

  getView() {
    this._todoElement = this._getTemplate();
    this._deleteBtnEl = this._todoElement.querySelector(".todo__delete-btn");
    this._generateDateEl();

    this._generateNameEl();
    this.generateCheckBoxEl();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
