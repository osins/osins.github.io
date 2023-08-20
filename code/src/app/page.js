'use client'
import OsText from '@/components/text'
import OsWorkExperience from '@/components/work.experience'
import OsProjectExperience from '@/components/project.experience'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

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
          <Typography variant="h6" gutterBottom>王少英 简历</Typography>
        </Grid2>
        <Grid2 xs={5} sm={5} justifyContent='right'>
          <Typography variant="h6" gutterBottom>Osins.github.io</Typography>
        </Grid2>
      </Top>
      <Grid2>
        <Grid2 xs={12}>
          <OsText title='基本信息'>性别：男 , 年龄: { new Date().getFullYear()-1977 } 岁, 户口：山东胶州市</OsText>
          <OsText title='工作年限'>{ new Date().getFullYear()-2002 } 年 IT 软件开发经验</OsText>
          <OsText title='学历'>本科 山东省行政学院 经济管理 (1999/9-2002/7)</OsText>
          <OsText title='从事过得行业'>B2B 平台开发、游戏、企业教育培训、人力资源、信息安全、智能家居/家电</OsText>
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
          <OsText title='工具'>
            Docker、Docker Swarm、Docker Compose、Jenkins、 Git、Ansible、阿里云CLI等工具
          </OsText>
          <OsText title='开发工具'>
            VsCode、Idea、Postman。
          </OsText>
        </Grid2>
      </Grid2>
      <Grid2 container>
        <Grid2 xs={12} style={{paddingBottom:'20px'}}><Typography variant='h6'>工作经历</Typography></Grid2>
        <OsWorkExperience
          title='青岛中科恒信 (2002)'
          industry='政企'
        >
          青岛服装行业平台、青州卷烟厂官网、电子政务考试系统
        </OsWorkExperience>
        <OsWorkExperience
          title='上海悠游网软件科技有限公司 (2004)'
          industry='游戏'
        >
          集各类网络游戏研发，运营为一体的知名游戏公司，位于繁华的上海市漕河泾开发区黄金地段，具备良好的工作环境，资金实力雄厚，现有各类员工总数已超过200名，公司以全新的网络经营方式，代理经营国内外优良线上游戏，成为国内网络游戏的领军企业之一。
        </OsWorkExperience>
        <OsWorkExperience
          title='上海互创电子商务 (2008)'
          industry='电子商务'
        >
          B2B电子商务平台（企业、个人、供需、招聘等信息平台）
        </OsWorkExperience>
        <OsWorkExperience
          title='淘课网(上海) (2010)'
          industry='培训'
        >
          整合丰富的培训机构和培训讲师资源，为企业用户提供公开课采购服务，并通过内训招标服务帮助企业用户快速找到高质量的内训服务供应商。淘课网致力于打造培训需求方（企业用户）与培训供给方（培训机构、培训讲师）之间的培训交易平台，成为连接供需双方最便捷的通道与桥梁。淘课网是中国领先的管理培训网站，以最海量的资源、最便捷的服务、最实惠的价格闻名中国管理培训界。
        </OsWorkExperience>
        <OsWorkExperience
          title='蓝海集团(上海) (2012)'
          industry='人力资源'
        >
          为全国企事业机构提供全方位、多层次的人力资源服务，包括人才派遣/人事代理、福利管理、RPO&猎头服务、业务流程外包、HR&员工关系咨询、体验式培训和成长型企业一站式HRO解决方案等专业服务。
        </OsWorkExperience>
        <OsWorkExperience
          title='青岛云裳羽衣物联科技有限公司（海尔小微）(2015)'
          industry='物联网'
        >
          海尔洗衣机产业下属小微企业，整合服装、家纺、家居、电器、洗护行业，实现衣物全生命周期智能管理与服务。
        </OsWorkExperience>
        <OsWorkExperience
          title='上海易念科技有限公司 (2020)'
          industry='信息安全'
        >
          服务全国中大型企业的信息安全方面的咨询、软硬件技术服务、培训等。主要客户上汽集团、平安保险、蔚来汽车等。
        </OsWorkExperience>
      </Grid2>

      <Grid2 container>
        <Grid2 xs={12} style={{paddingBottom:'20px'}}><Typography variant='h6'>项目经验</Typography></Grid2>
        <OsProjectExperience
          title='青岛服装行业供需平台'
          method='ASP、HTML、Javascript'
        >
          青岛服装行业平台
        </OsProjectExperience>

        <OsProjectExperience
          title='www.iyoyo.com.cn'
          method='C#、ASP.NET、PHP、JAVA、C++、MySQL、SQL SERVER、Web Service'
        >
          游戏官网、游戏通行账号管理系统、游戏储值系统、游戏卡务系统、游戏虚拟宝物系统、游戏推广员系统、各游戏管理后台
        </OsProjectExperience>

        <OsProjectExperience
          title='互创电子商务平台'
          method='C#、ASP.NET、JAVA、SQL SERVER、Web Service'
        >
          B2B 电子商务平台，其中包含企业及其产品信息发布、在线下单、招聘，个人简历、博客
        </OsProjectExperience>

        <OsProjectExperience
          title='淘课网'
          method='C#、ASP.NET、PHP、JAVA、MySQL、Web Service、Sphinx、Memcached'
        >
          www.taoke.com 
        </OsProjectExperience>

        <OsProjectExperience
          title='人力资源外包管理系统'
          method='C#、ASP.NET、MySQL、Web Service、Sphinx、Memcached'
        >
          人力资源外包、薪资、福利管理系统
        </OsProjectExperience>

        <OsProjectExperience
          title='海尔衣联网平台'
          method='PHP、java、Golang、MySQL、Redis、安卓、IOS、Docker、小程序、Electron'
        >
          海尔衣联网平台、云裳羽衣电商系统、海尔洗衣机供销系统、洗护门店管理系统、海尔智慧门店管理系统、3D 试衣镜、智能鞋柜、智能图书管理系统
        </OsProjectExperience>

        <OsProjectExperience
          title='信息安全评测系统'
          method='PHP、java、Golang、H5、小程序、Pixi.js、Docker、MySQL、Redis'
        >
          平安保险安全意识评测系统、蔚来汽车安全意识评测系统、上汽集团安全意识评测系统
        </OsProjectExperience>
      </Grid2>
    </Main>
  )
}
