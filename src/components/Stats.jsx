

const Stats = ({items}) => {
    if(!items.length)
    return (
        <p className="stats">
            <em>Start adding some items to your packing list 🚀</em>
        </p>
    );
    const numItem = items.length;
    return (
        <footer className="stats">
            <em>

                { ` You have ${numItem} items on your list, and you already packed 0 (0%) `}

            </em>
        </footer>
    );
};

export default Stats;