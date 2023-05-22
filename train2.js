import express from 'express'
const app = express();
app.listen(700);
const students = [
    {
        id: 1,
        name: "esraa"
    }, {
        id: 2,
        name: "alaa"
    }, {
        id: 3,
        name: "aya"
    },
    {
        id: 4,
        name: "aliaa"
    }
];
app.get('/student', (req, res) => {
    let output = "<ul>";
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        output += "<li><a href='/student/" + student.id + "'>" + student.name + "</a></li>";
    }
    output += "</ul>";
    res.send(output);
    
});

