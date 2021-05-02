import React, { useState } from "react";
import TodoItem from "../components/TodoItem";

const TodoList = (props) => {
    const [inputValue, setInputValue] = useState("");
    

    const handleChange = (e: Event) => {
      if (e.target instanceof HTMLInputElement) {
          setInputValue(e.target.value);
      }
      props.checkItemLeft(props.completeList);
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      if(e.key === 'Enter' && e.target instanceof HTMLInputElement){
        const newItems = [...props.itemList, e.target.value ];
        const newComplete = [...props.completeList, false];
        setInputValue("");
        props.setItemList(newItems);
        props.setCompleteList(newComplete);
        props.checkItemLeft(newComplete);
      }
    }

    const handleRemoveItem = (index) => {
      const oldItems = props.itemList;
      const newItems = oldItems.filter(item => item !== oldItems[index]);
      const oldComplete = props.completeList;
      //const newComplete = oldComplete.filter(itemComplete => itemComplete !== oldComplete[index]);
      const newComplete = oldComplete.slice(0,index).concat(oldComplete.slice(index+1));
      //const newItems = oldItems.slice(0,index).concat(oldItems.slice(index+1));
      console.log(newComplete);
      props.setItemList(newItems);
      props.setCompleteList(newComplete);
      props.checkItemLeft(newComplete);
    }

    const handleItemComplete = (index) => {
        const newComplete = props.completeList;
        if(newComplete[index] === false){
          newComplete[index] = true;
        }
        else if(newComplete[index] === true){
          newComplete[index] = false;
        }
        props.setCompleteList(newComplete);
        //console.log(newComplete);
        props.checkItemLeft(newComplete);
    }

    return(
      <section className="todo-app__main">
        <input 
          type="text" 
          className="todo-app__input"
          id="todo-input"
          value={inputValue}
          placeholder={props.initText}
          onKeyPress={handleKeyPress}
          onChange={handleChange} 
        />
        <ul className="todo-app__list" id="todo-list">
          {props.itemList.map((value, index) => {
              return <TodoItem key={index} text={value} index={index} completeList={props.completeList} onItemComplete={handleItemComplete} onItemDelete={ handleRemoveItem }/>
            })
          }
        </ul>
      </section>
    );
}

export default TodoList;


//function裡面可以再去呼叫多個function
//上層用到的state就要放在上面，再把他丟下來，丟到每個會更改到他的值的地方
//checkItemLeft這個只會更改itemleft的值而已，要判斷數量還要再寫一個function，再把他一起丟下去