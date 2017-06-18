import React,{Component} from 'react';
import classNames from 'classnames';

export default class TestForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '张三',
            defaultValue: '李四'
        }
    }
    render() {
        const inputClass = classNames({
            'bth': this.state.defaultValue == '李四'
        });
        return(
            <div>
                <input
                    className = { inputClass}
                    value = { this.state.value}
                    onChange={e => {
                        this.setState({value: e.target.value.toUpperCase()})
                    }}
                />
                <input
                    defaultValue= { this.state.value }
                    onChange={e => {
                        this.setState({value: e.target.value.toUpperCase()})
                    }}
                />
            </div>
        );
    }
}