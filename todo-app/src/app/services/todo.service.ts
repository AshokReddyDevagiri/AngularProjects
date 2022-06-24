import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] | undefined;

  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Learn C++',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '222',
        title: 'Learn React',
        isComplete: true,
        date: new Date(),
      }, 
       {
        id: '111',
        title: 'Learn Angular',
        isComplete: false,
        date: new Date(),
      }
    ]
   }

   getTodos() {
      return of(this.todos);
   }

   addTodo(todo: Todo) {
    this.todos?.push(todo);
   }
   changeStatus(todo: Todo) {
    this.todos?.map(singleTodo =>{
      if(singleTodo.id === todo.id) {
        todo.isComplete = !todo.isComplete
      }
    })
   }

   deleteTodo(todo: Todo) {
     const indexOfTodo = this.todos?.findIndex((currentObject) => {
       currentObject.id === todo.id;
     });
     this.todos?.splice(indexOfTodo, 1)
   }
}
