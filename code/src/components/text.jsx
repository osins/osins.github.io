'use client'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'

export default function OsText(props) {
    const Title = styled(Typography)`
        padding-bottom: 10px;
    `

    const Text = styled(Typography)`
        display: flex;
        padding-bottom: 20px;
    `
    
    return (<>
        <Title variant='h6'>{props.title}</Title>
          <Text variant='p'>
           {props.children}
          </Text>
    </>)
}