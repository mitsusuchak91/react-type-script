class Todo {    
    id: string;   //in JS we didn't define this types of id and text
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}
export default Todo;