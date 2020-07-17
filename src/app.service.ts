import { Injectable } from '@nestjs/common';
// import { Respuesta } from './interfaces/respuesta.interface';
import { hrtime } from 'process';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getHora(time: string, timezone: number): Promise<any> {

    let [horas, minutos, segundos] = time.split(':');
    var date = new Date();

    date.setHours(parseInt(horas), parseInt(minutos), parseInt(segundos));
    date.setHours(date.getHours()-timezone);
 
    let hours = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
    let minutes =
      date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
    let seconds =
      date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds();
    
    let result = {
      response: {
        time: hours + ':' + minutes + ':' + seconds,
        timezone: 'utc',
      },
    };
    return result;
  }
}
