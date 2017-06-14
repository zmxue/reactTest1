import React,{Component} from 'react';

export default class TabCotent extends Component{
    constructor(props){
        super(props);
    }
    render() {
        const order = this.props.order;

        return (
            <div role="tabpanel" className="tabs-panel">
                第{order}个Tab里的内容
            </div>
        )
    }
}
