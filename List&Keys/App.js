import React from 'react';
function ListItems(props)
{
  return <li>{props.value}</li>
}
function App ()
{ 
    const numbers = [1,2,3,4,5];
    const listNumbers=numbers.map((a)=>{
        return <ListItems key={a.toString()} value={a}/>});

        return listNumbers
}

export default App;
