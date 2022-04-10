import { useState } from 'react';
import { AppShell, Burger, Header, 
         MediaQuery, useMantineTheme
        } from '@mantine/core';
import { NavbarSearch } from '../navbar/navbar'
import { GridAsymmetrical } from '../item/grid'
import { Footer } from '../footer/footer'

import { BreadcrumbsComponent } from '../breadcrumb'



export function Main() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      navbar={
          <NavbarSearch hidden={!opened}></NavbarSearch>
      }
      header={
        // 
          <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <BreadcrumbsComponent/>

          </div>
        </Header>
      }
    >
   
       <GridAsymmetrical></GridAsymmetrical>
    </AppShell>
    <Footer></Footer>
    </>
  );
}