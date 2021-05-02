import React, { useState } from "react";
import Button from "../components/ViewButton";

const Footer = (props) => {
	//console.log(props.itemLeft);
	return(
		<footer id="todo-footer" className="todo-app__footer">
			<div className="todo-app__total">
            	<div id="todo-count"> {props.itemLeft} left</div>
        	</div>
        	<ul className="todo-app__view-buttons">
            	<li>
            		<Button text="All" />
            	</li>
            	<li>
                	<Button text="Active" />
            	</li>
            	<li>
                	<Button text="Completed" />
            	</li>
        	</ul>
        	<div className="todo-app__clean">
            	<button>Clear Completed</button>
        	</div>
		</footer>
	);
}

export default Footer;