import React, { Component } from 'react';
import { Link } from 'react-router';
import { Segment, Menu, Button, Container } from 'semantic-ui-react';
import './App.css';

class App extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary stackable>
            <Menu.Item name='addround' active={this.state.activeItem === 'addround'} onClick={this.handleItemClick}>
              <Link to="round">Add a round</Link>
            </Menu.Item>
            <Menu.Item name='recentrounds' active={this.state.activeItem === 'recentrounds'} onClick={this.handleItemClick}>
              <Link to="rounds">View Recent Rounds</Link>
            </Menu.Item>
            <Menu.Item name='statistics' active={this.state.activeItem === 'statistics'} onClick={this.handleItemClick}>
              <Link to="statistics">View Statistics</Link>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item name='signin' active={this.state.activeItem === 'signin'} onClick={this.handleItemClick}>
                <Button primary>Sign In</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;
