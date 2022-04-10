import { useState } from 'react';
import { AppShell } from '@mantine/core';

import { HeaderSearch } from '../header/header'
import { NavbarSearch } from '../navbar/navbar'
import { GridAsymmetrical } from '../item/grid'
import { Footer } from '../footer/footer'




export function Main() {
  const [opened, setOpened] = useState(false);

  return (
    <>
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      // navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      header={ <HeaderSearch opened={opened} setOpened={setOpened}/> }
      navbar={ <NavbarSearch hidden={!opened}></NavbarSearch> }
    >
      <GridAsymmetrical></GridAsymmetrical>
    </AppShell>
    <Footer></Footer>
    </>
  );
}