import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './NameComp.scss';


export class NameComp extends PureComponent {

    constructor(props) {
        super(props);
    }


    render() {
        const { className } = this.props;

        return (
            <div id="name-comp" className={classNames(className)}>
                NameComp
            </div>
        );
    }
}


const mapStateToProps = (store, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NameComp);
