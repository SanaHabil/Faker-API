//const { borderBottom } = require('@mui/system')
const {faker} = require('@faker-js/faker')
const express = require('express')
const app =express()
const port = 8000


app.get('/',(req,res)=>{
    res.json({message:'Hello World'})
})

const createUser=()=>({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        uuid: faker.datatype.uuid(),
});

app.get('/api/users/new',(req,res)=>{
    const newUser = createUser();
        res.json({newUser})
});

const createCompany=()=> ({
        name:faker.company.name(),
        uuid: faker.datatype.uuid,
        address : {street:faker.address.street(),
                    city:faker.address.city(),
                    state:faker.address.state(),
                    zipCode: faker.address.zipCode(),
                    country: faker.address.country()
        }

});

app.get('/api/companies/new',(req,res)=>{
    const newCompany = createCompany();
        res.json({newCompany})
});

app.get('/api/user/company',(req,res)=>{
    const newCompany = createCompany();
    const newUser = createUser();
    const fakeItem ={
        user:newUser,
        company:newCompany
    }
        res.json({fakeItem})

});
// const listOfUsers=[]

// app.get('/users',(req,res)=>{
//     res.json({listOfUsers})
// })

// app.get('/api/user/company',(req,res)=>{
//     res.json({newFakeUser,companyFake})
// })



// app.post('/users',(req,res)=>{
//     const newFakeUser = {
//         firstName: faker.name.firstName(),
//         lastName: faker.name.lastName(),
//         phoneNumber: faker.phone.number(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//         uuid: faker.datatype.uuid(),
//     }
//         listOfUsers.push(newFakeUser);
//     res.json({newFakeUser:newFakeUser})
//         })

// const createUser=()=>{
//     const newFake = {
//         firstName: faker.name.firstName(),
//         lastName: faker.name.lastName(),
//         phoneNumber: faker.phone.phoneNumber(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//         uuid: faker.datatype.uuid(),
//     };
    
//     return newFake;
// };

// const newFakeUser = createUser();
// crossOriginIsolated.log(newFakeUser);

//     const createCompany=()=> {
//         const companyFake ={
//                 name:faker.company.name(),
//                 uuid: faker.datatype.uuid,
//                 address : {street:faker.address.street(),
//                             city:faker.address.city(),
//                             state:faker.address.state(),
//                             zipCode: faker.address.zipCode(),
//                             country: faker.address.country()
//                             }

//     };
//     return companyFake;
// };

// const newFakeCompany = createCompany();
// console.log(newFakeCompany);

// const companyFake ={
//     name:faker.company.name(),
//     uuid: faker.datatype.uuid,
//     address : {street:faker.address.street(),
//                 city:faker.address.city(),
//                 state:faker.address.state(),
//                 zipCode: faker.address.zipCode(),
//                 country: faker.address.country()
//                 }
//             }
// app.post('/api/companies/new',(req,res)=>{
//     res.json({companyFake:companyFake})
// })

app.listen(port,()=>console.log(`Locked and Loaded on Port ${port}`));
