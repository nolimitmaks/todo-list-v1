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
    this.todos = this._todoService.getTodos()
  }

}
