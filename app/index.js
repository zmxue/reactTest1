import React,{Component} from 'react';
import Reactdom from 'react-dom';
/*使用export default导出的组件，引用的时候不能加花括号，使用module.export导出的组件引用时要加花括号*/
import TabCotent from './tabCotent';

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <TabCotent order={1} />
        )
    }
}
Reactdom.render(
    <App />,
    document.getElementById('wrapContainer')
)
