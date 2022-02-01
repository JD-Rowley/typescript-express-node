"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const uuid_1 = require("uuid");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo((0, uuid_1.v4)(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created todo', createTodo: newTodo });
};
exports.createTodo = createTodo;
