import React, {ElementType, useEffect, useMemo} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga4';
import {useLocation} from 'react-router';
import BackBtn from 'components/GeneralComponents/BackBtn';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {localization} from './ContactsUtils';
import {font_body_2_bold} from 'theme/fonts';

const ContactsView = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({hitType: 'contacts', page: location.pathname});
  }, []);

  const {LEADER, CO_LEADER, ADMIN, WEB, SUPPORT} = localization(language);

  const arrValues = useMemo(
    () => [
      {
        position: LEADER,
        name: 'Артем',
        link: 'Artem_Chuvanov',
      },
      {
        position: CO_LEADER,
        name: 'Марина',
        link: 'MarVik3108',
      },
      {
        position: ADMIN,
        name: 'Роман',
        link: 'Matpockyx',
      },
      {
        position: ADMIN,
        name: 'Санта',
        link: 'Erbol_Santa',
      },
      {
        position: WEB,
        name: 'Дмитрий',
        link: 'Larin_Dmytro',
      },
    ],
    [LEADER, CO_LEADER, ADMIN, WEB]
  );

  return (
    <Wrapper>
      <BackBtn />
      <Title>{SUPPORT}</Title>
      <Container component={Paper}>
        <Table>
          <TableBody>
            {arrValues.map(({name, link, position}) => (
              <Row key={link}>
                <TableCell align="center">{position}</TableCell>
                <TableCell align="center">
                  <a href={`https://t.me/${link}`} target="_blank">
                    {name}
                  </a>
                </TableCell>
              </Row>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
`;

const Container = styled(TableContainer)<{component: ElementType}>`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`;

const Title = styled.div`
  ${font_body_2_bold};
  margin: 1rem;
  display: flex;
  align-items: center;
`;

const Row = styled(TableRow)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ContactsView;
