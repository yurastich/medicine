//Core
import React, { Component } from 'react';

//Styles
import styled from 'styled-components';

//Components
import { Typography } from 'components';

class ErrorBoundry extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={this.props.className}>
                    <Typography color='var(--errorColor)' size='h3'>
                        Error!!!
                    </Typography>
                </div>
            );
        }

        return this.props.children;
    }
}

const StyledErrorBoundry = styled(ErrorBoundry)`
    text-align: center;
    padding: 20px 0;
`;

export { StyledErrorBoundry as ErrorBoundry };
