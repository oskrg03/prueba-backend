import { Controller, Get, Res, HttpStatus, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
// import { Respuesta } from './interfaces/respuesta.interface';z

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return "hello world"
  }

  @Post("/getHora")
  async getHora(@Res() res, @Body() valores:Respuesta) {
    let resultado;
    // console.log(valores.time)
    resultado = await this.appService.getHora(valores.time,valores.timezone)
    return res.status(HttpStatus.OK).json(resultado);
  }
}



export interface Respuesta {
  time:string
  timezone:number
}
