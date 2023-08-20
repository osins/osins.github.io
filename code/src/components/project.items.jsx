'use client'
import OsText from '@/components/text'
import OsWorkExperience from '@/components/work.experience'
import OsProjectExperience from '@/components/project.experience'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

export default function OsProjectItems() {
    return (<Grid2 container>
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
          method='PHP、java、Golang、H5、小程序、Pixi.js、Docker、MySQL、Redis、PostgreSQL'
        >
          平安保险安全意识评测系统、蔚来汽车安全意识评测系统、上汽集团安全意识评测系统
        </OsProjectExperience>
      </Grid2>)
}