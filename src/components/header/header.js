import React from 'react';
import { createStyles, Input, Group, Container } from '@mantine/core';
import { ChevronRight } from 'tabler-icons-react';
import { BreadcrumbsComponent } from '../breadcrumb'

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

interface SiteHeaderProps {
  links: { link: string; label: string }[];
}

export function SiteHeader({ links }: SiteHeaderProps) {
    const { classes, theme } = useStyles();


    return (
        <>
        <Container size="xl" className={classes.inner}>
            <Group>
              <BreadcrumbsComponent/>
            </Group>

            <Group>
              <Input component="select" rightSection={<ChevronRight className={classes.chevron} size={14} style={{transform: `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`}} />}>
                <option value="Most Popular">Most Popular</option>
                <option value="New Arrivals">New Arrivals</option>
                <option value="Coming Soon">Coming Soon</option>
                <option value="Price Hight to Low">Price Hight to Low</option>
                <option value="Price Low to High">Price Low to High</option>
              </Input>
            </Group>
        </Container>
        </>
    );
}