'use client'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

export default function OsProjectExperience(props) {
    const Title = styled(Typography)`
        padding-bottom: 10px;
        width: 100%;
    `

    const Method = styled(Typography)`
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
            <Title variant='h7'>{props.title}</Title>
            <Method variant='p'>应用技术: {props.method}</Method>
            <Text variant='p'>
                项目介绍: {props.children}
            </Text>
        </Grid2>
    </>)
}