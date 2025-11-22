import { Controller, Get, Req, Res, HttpCode } from '@nestjs/common';
import type { Request, Response } from 'express';

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
}
