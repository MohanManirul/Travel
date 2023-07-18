import { useState } from "react";


const Form = ({onAddItems}) => {

    const [description,setDescription] = useState("");
    const [quantity,setQuantity] = useState(1);
   

    function handleSubmit(e) {
        e.preventDefault();
  
        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() };

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <>
        <form className="add-form" onSubmit={handleSubmit}>           
            <input 
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
            />
            <button className="btn btn-success">Add Task</button>
        </form>
        </>
     
       
    );
};

export default Form;