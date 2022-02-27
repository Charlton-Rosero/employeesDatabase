const db = require('../db')
const Employee = require('../models/employee')

db.on('error',console.error.bind(console,'MongoDB connectrion eroor:'))

const main = async () =>{
    const employees = [
        { first_name: 'John', 
          last_name: 'Lennon',
          email: 'johnandyoko@gmail.com',
          job_title: 'Guitarist',
          address:{
            street:"251 Menlove Avenue",
            city: 'Woolton',
            state: 'Liverpool',
            zip: '12345'
          }  
        },
        { first_name: 'Paul', 
          last_name: 'McCartney',
          email: 'iamthewalrus@gmail.com',
          job_title: 'Bassist',
          address:{
            street: '72 Western Avenue',
            city: 'Speke',
            state: 'Liverpool',
            zip: '45678'
          }  
        },
        { first_name: 'George', 
          last_name: 'Harrison',
          email: 'numberoneguitarist@gmail.com',
          job_title: 'Guitarist',
          address:{
            street: '25 Upton Green',
            city: 'Speke',
            state: 'Liverpool',
            zip: '45678'
          }  
        },
        { first_name: 'Ringo', 
          last_name: 'Starr',
          email: 'best_beatle@gmail.com',
          job_title: 'Drummer',
          address:{
            street: '10 Admiral Grove',
            city: ' Dingle',
            state: 'Liverpool',
            zip: '56789'
          }  
        },
        { first_name: 'Billy', 
          last_name: 'Preston',
          email: 'thefifthbeatle@gmail.com',
          job_title: 'pianist',
          address:{
            street: 'somewhere',
            city: 'Los Angeles',
            state: 'California',
            zip: '12301'
          }  
        }
        
      
    ]

    await Employee.insertMany(employees)
    console.log("Created The Beatles!")

}

const run = async () =>{
    await main()
    db.close()
}

run()