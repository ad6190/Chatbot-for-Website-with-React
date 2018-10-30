import React, { Component } from 'react';
import QuickReply from './QuickReply';

class QuickReplies extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(text) {
        this.props.replyClick(text);

    }

};
