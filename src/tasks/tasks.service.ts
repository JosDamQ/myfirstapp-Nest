import { Injectable, NotFoundException } from '@nestjs/common';

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

    createTask(data: Task): Task {
        this.tasks.push(data);
        //console.log(this.tasks);
        return data
    }

    getById(id: number) {
        const task = this.tasks.find(task => task.id === id );
        if (!task) return new NotFoundException('Task not found');
        return task;
    }
    
}