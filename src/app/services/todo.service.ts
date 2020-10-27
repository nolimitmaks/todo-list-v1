import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL: string = 'https://jsonplaceholder.typicode.com/todos'
  todosLimit: string = '?_limit=5'

  constructor(
    private http: HttpClient
  ) { }

  // Get Todos
  getTodos(): Observable<Todo[]> {

    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`)
    
  }

  // Toggle Completed
  toggleCompleted(todo:Todo): Observable<any> {
    const url = `${this.todosURL}/${todo.id}`

    return this.http.put(url, todo, httpOptions)
  }


  // Delete Todo
  deleteTodo(todo:Todo): Observable<any> {
    const url = `${this.todosURL}/${todo.id}`

    return this.http.delete<Todo>(url, httpOptions)
  }

  // Add Todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosURL, todo, httpOptions)
  }
}
