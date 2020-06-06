# React-Student-Grade-Table

The Student Grade Table: Written in React

## Introduction

The Student Grade Table is a dynamic web application for teachers who want to record the grades of their students.

## Features

* User can view all grades.
* User can view the average grade.
* User can add a grade.
* User can delete a grade.

## Server API

**GET /api/grades**

Responds with all recorded grades.

**POST /api/grades**

Accepts a single grade object in the request body and inserts it into all grades. Responds with the inserted grade, including an auto-generated id.

**DELETE /api/grades/:id**

Removes a grade from all recorded grades, given an id in the request URL. e.g. /api/grades/3
