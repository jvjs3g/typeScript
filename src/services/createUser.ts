
interface techObject {
  title:string,
  experiencia:number;
}

interface createUserData {
  name?:string;
  email:string;
  password:string;
  techs:Array<string | techObject>;
}
export default function createUser({ name , email , password }: createUserData){
  const user = {
    name,
    email,
    password,
  };

  return user;
}