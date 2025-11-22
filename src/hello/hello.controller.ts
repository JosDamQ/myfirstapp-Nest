import { Controller, Get, Req, Res, HttpCode, Param, ParseIntPipe, ParseBoolPipe, Query, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

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

    @Get('/greet')
    // Este guard lo puedo usar para validar roles por ejemplo
    @UseGuards(AuthGuard)
    // Crear pipes personalizados
    greet(@Query(ValidateUserPipe) query: { name: string, age: number }) : string {
        console.log(typeof query.age);
        console.log(typeof query.name);
        return `Hello ${query.name}, you are ${query.age} years old!`;
    }
}
