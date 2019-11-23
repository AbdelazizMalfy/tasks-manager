import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'fifa@2019',
    database: 'task-manager',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};