import { CODE_ENTER } from "keycode-js";
import React, {useState, keyCode} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	const [inputValue, setInputValue] = useState ("");
	const [item, setItem] = useState ([]);
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
				(<li className="row justify-content-between m-0">
					<div className="col-11"> {task[0].toUpperCase() + task.substring(1)} </div> <span className="col-1 text-center"><i className="fas fa-trash-alt" onClick={() => setItem(item.filter((task, currentIndex) => index != currentIndex))}></i></span>
				</li>))}

			</ul>
			<div className="count">{item.length} item(s) left</div>
			</div>
		</div>
	);
};

export default Home;

//const names = [ name1, name2, name3 ];
//{names.map((name) => <button className="" key={name}>{name}</button>)};