const {faker}=require('@faker-js/faker');
const mysql=require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'uni',
    password : 'Rahul$253@*7087'
});
try{
connection.query("SHOW TABLES",
    (err,results)=>{
        if(err){
            throw err;
        }
        console.log(results);

    });
}
 catch(err){
        console.log(err);
    } 

    connection.end();


let getRandomUser=() =>{
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    
    password: faker.internet.password(),
    
  };
}

