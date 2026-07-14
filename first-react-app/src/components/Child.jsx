import React from "react";
import GrandChild from "./GrandChild";

const Child = React.memo(() => {

    console.log('Child rendered!')

    return (
        <div style={{border: '1px solid green', padding: '20px'}}>
            {/* <p>This is Child Component {name}</p> */}
            <p>This is Child Component </p>
            <GrandChild />
        </div>
    )
}
)
export default Child;