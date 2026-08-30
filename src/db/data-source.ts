import 'dotenv/config';
import { Animal } from "../animals/entities/animal.entity";
import { envs } from "../config/envs";
import { DataSource, DataSourceOptions } from "typeorm";

//Conexiones a la BD
export const dataSourceOptions : DataSourceOptions = {
    host: envs.DB_HOST,
    type: 'postgres',
    database: envs.DB_NAME,
    username: envs.DB_USER,
    password: envs.DB_PASSWORD,
    port: envs.DB_PORT,
    //Definir todas las tablas de la base de datos 
    entities: [Animal], 
    //Se deja en false para que no modifiques la base de datos mientras estas codificando
    synchronize: false,
    //Las modificaciones que se hacen de BD se hace en las migraciones para saber quien hizo cada cosa
    migrations: ['dist/db/migrations/[0-9]*-*.js']
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;