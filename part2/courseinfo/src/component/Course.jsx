import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <b>Total of {total} exercises</b>;
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part, i) => (
        <Part key={i} part={part} />
      ))}
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
