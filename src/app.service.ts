import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  //Método para obtener la hora con la conversión de zona horaria.
  /*
  @Param time:string => Hora enviada como parámetro 
  @Param timezone:number => zona horaria enviada como parámetro 
   */
  getHora(time: string, timezone: number) {
    //Se separa la hora recibida en horas, minutos y segundos
    const [horas, minutos, segundos] = time.split(':');
    //Se obtiene la fecha actual
    const date = new Date();
    //Se modifica la hora de la fecha por la hora enviada por parámetro
    date.setHours(parseInt(horas), parseInt(minutos), parseInt(segundos));

    //Se realiza el cambio de zona horaria
    date.setHours(date.getHours() - timezone);

    //Se obtiene las horas, minutos y segundos con la conversión.
    const hours =
      date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
    const minutes =
      date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
    const seconds =
      date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds();

    //Se crea el json de respuesta con los datos anteriores
    const result = {
      response: {
        time: hours + ':' + minutes + ':' + seconds,
        timezone: 'utc',
      },
    };

    //Se retorna la nueva hora calculada.
    return result;
  }
}
