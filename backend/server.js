const express = require ("express");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const cors = require("cors");


mongoose.connect("mongodb+srv://kumari:mongo%40123@mern-crud.2kzsk.mongodb.net/mer-crud?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log("Server connected");
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Todo.find((err, todos) => {
    if(err) {
      res.send(err);
    } else {
      res.json(todos);
    }
  });
});

app.post("/create", (req, res) => {
  const todo = new Todo(req.body);
  todo.save().then((todo) => {
    res.json(todo)
  }).catch((err) => {
    res.status(500).send(err.message);
  });
});

app.get(":/id", (req,res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if(!todo){
      res.status(404).send("Todo not found");
    } else {
      todo.text = req.body.text;
      todo.save().then((todo) => {
        res.json(todo);
      }).catch((err) => res.status(500).send(err.message));
    }
  });
});


app.listen(4000, (req, res) => {
  console.log("server is running in port : 4000");
});