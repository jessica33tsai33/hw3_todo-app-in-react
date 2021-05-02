import React, {useState} from "react";
import Header from "../components/Header";
import TodoList from "./TodoList";
import Footer from "./TodoFooter";

const TodoApp = () => {
	const [itemLeft, setItemLeft] = useState(0);
	const [itemList, setItemList] = useState([]);
    const [completeList, setCompleteList] = useState([]);

    const checkItemLeft = (newComplete) => {
    	//console.log("checkItemLeft");
    	//console.log(completeList);
    	var left = 0;
    	let i;
    	
    	for(i=0; i<newComplete.length; i++){
    		//console.log(completeList[i]);
    		if(newComplete[i] === false){
    			//console.log("checkfalse");
    			left += 1
    		}
    	}
    	setItemLeft(left);
    	//console.log(left);
    }
    

	return(
		<>
            <Header text="todos" />
            <TodoList initText="What needs to be done?" checkItemLeft={checkItemLeft} itemList={itemList} setItemList={setItemList} completeList={completeList} setCompleteList={setCompleteList}/>
            <Footer itemLeft={itemLeft}/>
        </>
	);
}

export default TodoApp;
