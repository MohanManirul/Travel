
import Item from './Item';

const PackingList = ({items, onToggleItem, onDeleteItem, onCompleteItem}) => {
    let sortedItems = items; 
    return (
        <tr>
        
            <div className="list  float-left">
             

                <ol className='numberList'>
                    <p>Travel List</p>
                    { sortedItems.length !==0?(sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            item={item}
                            onToggleItem = {onToggleItem}
                            onDeleteItem = {onDeleteItem}
                            onToggleCompleteItem = {onCompleteItem}
                        />
                    ))) : (<li className='listStyle'>No Item Available</li>)
                    }
                </ol>  
            
            </div>

        </tr>
    );
};

export default PackingList;