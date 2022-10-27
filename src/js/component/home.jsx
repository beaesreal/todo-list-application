import { CODE_ENTER } from "keycode-js";
import { string } from "prop-types";
import React, {useState, useEffect} from "react";
import { getTodoList } from "../../../services/getTodoList";
import { updateTodoList } from "../../../services/updateToDoList";

//create your first component
const Home = () => {


	const [inputValue, setInputValue] = useState ([]);
	const [item, setItem] = useState ([]);
	
	var totalTasks = item.length;

	useEffect(() => {
		getTodoList().then(response => setInputValue(response))
	}, []);

	useEffect(() =>{
		updateTodoList(inputValue)
	}, [inputValue]);

	return (
		<div className="container">
			<h1 className="heading text-center">~ My todo list ~</h1>
			<div className="tasks-container bg-light container p-5">
			<ul>
				<li><input 
				type="text" 
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}				
				onKeyPress={(e) =>{
					if(e.key === "Enter"){
						console.log("enter pressed")
						setItem(item.concat(inputValue))
						setInputValue("");
				}
				}}
					placeholder="Write your todo here"></input>
				</li>
					
				{item.map((task, index) => 
				(<li className="row justify-content-between m-0" >
					<div className="col-11"> {task[0].toUpperCase() + task.substring(1)} </div> 
					<span className="col-1 text-center"><i className="fas fa-trash-alt" onClick={() => setItem(item.filter((task, currentIndex) => index != currentIndex))}></i></span>
				</li>))}

			</ul>
			<div className="count">{totalTasks} item(s) left</div>
			</div>
		</div>
	);
};

export default Home;

//const names = [ name1, name2, name3 ];
//{names.map((name) => <button className="" key={name}>{name}</button>)};