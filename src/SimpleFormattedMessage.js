import React, {Component as ReactComponent} from 'react';
import {FormattedMessage} from 'react-intl';
import {createElement} from 'react';

export default class SimpleFormattedMessage extends ReactComponent {
    render() {
        const {tagName, id, description, defaultMessage, values, ...rest} = this.props;
        const Component = tagName;

        return (<FormattedMessage {...{id, description, defaultMessage, values}}>
            {(message) => Component ? createElement(Component, rest, message) : message}
        </FormattedMessage>);
    }
}