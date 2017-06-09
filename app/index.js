import React,{component} from 'react';
import Reactdom from 'react-dom';

class App extends component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div> hello word! </div>
        )
    }
}
Reactdom.render(
    <App/>,
    document.getElementById('wrapContainer')
)
