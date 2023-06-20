import { NextFunction } from "express"
import { User } from "./user.model"
import { IUser } from "./user.interface"


     export const createUserToDB=async(payload:IUser):Promise<IUser> =>{
        const user = new User( payload )
        
        await user.save()
        user.fullName( )
        return user
      }
     

 

export async function getUsersFromDB(){
  const users =await User.find()
  return users 
}

export async function getUserByIdFromDB(payload:string):Promise<IUser | null> {
  const user= await User.findOne({id:payload},{name:1,contactNo:1})
  return user
}

