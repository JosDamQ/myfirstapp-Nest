import { Injectable } from '@nestjs/common';


@Injectable()
export class UsersService {

    private users: Array<{id: number, name: string, phone: string}> = [
        {
            id: 1,
            name: 'John Doe',
            phone: "123456789"
        },
        {
            id: 2,
            name: 'Jane Smith',
            phone: "987654321"
        },
    ];

    getAllUsers(): Array<{id: number, name: string, phone: string}> {
        return this.users;
    }
}
