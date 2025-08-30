import React, {FC, useMemo, useState} from 'react';
import {Link, Outlet} from 'react-router';
import styled from 'styled-components';
import SvgIcon from '@mui/material/SvgIcon';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {globalLocalization} from 'services/GlobalUtils';
import SidebarIcon from 'assets/icons/sidebar.svg';
import Statistic from 'assets/icons/statistic.svg';
import Contacts from 'assets/icons/contacts.svg';
import Squid from 'assets/icons/squid.svg';
import Persons from 'assets/icons/persons.svg';
import {font_body_2_bold, font_header_4_bold} from 'theme/fonts';

const DashboardLayout: FC = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const {LAST, STAT, CONTACTS} = globalLocalization(language);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const menuLinks = useMemo(
    () => [
      {
        to: '/main',
        icon: <Persons />,
        text: LAST,
      },
      {
        to: '/bossHP',
        icon: <Squid />,
        text: 'BossHP',
      },
      {
        to: '/statistic',
        icon: <Statistic />,
        text: STAT,
      },
      {
        to: '/contacts',
        icon: <Contacts />,
        text: CONTACTS,
      },
    ],
    [CONTACTS, LAST, STAT]
  );

  return (
    <Wrapper iscollapsed={+isSidebarCollapsed}>
      <Sidebar iscollapsed={+isSidebarCollapsed}>
        <Title>
          {/* Here will be log instead of text */}
          {!isSidebarCollapsed && <div>SE</div>}
          <Icon onClick={() => setIsSidebarCollapsed((prev) => !prev)}>
            <SidebarIcon />
          </Icon>
        </Title>

        {menuLinks.map(({to, text, icon}) => (
          <MenuItem key={text} to={to}>
            <SideIcon>{icon}</SideIcon>
            {!isSidebarCollapsed && <div>{text}</div>}
          </MenuItem>
        ))}
      </Sidebar>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div<{iscollapsed: number}>`
  display: grid;
  height: 100vh;
  grid-template-columns: ${({iscollapsed}) => (iscollapsed ? 6 : 16)}rem 1fr;
  transition: grid-template-columns 0.4s ease;
  background-color: ${({theme}) => theme.colors.gray050};

  @media ${({theme}) => theme.breakpoints.maxTb} {
    grid-template-columns: 1fr;
    grid-template-rows: 4rem auto;
  }
`;

const Icon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray000};
    height: 2rem;
    width: 2rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(230, 230, 230);
  ${font_header_4_bold};
  padding: 1rem;

  @media ${({theme}) => theme.breakpoints.maxTb} {
    ${Icon} {
      display: none;
    }
  }
`;

const SideIcon = styled(Icon)`
  &.MuiSvgIcon-root {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 3rem;
  padding: 0 1rem;
  margin: 0.5rem;
  border-radius: 1rem;
  text-decoration: none;
  ${font_body_2_bold};
  color: rgb(230, 230, 230);

  &:hover {
    background-color: rgb(127, 145, 241);
  }

  @media ${({theme}) => theme.breakpoints.maxTb} {
    & > div {
      display: none;
    }
  }
`;

const Sidebar = styled.div<{iscollapsed: number}>`
  background: rgb(14, 30, 73);
  width: ${({iscollapsed}) => (iscollapsed ? 6 : 16)}rem;
  transition: width 0.4s ease;
  justify-items: ${({iscollapsed}) => (iscollapsed ? 'center' : 'inherit')};

  @media ${({theme}) => theme.breakpoints.maxTb} {
    width: 100%;
    display: flex;

    & > div {
      margin-right: auto;
    }
  }
`;

export default DashboardLayout;
