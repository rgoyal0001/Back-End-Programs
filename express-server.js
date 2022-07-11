const express=require("express")

const app= express();
x=6;
app.get("/",(req,res)=>{
    res.send('hello... just go http://localhost:3000/books to see books data');
})
app.get("/books",(req,res)=>{
    res.json({
        "books": [
          { "id": 1, "title": "The Braille edition of the book Exam Warriors", "author": "PM Narendra Modi" },
          { "id": 2, "title": "Anna Karenina", "author": " Leo Tolstoy" },
          { "id": 3, "title": "Madame Bovary", "author": " Gustave Flaubert" },
          { "id": 4, "title": "War and Peace", "author": "Leo Tolstoy" }
        ]
      })
})

app.listen(3000)