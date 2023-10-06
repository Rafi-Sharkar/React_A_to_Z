import React from 'react';
import Child from './Component/State_Lifting/Child';

const App = () => {
    const data = "Parent (App)"
    const handleChildData = (cdt) => {console.log(cdt)}
    return (
        <div>
            <Child dt = {data} onData={handleChildData}/>
        </div>
    );
};

export default App;