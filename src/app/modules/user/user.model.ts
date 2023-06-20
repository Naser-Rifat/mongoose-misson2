import { Model, Schema, model } from "mongoose"
import { IUser, IUserMethods } from "./user.interface"


type UserModel = Model<IUser, {}, IUserMethods>;

 const userSchema =new Schema<IUser , UserModel , IUserMethods >({
    id:{type:String,required:true,unique:true},
    role:{type:String,required:true},
    password:{type:String,required:true},
   name:{firstName:{type:String,required:true},middleName:{type:String},lastName:{
     type:String,required:true
   }},
   dateOfBirth:{type:String},
   gender:{type:String,enum:["male" ,"female"]},
   email:{type:String},
   contactNo:{type:String},
   emergencyContactNo:{type:String},
   presentAddress:{type:String},
   
 })

 userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
  });
 
 export const User = model<IUser ,UserModel>("User",userSchema)