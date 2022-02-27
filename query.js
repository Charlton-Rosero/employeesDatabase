const db = require('./db')
const  Employee= require('./models/employee')
const mongoose = require('mongoose')

db.on('error', console.error.bind(console, 'MonrunDB connection error:'))

const findAllEmployee = async () => {
    const beatleName = await Employee.find({});
    console.log(beatleName)
}

const createEmployee = async () => {
    const newBeatle = new Employee(
    { 
    // _id: ""   ,
    first_name: 'Eric', 
    last_name: 'Clapton',
    email: 'myguitargentlyweeps@gmail.com',
    job_title: 'Guitarist',
        address:{
            street: 'somewhere',
            city: 'place',
            state: 'state',
            zip: '12301'
        }  
    });

     await  newBeatle.save();
    console.log("Created a new beatle:",  newBeatle);
}

const createMoreEmployees = async () => {
const newBeatles = await Employee.insertMany([
    { first_name: 'Mick', 
    last_name: 'Jagger',
    email: 'rollingstones1@gmail.com',
    job_title: 'Vocalist',
        address:{
            street: 'somewhere',
            city: 'place',
            state: 'state',
            zip: '12301'
        }  
    },
    { first_name: 'Roger', 
    last_name: 'Daltrey',
    email: 'whoareyou@gmail.com',
    job_title: 'Vocalist',
        address:{
            street: 'somewhere',
            city: 'place',
            state: 'state',
            zip: '12301'
        }  
    },
    { first_name: 'David', 
    last_name: 'Gilmour',
    email: 'pinkfloyd@gmail.com',
    job_title: 'Guitarist',
        address:{
            street: 'somewhere',
            city: 'place',
            state: 'state',
            zip: '12301'
        }  
    },
]);

    console.log("Created new beatles:",  newBeatles);
}

const updateEmployee = async () => {
    const updated = await Employee.updateOne({ first_name: "John" }, { email: "johnlennon@gmail.com" })
    console.log(updated)
  }
  
  const deleteEmployee = async () => {
    const deletedEmployee = await Employee.deleteOne({ first_name: "David" });
    console.log(deletedEmployee);
  };
  const callEmployees = async () => {
    const names = await Employee.find({}).select('first_name last_name -_id');
    console.log(names);
  };
  //SOURCES
  //https://stackoverflow.com/questions/14559200/how-to-exclude-one-particular-field-from-a-collection-in-mongoose
  //https://stackoverflow.com/questions/24348437/mongoose-select-a-specific-field-with-find





const run = async () => {
    // await updateEmployee() //works
    // await findAllEmployee() // works
    // await createEmployee() // works 
    // await createMoreEmployees() // works
    // await deleteEmployee() //works
    await callEmployees() //works
    
    db.close();
}
  
  
run();