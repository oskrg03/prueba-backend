<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

El servicio está desarrollado con la tecnología Nest JS, la cual utiliza Typescript para desarrollar. 

El proyecto está configurado para ser subido a Heroku. 


Adicional, el proyecto está en un servidor Heroku como una api rest para su consulta.

Url: https://back-service.herokuapp.com/getHora

Parámetros: time,timezone.

Ejemplo:

https://back-service.herokuapp.com/getHora?time="+time+"&timezone="+timezone


La respuesta de las peticiones tiene el formato.
```
{
    "response": {
        "time": "21:45:31",
        "timezone": "utc"
    }
}
```

Así mismo, se creo una webapp en Angular9, ubicada en https://github.com/oskrg03/timezone-converter.git

## Installation Nestjs

```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Tecnologias

Nest v.7
Typescript v.3.7
