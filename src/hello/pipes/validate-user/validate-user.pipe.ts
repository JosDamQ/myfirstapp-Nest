import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    //console.log(`Value: ${value}, Metadata: ${metadata}`)
    console.log('Value', value);
    const age = parseInt(value.age.toString(), 10);

    if (isNaN(age)) throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);

    value.age = age;

    return value;
  }
}
