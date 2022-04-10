import { useState } from 'react';
import { AppShell } from '@mantine/core';

import { HeaderSearch } from '../header/header'
import { NavbarSearch } from '../navbar/navbar'
import { GridAsymmetrical } from '../item/grid'
import { NothingFoundBackground } from '../error/404'
import { Footer } from '../footer/footer'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


export function Main() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Router>
      <AppShell
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        // navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
        header={ <HeaderSearch opened={opened} setOpened={setOpened}/> }
        navbar={ <NavbarSearch hidden={!opened}></NavbarSearch> }
      >
          <Routes>
            <Route path="/about" element={ <GridAsymmetrical/>} />
            <Route path="/compare" element={ <NothingFoundBackground/>} />
            <Route path="/error" element={ <NothingFoundBackground/>} />
            <Route path="/" element={<GridAsymmetrical/>} />
          </Routes>
      </AppShell>
      <Footer></Footer>
    </Router>
    </>
  );
}