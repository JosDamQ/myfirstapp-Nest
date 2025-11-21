import { Body, Controller, Delete, Param, Patch, Post, Put, Query, Res, Req } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { Request, Response } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get('/')
    getAllTasks(@Query() query: any): Array<{ id: number; name: string; description: string }> {
        console.log('Query Parameters:', query);
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Req() req: Request, @Param('id') id: string, @Res() res: Response) {
        // return this.tasksService.getById(parseInt(id));
        const task = this.tasksService.getById(parseInt(id));
        if (task instanceof Error) {
            return res.status(404).json({ statusCode: 404, message: task.message });
        }
        return res.json(task);
    }

    @Post('/')
    //@UsePipes(new ValidationPipe())
    createTask(@Body() data: CreateTaskDto) {
        console.log(data);
        return this.tasksService.createTask(data);
    }

    @Put('/:id')
    updateTask(@Param('id') id: string, @Body() data: UpdateTaskDto): string {
        return this.tasksService.updateTask(parseInt(id), data);
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