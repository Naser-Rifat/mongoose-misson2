
import app from "./app"
import mongoose  from "mongoose";
const port:number = 7000


async function main() {
 try{
  await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongodb');
  console.log("connection done")
  app.listen(port, () => {
    console.log(`servers is listening on port ${port}`)})
 }
 catch(err){
console.log("Failed to connect",err)
 }
}
main()
