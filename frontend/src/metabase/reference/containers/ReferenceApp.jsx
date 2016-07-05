/* eslint "react/prop-types": "warn" */
import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

import Sidebar from 'metabase/components/Sidebar.jsx';
import SidebarLayout from 'metabase/components/SidebarLayout.jsx';

import * as referenceActions from '../reference';
import { getSectionId, getSections } from '../selectors';

const mapStateToProps = (state, props) => ({
    sections: getSections(state)
});

const mapDispatchToProps = {
    ...referenceActions
};

@connect(mapStateToProps, mapDispatchToProps)
export default class ReferenceApp extends Component {
    static propTypes = {
        params:         PropTypes.object.isRequired,
        children:       PropTypes.any.isRequired,
        sections:       PropTypes.object.isRequired
    };

    render() {
        return (
            <SidebarLayout
                sidebar={<Sidebar {...this.props} app="reference" children={undefined} />}
            >
                {this.props.children}
            </SidebarLayout>
        )
    }
}