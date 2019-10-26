import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
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


const mapStateToProps = (store, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(<%= name %>);
