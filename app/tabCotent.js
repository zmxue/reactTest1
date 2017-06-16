import React,{Component,cloneElement} from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

export default class TabCotent extends Component{
    static propTypes = {
        order: PropTypes.number.isRequired
    };
    static defaultProps = {
        order: 0
    };
    handleClick(e){
        e.preventDefault();
        this.setState({
            active: !this.state.active
        });
    }
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
        this.getContents = this.getContents.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        document.body.addEventListener('click',e=>{
            if(e.target && !e.target.matches('div.qr')){
                this.setState({
                    active: false
                });
            }
        });
    }
    componentWillUnmount(){
        document.body.removeEventListener('click');
    }
    getContents(){
        const contents = this.props.contents;
        const order = parseInt(this.props.order, 10);
        return React.Children.map(contents,(child)=>{
            return cloneElement(child,{
                key: 1
            })
        });
    }
    render() {
        const order = this.props.order;
        return (
            <div role="tabpanel" id="tabs-panel" className="tabs-panel" ref="myTest">
                <input name="test" type="checkbox" value="1"/>apple
                <input name="test" type="checkbox" value="2"/>banner
                {this.getContents()}
                {/*这里是注释*/}
                <p ref="myTestChild" onClick={e => this.handleClick(e)}>第{order}个Tab里的内容</p>
                <div className="qr" style={{display: this.state.active ? 'block' : 'none'}}>1哇哦</div>
            </div>
        )
    }
}
