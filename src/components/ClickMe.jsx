import { useState } from 'react';

export default function ClickMeButton() {
    // export default function ClickMeButton({ children, onSelect }) {
    const [clickCount, showCounter] = useState(0);

    function hendleClick() {
        showCounter(function (prevCounter) {
            return prevCounter + 1;
        });
    }
    // return <button onClick={hendleClick}>{children}</button>;
    return (
        <div>
            {/* <button onClick={onSelect}>{children}</button> */}
            <button onClick={hendleClick}>Click Me</button>
            <p>User clicks the button {clickCount} times</p>
        </div>
    );
}