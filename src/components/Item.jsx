

const Item = ({item, onToggleItem, onDeleteItem , onCompleteItem}) => {
    return (
       
            <li  className='listStyle'>
                <input 
                    type="checkbox"  
                    value={item.packed}
                    onChange={()=> onToggleItem(item.id)}
                />
                <span style={item.packed ? {textDecoration: "line-through"} : {}}>
                    {item.quantity} {item.description}
                </span>
            
                <button onClick={()=> onDeleteItem(item.id)} className="btn btn-danger">Delete</button>
                <button onClick={()=> onCompleteItem(item.description)} className="btn btn-success">Complete</button>
            </li>
    );
};

export default Item;