import { client } from 'graphql/client'
import { GET_LANDING_PAGE } from 'graphql/queries/getLandingPage'
import { formatPrice } from 'utils/formatPrice'
import { getImageUrl } from 'utils/getImageUrl'
import { LandingPageProps } from 'types/api'

export async function fecthLandingPageData() {
  const { landingPage } = await client.request<{
    landingPage: LandingPageProps
  }>(GET_LANDING_PAGE)

  const logo = {
    ...landingPage.logo,
    url: getImageUrl(landingPage.logo.url)
  }

  const header = {
    ...landingPage.header,
    image: {
      ...landingPage.header.image,
      url: getImageUrl(landingPage.header.image.url)
    }
  }

  const sectionAboutProject = {
    ...landingPage.sectionAboutProject,
    image: {
      ...landingPage.sectionAboutProject.image,
      url: getImageUrl(landingPage.sectionAboutProject.image.url)
    }
  }

  const sectionTech = {
    title: landingPage.sectionTech.title,
    techIcons: landingPage.sectionTech.techIcons.map((i) => ({
      title: i.title,
      icon: {
        name: i.icon.name,
        url: getImageUrl(i.icon.url)
      }
    }))
  }

  const pricingBox = {
    ...landingPage.pricingBox,
    totalPrice: formatPrice(landingPage.pricingBox.totalPrice),
    priceInstallment: formatPrice(landingPage.pricingBox.priceInstallment)
  }

  const sectionAboutUs = {
    title: landingPage.sectionAboutUs.title,
    authors: landingPage.sectionAboutUs.authors.map((author) => ({
      ...author,
      photo: {
        alternativeText: author.photo.alternativeText,
        url: getImageUrl(author.photo.url)
      },
      socialLinks: author.socialLinks.map((socialLink) => ({
        title: socialLink.title,
        url: getImageUrl(socialLink.url)
      }))
    }))
  }

  const sectionReviews = {
    title: landingPage.sectionReviews.title,
    reviews: landingPage.sectionReviews.reviews.map((r) => ({
      ...r,
      photo: {
        name: r.photo.name,
        url: getImageUrl(r.photo.url)
      }
    }))
  }

  return {
    logo,
    header,
    sectionAboutProject,
    sectionTech,
    sectionConcepts: landingPage.sectionConcepts,
    sectionModules: landingPage.sectionModules,
    sectionAgenda: landingPage.sectionAgenda,
    pricingBox,
    sectionAboutUs,
    sectionReviews,
    sectionFaq: landingPage.sectionFaq
  }
}
