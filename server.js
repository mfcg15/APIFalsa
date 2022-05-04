const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();

class Usuario
{
    constructor()
    {
        this.id = faker.database.mongodbObjectId()
        this.first_name  = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.phone = faker.phone.phoneNumber()
        this.email = faker.internet.email(`${this.first_name}`, `${this.last_name}`) ;
        this.password = faker.internet.password(8);
    }
}

class Empresa
{
    constructor()
    {
        this.id = faker.database.mongodbObjectId()
        this.name  = faker.company.companyName();
        this.addres = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zip : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}

app.get("/api/user/new", (req,res) => 
{
    let usuario = new Usuario();
    res.json(usuario)
})

app.get("/api/companies/new", (req,res) => 
{
    let companies = new Empresa();
    res.json(companies)
})

app.get("/api/user/company", (req,res) => 
{
    let usuario = new Usuario();
    let compañia = new Empresa();
    res.json({usuario,compañia})
})

app.listen(8000, () => 
{
    console.log("Servidor corriendo");
})