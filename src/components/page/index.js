import { useState } from 'react';
import { AppShell } from '@mantine/core';

import { CommonHeader } from '../common/header/header'
import { CommonNavbar } from '../common/navbar/navbar'
import { Footer } from '../common/footer/footer'
import { Explore } from './explore/grid'
import { Error } from './error/404'

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
        header={ <CommonHeader opened={opened} setOpened={setOpened}/> }
        navbar={ <CommonNavbar hidden={!opened}></CommonNavbar> }
      >
          <Routes>
            <Route path="/about" element={ <Explore/>} />
            <Route path="/compare" element={ <Error/>} />
            <Route path="/error" element={ <Error/>} />
            <Route path="/" element={<Explore/>} />
          </Routes>
      </AppShell>
      <Footer></Footer>
    </Router>
    </>
  );
}