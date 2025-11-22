import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
  // Los Middleware los puedo usar para validar el loggeo de usuarios por ejemplo
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // ----------------> aqui con esto le digo que para todas las rutas del controlador UsersController use el middleware
      //.forRoutes(UsersController);

      // ----------------> aqui con esto le digo que para las ruta 'users' use el middleware
      //.forRoutes('users');

      // ----------------> aqui con esto le digo rutas especificas que usen el middleware
      .forRoutes({ path: 'users', method: RequestMethod.GET });

    consumer
      .apply(AuthMiddleware)
      .forRoutes(UsersController);
  }
}
