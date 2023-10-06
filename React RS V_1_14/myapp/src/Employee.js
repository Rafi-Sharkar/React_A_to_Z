import React from "react";

import { v4 as uuidv4 } from "uuid";

const employees = [
    {
        id : uuidv4(),
        name : "Hasan Al Banna",
        pos : "Junior devoloper",
        age : 23,
        phones : [
            {home : "01905493909"},
            {office : "31072000"}
        ]
    },
    {
        id : uuidv4(),
        name : "Rafi Sharkar",
        pos : "Junior Data Scientist",
        age : 24,
        phones : [
            {home : "01905493907"},
            {office : "31077000"}
        ]

    },
    {
        id : uuidv4(),
        name : "Mahmudul Hasan",
        pos : "Senior devoloper",
        age : 21,
        phones : [
            {home : "01905493901"},
            {office : "31071000"}
        ]

    },
    {
        id : uuidv4(),
        name : "Asif",
        pos : "Junior programmer",
        age : 22,
        phones : [
            {home : "01905493903"},
            {office : "31073000"}
        ]

    }                                   
]

export default function Employee(){
    return(
        <div>
            <h1>Employee's Info</h1>
            {
                employees.map((employee, index)=>{
                    return(
                        <article key={index}>
                            <h3>{employee.name}</h3>
                            <p>{employee.age}</p>
                            {
                              employee.phones.map((phone, index)=><div key={index}>
                                  <p>{phone.home}</p>   
                                  <p>{phone.office}</p>
                              </div>)
                            }
                        </article>
                    )
                })
            }
        </div>
    )
}