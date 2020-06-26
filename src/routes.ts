import {Request, Response } from 'express'
import createUser from './services/createUser';

export function helloWorld(request:Request, response:Response){

  const user = createUser({
    email:'joao3klb@hotmail.com',
    password:'12345',
    techs:['nodejs','react','reactNative', { title:'javaScript',experiencia:100}],
  });
  return response.json({message:'hello world'})
}