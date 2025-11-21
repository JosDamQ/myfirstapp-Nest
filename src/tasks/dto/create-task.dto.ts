import { IsString, IsNumber, MinLength } from 'class-validator';

class CreateTaskDto {
    @IsNumber()
    id: number;

    @IsString()
    @MinLength(1)
    name: string;
    
    @IsString()
    @MinLength(1)
    description: string;
}

export { CreateTaskDto };