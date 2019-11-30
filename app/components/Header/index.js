import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  A,
  Form,
  Input,
  Button,
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from '@bootstrap-styled/v4';

import messages from './messages';
import { LocaleToggle } from '../../containers/LocaleToggle';

function Header() {
  return (
    <div>
      <Navbar color="faded" light toggleable="lg">
        <Container>
            <Nav navbar className="mr-auto">
              <NavItem>
                <NavLink><FormattedMessage {...messages.home} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><FormattedMessage {...messages.features} /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled>Disabled</NavLink>
              </NavItem>
            </Nav>
          <LocaleToggle />
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
