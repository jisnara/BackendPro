import express from 'express';

const app = express();

app.get('/',(req,res)=>{
  res.send("server is ready");
});

app.get('/jokes',(req,res)=>{
  const jokes=[
    "What is a programmer’s favorite hangout place? Foo Bar.",
    "Why do Python programmers wear glasses? Because they can’t C.",
    "I told a joke to an array, but it just returned ‘undefined’.",
  ]
  res.send(jokes);
});

const port = process.env.port || 4000;

app.listen(port,()=>{
  console.log(`server at http://localhost:${port}`);
});