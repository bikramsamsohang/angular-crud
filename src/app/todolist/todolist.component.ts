import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todos = [];
  public task = '';

  constructor(private todoService: TodoService) { }

  delete = (todo)=> {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  edit = (task, id)=> {
    this.todos.forEach(todo => {
      if(todo.id === id) {
        todo.task = task;
      }
    });
  }

  add = ()=> {console.log(this.task)
    this.todos.push({
      id: this.todos[this.todos.length - 1].id + 1,
      task: this.task
    });
    this.task = '';    
  }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(data => {
        this.todos = data;
      });
  }

}
