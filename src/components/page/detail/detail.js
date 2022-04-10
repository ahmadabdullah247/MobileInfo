import React from 'react';
import { Table, ScrollArea,
        Group, Avatar, Image,Text, Space } from '@mantine/core';
import { Star } from 'tabler-icons-react';
import { BreadcrumbsComponent } from '../../common/breadcrumb'
import { InputWithButton } from './compareWith'


interface TableReviewsProps {
  data: {
    title: string;
    author: string;
    year: number;
    reviews: { positive: number; negative: number };
  }[];
}

export function TableReviews({ data }: TableReviewsProps) {
  const image =  "https://i.hood.de/fit-in/3000x3000/filters:no_upscale()/images/50144/501441090.jpg"
  const title= "Iphone 13"
  return (
      <>    
        <BreadcrumbsComponent/>
         <Space h="md" />
        <InputWithButton/>
        {/* <Grid>
            <Grid.Col>
            </Grid.Col>
            <Grid.Col span={2}>
    
            </Grid.Col>
        </Grid> */}
     <Space h="md" />
      <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th></th>
            <th>
                <div >
                    <Image src={image} alt={title} height={120} withPlaceholder fit="contain"/>
                    <Text align="center">Iphone 12 Pro Max</Text>
                    <Text align="center">$1300</Text>
                </div> 
            </th>
            <th>
                <Image src={image} alt={title} height={120} withPlaceholder fit="contain"/>
                <Text align="center">Redmi Note 10 Pro</Text>
                <Text align="center">$1300</Text>
            </th>
            <th>
                <Image src={image} alt={title} height={120} withPlaceholder fit="contain"/>
                <Text align="center">Oneplus 9 Pro 5G</Text>
                <Text align="center">$1300</Text>
            </th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ratings</td>
                <td>
                    <Group position="left" spacing="xs">
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
                            <Star size={16} />
                        </Avatar>          
                        <Avatar color="yellow" radius="xl" size={30}>
                            <Star size={16} />
                        </Avatar>
                    </Group>
                </td>
                <td>
                    <Group position="left" spacing="xs">
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
                            <Star size={16} />
                        </Avatar>          
                        <Avatar color="yellow" radius="xl" size={30}>
                            <Star size={16} />
                        </Avatar>
                    </Group>
                </td>
                <td>
                    <Group position="left" spacing="xs">
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
                            <Star size={16} />
                        </Avatar>          
                        <Avatar color="yellow" radius="xl" size={30}>
                            <Star size={16} />
                        </Avatar>
                    </Group>
                </td>                
            </tr>
            <tr>
                <td>Expert Score</td>
                <td>4.9</td>
                <td>4.5</td>
                <td>4.5</td>
            </tr>   
            <tr>
                <td>Display</td>
                <td>6.7-inch</td>
                <td>6.67-inch</td>
                <td>6.7-inch</td>
            </tr> 
            <tr> 
                <td>Platform</td>
                <td>iOS</td>
                <td>MIUI 12</td>
                <td>Oxygen</td>
            </tr>
            <tr>
                <td>Memory</td>
                <td>upto 16 GB</td>
                <td>upto 8 GB</td>
                <td>upto 16 GB</td>
            </tr>
            <tr>
                <td>Storage</td>
                <td>128, 256, 512 GB</td>
                <td>32, 64, 128 GB</td>
                <td>128, 256, 512 GB</td>
            </tr>   
            <tr> 
                <td>Processor</td>
                <td>A14 Bionic chip</td>
                <td>Snapdragon 732G</td>
                <td>Snapdragon 888</td>
            </tr>  
            <tr> 
                <td>Camera</td>
                <td>12 MP</td>
                <td>12 MP</td>
                <td>12 MP</td>
            </tr>  
            <tr>
                <td>Front Camera</td>
                <td>8 MP</td>
                <td>8 MP</td>
                <td>8 MP</td>
            </tr>   
            <tr>
                <td>Technology</td>
                <td>5G</td>
                <td>5G</td>
                <td>5G</td>
            </tr> 
            <tr> 
                <td>Battery</td>
                <td>upto 20 hrs</td>
                <td>upto 17 hrs</td>
                <td>upto 20 hrs</td>
            </tr>
            <tr>
                <td>Warranty</td>
                <td>1 Year</td>
                <td>1 Year</td>
                <td>1 Year</td>
            </tr>
            <tr>
                <td>Bottom Line</td>
                <td>Apple's first 5G phone is perfect for smooth facetime calls</td>
                <td>Redmi first 5G phone is perfect for smooth facetime calls</td>
                <td>Oneplus first 5G phone is perfect for smooth facetime calls</td>
            </tr>   
            <tr>
                <td>Pros</td>
                <td>Affordable, Immersive edge-to-edge display</td>
                <td>Affordable, Immersive edge-to-edge display</td>
                <td>Affordable, Immersive edge-to-edge display</td>
            </tr> 
            <tr> 
                <td>Cons</td>
                <td>The iPhone 12 is a fairly pricy model</td>
                <td>Unable to utilize 5G connectivity</td>
                <td>Unable to utilize 5G connectivity</td>
            </tr>                                              
        </tbody>
      </Table>
    </ScrollArea>
    </>
  );
}