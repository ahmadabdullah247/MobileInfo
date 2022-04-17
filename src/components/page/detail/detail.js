import React, { useContext } from 'react';
import { Table, ScrollArea,
        Group, Avatar, Image,Text, Space } from '@mantine/core';
import { Star } from 'tabler-icons-react';
import { BreadcrumbsComponent } from '../../common/breadcrumb'
import { InputWithButton } from './compareWith'
import  {useLocation} from 'react-router-dom'
import { MobileContext } from "../../index"


interface ProductDetailProps {
  data: {
    title: string;
    author: string;
    year: number;
    reviews: { positive: number; negative: number };
  }[];
}

export function ProductDetail({ data }: ProductDetailProps) {
  let mobiles = useContext(MobileContext)
  const location  = useLocation()
  const attributes = ['rating','brand','display','displayTechnology',
  'resolution','platform','processor','backCamera','frontCamera','storage',
  'memory','technology','battery','weight','dimensions','colors','topFeature']
  const { state } = location
  let mobile = undefined
  if (state){
    mobile = mobiles[state]
  }

  return (
      <>    
        <BreadcrumbsComponent/>
         <Space h="md" />
        <InputWithButton/>
     <Space h="md" />
      <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th></th>
            <th>
                <div>
                    <Image src={ mobile['imgs'][0] } alt={ mobile['title'] } height={120} withPlaceholder fit="contain"/>
                    <Text align="center">{mobile['title']}</Text>
                    <Text align="center">{mobile['price']}</Text>
                </div> 
            </th>
          </tr>
        </thead>
        <tbody>
            {
               attributes.map(key=>{
                   if (key=='rating'){
                    return (
                        <tr>
                            <td> <strong>{ key.toUpperCase() }</strong> </td>
                            <td align="center">
                                { mobile[key] }
                                {/* <Group position="left" spacing="xs">
                                    <Avatar color="yellow" radius="xl" size={30}>
                                        <Star size={16} />
                                    </Avatar>
                                    <Avatar color="yellow" radius="xl" size={30}>
                                        <Star size={16} />
                                    </Avatar>          
                                    <Avatar color="yellow" radius="xl" size={30}>
                                        <Star size={16} />
                                    </Avatar>          
                                    <Avatar color="yellow" radius="xl" size={30}>
                                        <Star size={16} color="black" />
                                    </Avatar>          
                                    <Avatar color="yellow" radius="xl" size={30}>
                                        <Star size={16} />
                                    </Avatar>
                                </Group> */}
                            </td>
                        </tr>
                    )
                   }
                    return( <tr>
                                <td> <strong>{ key.toUpperCase() }</strong> </td>
                                <td align="center"> { mobile[key] } </td>
                            </tr>
                    )
                })
                
            }
        </tbody>
      </Table>
    </ScrollArea>
    </>
  );
}

