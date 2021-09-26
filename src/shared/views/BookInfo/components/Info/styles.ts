import styled from 'styled-components/native';
import NewText from '../../../../components/Text';

export const AboutInfosText = styled(NewText)`
  font-family: Roboto-Regular;
  align-self: flex-start;
  color: ${({theme}) => theme.Colors.FONT_HOME};
`;

export const AboutInfos = styled(NewText)`
  font-family: Roboto-Medium;
  color: #848c8c;
  align-self: flex-start;
`;
