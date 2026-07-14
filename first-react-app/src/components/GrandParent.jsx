import Parent from "./Parent";

function GrandParent() {

    return (
        <div style={{border: '1px solid gray', padding: '20px'}}>
            <p>This is GrandParent component</p>
            {/* <Parent name={name} /> */}
            <Parent />
        </div>
    )
}

export default GrandParent;