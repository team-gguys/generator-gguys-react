import React from 'react';
import PureComponent from 'pure-component';
import classNames from 'classnames';

import './<%= name %>.scss';


export class <%= name %> extends PureComponent {

    constructor(props) {
        super(props);
    }


    render() {
        const { className } = this.props;

        return (
            <div id="<%= kebabName %>" className={classNames(className)}>
                <%= name %>
            </div>
        );
    }
}


export default <%= name %>;
