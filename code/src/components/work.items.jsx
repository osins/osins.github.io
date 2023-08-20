'use client'
import OsText from '@/components/text'
import OsWorkExperience from '@/components/work.experience'
import OsProjectExperience from '@/components/project.experience'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import OsProjectItems from '@/components/project.items'

export default function OsWorkItems() {
    return (<Grid2 container>
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
      </Grid2>)
}