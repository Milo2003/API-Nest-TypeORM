import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
// import { Db } from 'mongodb';
import { Client } from 'pg';
@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    // @Inject('MONGO') private db: Db,
    @Inject('TASKS') private tasks: any[],
    @Inject('PG') private clientPg: Client,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const apiKey = this.configService.apiKey;
    const dbName = this.configService.database.name;
    return `Hello World! ${apiKey}, ${dbName}`;
  }
  // getTasks() {
  //   const taskCollection = this.db.collection('tasks');
  //   return taskCollection.find().toArray();
  // }
  getTasks() {
    return new Promise((resolve, reject) => {
      //ejecutamos la consulta a la db como una promesa, esto nos trae las tablas que tenemos en la postgresdb
      this.clientPg.query('SELECT * FROM tasks', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
