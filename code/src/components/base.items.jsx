'use client'
import OsText from '@/components/text'
import OsWorkExperience from '@/components/work.experience'
import OsProjectExperience from '@/components/project.experience'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import OsProjectItems from '@/components/project.items'
import OsWorkItems from '@/components/work.items'

export default function OsBaseItems() {
    return (
        <Grid2>
        <Grid2 xs={12}>
          <OsText title='基本信息'>性别：男 , 年龄: { new Date().getFullYear()-1977 } 岁, 户口：山东胶州市</OsText>
          <OsText title='工作年限'>{ new Date().getFullYear()-2002 } 年 IT 软件系统(BS/CS)开发经验</OsText>
          <OsText title='学历'>本科 山东省行政学院 经济管理 (1999/9-2002/7)</OsText>
          <OsText title='行业'>电子商务、游戏、企业教育培训、人力资源、信息安全、智能家居/家电</OsText>
          <OsText title='语言'>ASP、C#、PHP、Java、Golang、Lua、Python、Shell、Javascript、TypeScript</OsText>
          <OsText title='框架'>
            Spring boot、Spring cloud、 Javalin、Guice、Guava、Nestjs、ReactJs、Vuejs、Angular2、Nextjs、Pixijs、Tweenjs、Nextjs、gofiber、UniApp
          </OsText>
          <OsText title='数据'>
            MySQL、SQL SERVER、Postgre、Redis、Memcached、Sphinx、ELK
          </OsText>
          <OsText title='服务器/运维/工具'>
            Nginx、Docker、Docker Swarm、Docker Compose、Jenkins、SSH、 Git、GitLab、Ansible、阿里云CLI
          </OsText>
          <OsText title='操作系统'>
            Windows、Linux（Debian、Ubuntu、CentOs）、MacOs
          </OsText>
          <OsText title='开发'>
            VsCode、Idea、Postman。
          </OsText>
        </Grid2>
      </Grid2>
    )
}