import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
    id: number;
    name: string;
    description: string;
}

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(data: CreateTaskDto): Task {
        this.tasks.push(data);
        //console.log(this.tasks);
        return data
    }

    getById(id: number) {
        const task = this.tasks.find(task => task.id === id );
        if (!task) return new NotFoundException('Task not found');
        return task;
    }

    updateTask(id: number, data: UpdateTaskDto): string {
        return `Task with id ${id} updated successfully`;
    }
    
}