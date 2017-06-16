import React,{Component} from 'react';
import ReactDom from 'react-dom';
/*使用export default导出的组件，引用的时候不能加花括号，使用module.export导出的组件引用时要加花括号*/
import TabCotent from './tabCotent';

class App extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        ReactDom.unmountComponentAtNode(document.getElementById('tabs-panel'))
    }
    render(){
        return (
            /**/ 
            <TabCotent order = {20} contents={[
                <div>test</div>,
                <p>第二轮测试</p>
            ]} ref="test"/> 
        )
    }
}
ReactDom.render(
    <App />,
    document.getElementById('wrapContainer')
)
