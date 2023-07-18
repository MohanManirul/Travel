import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";



const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
      setItems((items) => [...items, item]);
  }

  function handleToggleItem(id){
    setItems((items) => 
      items.map((item) => 
        item.id === id ? {...item, packed : !item.packed} : item
      )
    );
  }

  function DeleteItem(id){
    setItems((items) => items.filter((items) => items.id !== id)) 
  }


  return (
    <div className="app">
      <Logo/>
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onToggleItem = {handleToggleItem} onDeleteItem={DeleteItem}/>
     
    </div>
  );
};

export default App;