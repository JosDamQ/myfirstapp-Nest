import { Body, Controller, Delete, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get('/')
    getAllTasks(@Query() query: any): Array<{ id: number; name: string; description: string }> {
        console.log('Query Parameters:', query);
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        // return this.tasksService.getById(parseInt(id));
        const task = this.tasksService.getById(parseInt(id));
        if (task instanceof Error) {
            return { statusCode: 404, message: task.message };
        }
        return task;
    }

    @Post('/')
    createTask(@Body() data: any) {
        console.log(data);
        return this.tasksService.createTask(data);
    }

    @Put('/:id')
    updateTask(@Param('id') id: string): string {
        console.log('Updating task with id:', id);
        return 'Task updated successfully';
    }

    @Delete('/:id')
    deleteTask(): string {
        return 'Task deleted successfully';
    }

    @Patch('/:id')
    partiallyUpdateTask(): string {
        return 'Task partially updated successfully';
    }
}