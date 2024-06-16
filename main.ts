import inquirer from "inquirer";
let todos : string[] = [];

let addTask = await inquirer.prompt(
   [
      {
       name:"todo", 
       type:"input",
       message:"what do you want to add in your todo"
      },
      {
      name:"addMore",
      type:"confirm",
      message:"Do you want to add more?",
      default:"false"
      },


      
   ]
);
todos.push(addTask.todo);
console.log(todos)

