'use client'
import OsText from '@/components/text'
import OsWorkExperience from '@/components/work.experience'
import OsProjectExperience from '@/components/project.experience'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import OsProjectItems from '@/components/project.items'
import OsWorkItems from '@/components/work.items'
import OsBaseItems from '@/components/base.items'

const Main = styled(Grid2)`
  padding: 10px;
`

const Top = styled(Grid2)`
`

export default function Home() {
  return (
    <Main container>
      <Top container xs={12}>
        <Grid2 xs={7} sm={7}>
          <Typography variant="h6" gutterBottom>王少英 181-0184-5536</Typography>
        </Grid2>
        <Grid2 xs={5} sm={5} justifyContent='right'>
          <Typography variant="h6" gutterBottom>Osins.github.io</Typography>
        </Grid2>
      </Top>

      <Grid2 container spacing={4}>
        <Grid2 xs={3}><OsBaseItems/></Grid2>
        <Grid2 xs={5}><OsWorkItems/></Grid2>
        <Grid2 xs={4}><OsProjectItems/></Grid2>
      </Grid2>
     
    </Main>
  )
}
