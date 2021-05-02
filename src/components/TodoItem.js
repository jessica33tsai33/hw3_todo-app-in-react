import React, { useState } from "react";
import xImg from "../img/x.png";

const TodoItem = (props: {text: string, index: number}) => {
	const [isMouseInside, handleOnMouse] = useState(false);

	return(
		<li className="todo-app__item" onMouseEnter={ () => {handleOnMouse(true)} } onMouseLeave={ () => {handleOnMouse(false)} }>
			<div className="todo-app__checkbox">
				<input 
					id={props.index} 
					type="checkbox" 
					onClick={ () => {props.onItemComplete(props.index)} } />
				<label htmlFor={props.index} />
			</div>
			{props.completeList[props.index]
				? <h1 className="todo-app__item-detail" style={{'textDecoration': 'line-through', 'opacity': 0.5}}>{props.text}</h1> 
				: <h1 className="todo-app__item-detail">{props.text}</h1>}
			{isMouseInside ? <img src={xImg} className="todo-app__item-x" onClick={() => {props.onItemDelete(props.index)}} /> : null}
		</li>
	);
}

export default TodoItem;