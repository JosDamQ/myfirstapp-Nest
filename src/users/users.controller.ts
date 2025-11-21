import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('/')
    getAllUsers(): Array<{id: number, name: string, phone: string}> {
        return this.usersService.getAllUsers();
    }
}
