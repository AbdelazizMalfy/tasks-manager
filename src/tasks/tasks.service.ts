import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create.task.dto';
import { GetTaskFilterDto } from './dto/get-filtered-tasks.dto';

@Injectable()
export class TasksService {
    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }


    // getFilteredTask(filterDto: GetTaskFilterDto): Task[] {
    //     let tasks = this.getAllTasks();

    //     const { status , search } = filterDto;

    //     if(status){
    //         tasks = tasks.filter( task => task.status === status)
    //     }

    //     if(search){
    //         tasks = tasks.filter( task => 
    //           task.title.includes(search) ||
    //           task.description.includes(search)  
    //         );
    //     }

    //     return tasks;
    // }

    // getTaskById(id:string): Task {
    //     const found = this.tasks.find(task => task.id === id);

    //     if(!found){
    //         throw new NotFoundException(`Task with id '${id}' is not found`);
    //     }

    //     return found;
    // }


    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const {title,description} = createTaskDto;
        
    //     const task: Task ={
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     }

    //     this.tasks.push(task);
    //     return task;

    // }


    // deleteTask(id:string): void {
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter(task => task.id !== found.id)
    // }

    // updateTaskStatus(id:string, status:TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     console.log(task)
    //     task.status = status;
    //     return task;
    // }
}
