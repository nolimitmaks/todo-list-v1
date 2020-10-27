import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[]

  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit(): void {
    this._todoService.getTodos().subscribe(
      data => this.todos = data
    )
  }

  deleteTodo(todo: Todo) {

    // Remove from UI
    this.todos = this.todos.filter(
      t => t.id !== todo.id
    )

    // Remove from server
    this._todoService.deleteTodo(todo).subscribe()
    
  }

  addTodo(todo: Todo) {
    this._todoService.addTodo(todo).subscribe(
      t => this.todos.push(todo)
    )
  }

}
