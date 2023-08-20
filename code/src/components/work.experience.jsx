'use client'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

export default function OsWorkExperience(props) {
    const Title = styled(Typography)`
        padding-bottom: 10px;
        width: 100%;
    `

    const Industry = styled(Typography)`
        padding-bottom: 10px;
        width: 100%;
    `

    const Text = styled(Typography)`
        display: flex;
        width: 100%;
        padding-bottom: 30px;
    `
    
    return (<>
        <Grid2 container>
            <Title variant='h7'>公司名称: {props.title}</Title>
        <Industry variant='p'>涉及行业: {props.industry}行业</Industry>
          <Text variant='p'>
           简单介绍: {props.children}
          </Text>
        </Grid2>
    </>)
}