import React, { useState } from 'react';

interface ChildComponentProps {
    message: string;
}

const ChildComponent: React.FC<ChildComponentProps> = (
    props: ChildComponentProps
): JSX.Element => {
    //destrcture
    //const (property1,property2) =obj
    //const [element0,element1] = array
    const [count, setCount] = useState(1); //hook
    const { message } = props;
    const handleAdd = (): void => setCount(count + 1);
    const handleSubtract = (): void => setCount(count - 1);

    return (
        <div>
            <h3>
                Message prop passed from parent component:{' '}
                <span style={{ color: 'red' }}>{message}</span>
            </h3>
            <h3>counter: {count}</h3>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSubtract}>-</button>
        </div>
    );
};

export default ChildComponent;
