const Contador = () => {
    
    const [ counter, setCounter ] = React.useState(0);
    
    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);

    return (
        <div>
            <h1 className={ counter > 0 ? "mayor" : "menor" }>Contador: { counter }</h1>
            <hr />

            <button onClick={ decrease }>Decrease</button>
            <button onClick={ increase }>Increase</button>
        </div>
    );
}