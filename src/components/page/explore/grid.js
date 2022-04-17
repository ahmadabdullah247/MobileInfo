import React, { useContext } from 'react';
// import { CardWithStats } from '../explore/item'
import { CardWithStats } from './item'

import { Grid, Space, Input } from '@mantine/core';
import { BreadcrumbsComponent } from '../../common/breadcrumb'
import {  ChevronRight } from 'tabler-icons-react';
import { Link } from "react-router-dom";
import { MobileContext } from "../../index"
// import {} from '../../../downloads'

export function Explore() {
  const mobiles = useContext(MobileContext)

  return (
    <>
      <Grid>
        <Grid.Col span={10}>
          <BreadcrumbsComponent/>
        </Grid.Col>
        <Grid.Col span={2}>
          <Input component="select" rightSection={<ChevronRight />}>
            <option value="All">All</option>
            <option value="Most Popular">Most Popular</option>
            <option value="New Arrivals">New Arrivals</option>
            <option value="Up Coming">Up Coming</option>
            <option value="Price high to low">Price high to low</option>
            <option value="Price low to high">Price low to high</option>
          </Input>
        </Grid.Col>
      </Grid>
      <Space h="md" />
      <Grid>
          {
            // Object.keys(mobiles).slice(0,12).map(key=>{
            Object.keys(mobiles).map(key=>{

              return (
                <Grid.Col md={6} lg={3} key={mobiles[key]['brand']+mobiles[key]['title']}>
                  <Link key={mobiles[key]['brand']+mobiles[key]['title']} to={'/detail/'+mobiles[key]['brand'].toLowerCase()+'/'+mobiles[key]['title'].toLowerCase()} style={{textDecoration:'none'}}>
                      <CardWithStats
                      image={mobiles[key]['imgs'][0] }
                      title={mobiles[key]['title']}
                      description={ mobiles[key]['brand']+" • 2022 • "+ mobiles[key]['platform']}
                      stats={
                        [
                          { "title": "Price", "value": mobiles[key]['price']},
                          { "title": "Avg. rating", "value": mobiles[key]['rating'] }
                        ]
                      }
                      />
                  </Link>
                </Grid.Col>
              )

          })
        }
      </Grid>
    </>
  );
}