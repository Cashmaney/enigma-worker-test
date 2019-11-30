import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const StyledButton = styled.button`
  ${props => `${buttonStyles};
  background-color: ${props.theme['$btn-primary-bg']};
  color: ${props.theme['$btn-primary-color']};
  `};
`;

export default StyledButton;
