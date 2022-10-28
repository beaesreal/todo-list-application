import { CODE_ENTER } from "keycode-js";
import { string } from "prop-types";
import React, {useState, useEffect} from "react";
//import { getTodoList } from "../../../services/getTodoList.js";
//import { updateTodoList } from "../../../services/updateToDoList.js";


//GET AND UPDATE LIST DOES NOT WORK IN THIS EXERCISE, MADE IN ANOTHER ONE THAT I STARTED AGAIN :s


const Home = () => {


	const [inputValue, setInputValue] = useState ("");
	const [items, setItems] = useState ([]);
	
	//GET AND UPDATE LIST 

	const getList = () => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/beaesreal")
		.then(response => {
		  if(response.ok) {console.log("OK")}
	  })
	  .then(response => response.json())
	  .then(result => console.log(result))
	  .catch(error => console.log('Error: ', error));		
} 

	const updateList = () => {	
		fetch("https://assets.breatheco.de/apis/fake/todos/user/beaesreal", {
		method: "PUT",
		body: JSON.stringify(items),
		headers: {
			"Content-Type": "application/json"
		}
		})
		.then(resp => {
			console.log(resp.status); // 200, 400, ETC.
			console.log(resp.text()); // RESULT = STRING
		
		})
		.then(data => {
			console.log(data); 
		})
		.catch(error => {
			console.log(error);
		});
	}



//RETORNO

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
						setItems(items.concat(inputValue))
						setInputValue("");
				}
				}}
					placeholder="Write your todo here..."></input>
				</li>
					
				{items.map((task, index) => 
				(<li className="row justify-content-between m-0" key={task.id}>
					<div className="col-11"> {task[0].toUpperCase() + task.substring(1)} </div> 
					<span className="col-1 text-center"><i className="fas fa-trash-alt" onClick={() => setItems(items.filter((task, currentIndex) => index != currentIndex))}></i></span>
				</li>))}

			</ul>
			<div className="count">{items.length} item(s) left</div>
			</div>
		</div>
	);
};

export default Home;





//const names = [ name1, name2, name3 ];
//{names.map((name) => <button className="" key={name}>{name}</button>)};

/*useEffect(() => {
	getTodoList().then(response => setItemss(response))
}, []);

useEffect(() =>{
	updateTodoList(items)
}, [items]);*/


/*const getList = () => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/beaesreal")
		.then(response => {
		  if(response.ok) {console.log("OK")}
	  })
	  .then(response => response.json())
	  .then(result => console.log(result))
	  .catch(error => console.log('Error: ', error));		
} 

const updateList = () => {	
useEffect(() => {
		getTodoList().then(response => setItems(response))
	}, []);
	
useEffect(() =>{
		updateTodoList(items)
	}, [items]);
	
useEffect(() => {
		getTodoList().then(response => setItems(response))
	}, []);
	
useEffect(() =>{
		updateTodoList()
	}, []);
	
*/