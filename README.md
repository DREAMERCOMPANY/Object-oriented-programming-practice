# Object-Oriented Programming Practice

This repository contains practice code for Object-Oriented Programming (OOP) principles, showcasing various aspects such as classes, inheritance, encapsulation, and polymorphism in JavaScript.

## Classes and Objects

### Comment Class

The `Comment` class represents a comment made by a student. It has properties such as `content`, `studentName`, `studentRole`, and `likes`. The `post()` method is responsible for displaying the comment information.

### platziClass Class

The `platziClass` class represents a Platzi class with properties like `name` and `videoID`. It has methods like `reproducir()` and `pausar()` for handling video playback.

### Student Classes

There are several classes representing different types of students:
- `StudentTwo`: A basic student class with properties like `name`, `age`, and `cursosAprobados`.
- `studentThree`: A class created with the concept of receiving an object and returning an object (ROR). It has properties like `name`, `age`, `email`, and `cursosAprobados`.
- `freeStudent`, `basicStudent`, `expertStudent`, `teacherStudent`: Subclasses of the `Student` class with specific approval logic for courses based on the student's type.

### Course Class

The `Course` class represents a course with properties like `name`, `classes`, `isFree`, and `lang`. It uses getter and setter methods for the `name` property.

### learningPath Class

The `learningPath` class represents a learning path with properties like `escuela` and `cursos`.

## Usage Examples

The `readme.md` file includes usage examples for creating instances of these classes and utilizing their methods.

### Example:
```javascript
const Swald = new freeStudent({
    name: 'Oswaldo',
    username: 'swaldramjf',
    points: 52222,
    learningPath: [escuelaData, escuelaWeb]
})

Swald.postComment('This is a great learning path!')
Swald.approveCourse(progBasica)

console.log(Swald)
