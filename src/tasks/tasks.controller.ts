import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe, Query, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { GetTaskFilterDto } from './dto/get-filtered-tasks.dto';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/auth.entity';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getTask(
        @Query(ValidationPipe) filterDto : GetTaskFilterDto,
        @GetUser() user: User
        ): Promise<Task[]> {
        return this.tasksService.getTasks(filterDto,user);
    }


    @Get('/:id')
    getTaskById(
        @Param('id', ParseIntPipe) id:number,
        @GetUser() user: User
    ): Promise<Task>{
        return this.tasksService.getTaskById(id,user);
    }


    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() createTaskDto:CreateTaskDto,
        @GetUser() user: User
    ): Promise<Task> {
        return this.tasksService.createTask(createTaskDto,user);
    }


    @Delete('/:id')
    deleteTask(
        @Param('id', ParseIntPipe) id:number,
        @GetUser() user: User
        ): Promise<void> {
        return this.tasksService.deleteTask(id,user);
    }


    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id', ParseIntPipe) id:number,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus,
        @GetUser() user: User
        ): Promise<Task> {
        return this.tasksService.updateTaskStatus(id,status,user);
    }
}
