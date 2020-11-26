/**
 * @2020.11.26  @Jiaheng    File init.
 */

import React from 'react';

export class MessageBox extends React.Component {
    constructor(props) {
        super(props);

    }

    func(event) {
        console.log(event);
    }

    render() {
        return (
            <div>
                <input onChange={this.func}/>
            </div>
        );
    }
}
