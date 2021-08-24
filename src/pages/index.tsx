import React from 'react'
import { GetStaticProps } from 'next'
import { client } from 'graphql/client'
import { GET_LANDING_PAGE } from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

const Index = ({ logo, header, sectionAboutProject }: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject {...sectionAboutProject} />
    <SectionTech />
    <SectionConcepts />
    <SectionModules />
    <SectionAgenda />
    <PricingBox />
    <SectionAboutUs />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request<{
    landingPage: LandingPageProps
  }>(GET_LANDING_PAGE)

  const logo = {
    ...landingPage.logo,
    url: getImageUrl(landingPage.logo.url)
  }

  const headerImg = {
    ...landingPage.header.image,
    url: getImageUrl(landingPage.header.image.url)
  }

  const aboutProjectImg = {
    ...landingPage.sectionAboutProject.image,
    url: getImageUrl(landingPage.sectionAboutProject.image.url)
  }

  return {
    props: {
      ...landingPage,
      logo,
      header: {
        ...landingPage.header,
        image: headerImg
      },
      sectionAboutProject: {
        ...landingPage.sectionAboutProject,
        image: aboutProjectImg
      }
    }
  }
}

export default Index
