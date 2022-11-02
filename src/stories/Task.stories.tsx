import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";
import TextField from "@mui/material/TextField/TextField";
import {IconButton} from "@mui/material";
import {AddBox} from "@mui/icons-material";
import {Task} from "../Task";
import {TaskType} from "../Todolist";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TODOLISTS/Task',
  component: Task,
  args: { //поподут во все истории эти свойства на уровне сторибука
    changeTaskStatus: action("changeStatus"),
    changeTaskTitle: action("changeStatus"),
    removeTask: action("changeStatus"),
    task: {id: "qqq", isDone: true, title: "sasd"},
    todolistId: "asdsdfsdf"
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsDoneStory.args = {

};


export const TaskIsNotStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsNotStory.args = {
  task: {id: "qqq", isDone: false, title: "HTML"}, //на уровне истории можем переопределить свойства

};




