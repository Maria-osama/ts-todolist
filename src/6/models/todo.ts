class Todo {
    id: number;
    text: string;
    isNew: boolean;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = Math.random();
        this.isNew = true;

    }
}

export default Todo;
