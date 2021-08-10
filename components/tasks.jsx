import React, { Component } from "react";
import task from "./task";

class tasks extends Component {
  render() {
    const { tasks, onDelete } = this.props;
    return (
      <div>
        {/* Another reference to the props that are pass from App */}
        {tasks.map((task) => (
          <Task
            key={task.name}
            // bubbling up the event to the Parent App via inclusion of the props references to each of these events in App
            onDelete={onDelete}
            task={task}
          >
            {/* <h4>Task # {Task.id}</h4> */}
            {/* The handleDelete method is passed as a "props" so it can be access by the Task component. */}
            {/* The key attribute is used internally by React - so we won't be able to access it in our component - thus the additional id prop */}
            {/* instead of passing the value and id properties - we can use the Task object itself */}
          </Task>
        ))}
      </div>
    );
  }
}

export default tasks;
