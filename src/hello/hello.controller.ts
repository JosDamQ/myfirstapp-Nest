import { Controller, Get, Req, Res, HttpCode, Param, ParseIntPipe, ParseBoolPipe, Query } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';

@Controller('hello')
export class HelloController {

    @Get('/')
    getHello(@Req() req: Request, @Res() res: Response) {
        console.log(req.url);
        return res.status(200).send({ message: 'Hello, World!' });
    }

    @Get('/new')
    @HttpCode(201)
    newHello() {
        return { message: 'Hello from the new route!' };
    }

    @Get('/not-found')
    @HttpCode(404)
    notFountPage() {
        return { message: 'Resource not found' };
    }

    @Get('/error')
    @HttpCode(500)
    errorPage() {
        return { message: 'Internal server error' };
    }

    @Get('/ticket/:number')
    getNumber(@Param('number', ParseIntPipe) number: number) : number {
        return number + 3;
    }

    @Get('/status/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean): boolean {
        console.log(typeof status);
        return status;
    }

    //Crear pipes personalizados
    @Get('/greet')
    greet(@Query(ValidateUserPipe) query: { name: string, age: number }) : string {
        console.log(typeof query.age);
        console.log(typeof query.name);
        return `Hello ${query.name}, you are ${query.age} years old!`;
    }
}
