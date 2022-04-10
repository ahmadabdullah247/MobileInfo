import React from 'react';
import { createStyles, Header, Autocomplete, 
        Group, Burger, MediaQuery } from '@mantine/core';
import { Search } from 'tabler-icons-react';
import { MantineLogo } from '../_logo';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

export function HeaderSearch({ opened, setOpened }: HeaderSearchProps) {
  // const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();
  // const [setOpened] = useState(false);

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                // color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
          <MantineLogo />
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {/* {items} */}
            <a key='Home' href='/' className={classes.link} onClick={(event) => event.preventDefault()}>Home</a>
            <a key='Compare' href='/compare' className={classes.link} onClick={(event) => event.preventDefault()}>Compare</a>
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<Search size={16} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />
        </Group>
      </div>
    </Header>
  );
}