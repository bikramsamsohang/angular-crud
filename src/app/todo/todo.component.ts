import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() public todo: Todo;
  @Input() public delete: Function;
  @Input() public edit: Function;
  showEdit: boolean;
  task: string;

  constructor() { }

  editTask = ()=> {
    if(this.showEdit) {
      this.showEdit = false;
      this.edit(this.task, this.todo.id);
    }
    else {
      this.showEdit = true;
    }
  }

  ngOnInit() {
    this.task = this.todo.task;
    this.showEdit = false;
  }

}
