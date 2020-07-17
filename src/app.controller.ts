import { Controller, Get, Res, HttpStatus, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { time } from 'console';
// import { Respuesta } from './interfaces/respuesta.interface';z

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return "hello world"
  }

  @Post("/getHora")
  async getHora(@Res() res, @Query("time") time, @Query("timezone") timezone) {
    const resultado =  await this.appService.getHora(time,timezone)
    return res.status(HttpStatus.OK).json(resultado);
  }
}



// export interface Respuesta {
//   time:string
//   timezone:number
// }
