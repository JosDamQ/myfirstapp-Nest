import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller('hello')
export class HelloController {

    @Get('/')
    getHello(@Req() req: Request, @Res() res: Response) {
        console.log(req.url);
        return res.status(200).send({ message: 'Hello, World!' });
    }
}
