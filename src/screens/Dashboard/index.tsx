import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon, 
    HighlightCards,
    Transactions,
    Title,
    TransactionsList
}from './styles';

export interface DataListProps extends TransactionCardProps{
    id: string
}

export function Dashboard(){
    
    const data: DataListProps[] = [
        {
        id:'1',
        type:'positive',
        title:"Desenvolvimento de sites",
        amount:"R$ 12.000,00",
        category:{
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date:"13/04/2020"
        },
        {
        id:'2',
        type:'negative',
        title:"Hamburguer Pizzy",
        amount:"R$ 59,00",
        category:{
            name: 'Alimentação',
            icon: 'coffee'
        },
        date:"10/04/2020"
        },
        {
            id:'3',
            type:'negative',
            title:"Aluguel do apartamento",
            amount:"R$ 1.2000",
            category:{
                name: 'Casa',
                icon: 'home'
            },
            date:"10/04/2021"
            },
]

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/31596454?v=4' }}/>

                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Tayse Rosa</UserName>
                        </User>    

                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>

            </Header>
        
            <HighlightCards>
                <HighlightCard type="up" title="Entradas" amount="R$17.400,00" lastTransaction="Última entrada dia 13 de abril" />
                <HighlightCard type="down" title="Saídas" amount="R$1259,00" lastTransaction="Última entrada dia 3 de maio" />
                <HighlightCard type="total" title="Total" amount="R$16.141,00" lastTransaction="De 01 a 16 de maio" />
            </HighlightCards>
            
            <Transactions>
                <Title>Listagem</Title>

                <TransactionsList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>  <TransactionCard data={item} /> }
                />

            </Transactions>

        </Container>
    );
}