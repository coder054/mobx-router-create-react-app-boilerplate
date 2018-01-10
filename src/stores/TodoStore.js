import { observable, action, computed } from 'mobx';

var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};


export class TodoStore {

    @observable todos = [
        {
            id: ID(),
            name: 'Learn Mobx',
            done: false
        },
        {
            id: ID(),
            name: 'Eat lunch',
            done: true
        }
    ];


    @computed get completedTodosCount() {
        return this.todos.filter(todo => todo.done === true).length
    };


    @action addTodo(name) {
        this.todos.push({
            id: ID(),
            name,
            done: false
        })
    }

    @action deleteTodo(id){
        var newtodosList = this.todos.filter(val => val.id !== id)
        this.todos = newtodosList
    }

    @action toggleTodoStatus(id){
       this.todos.map(val => {
           if(val.id === id){
               val.done = !val.done
           }
           return val
       })
    }
}

export default new TodoStore();
