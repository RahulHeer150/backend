const {faker}=require('@faker-js/faker');
const mysql=require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'uni',
    password : 'Rahul$253@*7087'
});
//insert data
let getRandomUser=() =>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ]
}
let q='INSERT INTO unistd (id, username, email, password) VALUES ?';  
let data=[];
for(let i=0;i<100;i++){
   console.log(getRandomUser());
}
// try{
// connection.query(q,unistd,
//     (err,results)=>{
//         if(err){
//             throw err;
//         }
//         console.log(results);

//     });
// }
//  catch(err){
//         console.log(err);
//     } 

//     connection.end();




