import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeroImageFull from '../components/HeroImageFull'
import HeroText from '../components/HeroText'
import HeroContactIcons from '../components/HeroContactIcons'
import Navbar from '../components/Navbar'
import useSticky from '../hooks/useSticky'
import ContentBlock from '../components/ContentBlock'
import TextImageSection from '../components/TextImageSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import ProjectCard from '../components/ProjectCard'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
// data
import inputData from '../pagesInput/projects'
// markup
const IndexPage = ({ data }) => {
  // HOOKS

  const { isSticky, element } = useSticky()

  const heroImages = [
    {
      ...data.mobileImage.childImageSharp.fluid,
      media: `(max-width: 540px)`,
    },
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 541px)`,
    },
  ]

  const profileImage = getImage(data.aboutMeImage)

  const project1Image = getImage(data.project1Image)
  const project2Image = getImage(data.project2Image)
  const project3Image = getImage(data.project3Image)
  const project4Image = getImage(data.project4Image)
  const project5Image = getImage(data.project5Image)
  const project6Image = getImage(data.project6Image)
  const project7Image = getImage(data.project7Image)

  const { projectArray } = inputData

  const projectImagesArray = [
    project1Image,
    project2Image,
    project3Image,
    project4Image,
    project5Image,
    project6Image,
    project7Image,
  ]

  return (
    <Layout>
      <HeroImageFull sources={heroImages} element={element}>
        <HeroText>
          <HeroContactIcons />
        </HeroText>
      </HeroImageFull>
      <div ref={element} />
      <Navbar sticky={isSticky} />
      <ContentBlock navBarMargin>
        <TextImageSection image={profileImage} />
      </ContentBlock>
      <ContentBlock color>
        <SkillsSection />
      </ContentBlock>
      <ContentBlock>
        <ExperienceSection />
      </ContentBlock>
      <ContentBlock color>
        <ProjectsSection>
          {projectArray.map(project => (
            <ProjectCard
              title={project.title}
              lead={project.lead}
              text={project.text}
              bullets={project.bullets}
              links={project.links}
              image={projectImagesArray[project.number]}
            />
          ))}
        </ProjectsSection>
      </ContentBlock>
      <ContentBlock>
        <ContactSection />
      </ContentBlock>
      <Footer />
    </Layout>
  )
}

export default IndexPage

// Select Images using pagequery below.

export const pageQuery = graphql`
  query {
    mobileImage: file(relativePath: { eq: "hero/hero-mobile-80.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 540, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopImage: file(relativePath: { eq: "hero/hero-desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    aboutMeImage: file(relativePath: { eq: "profile/profile-glacier.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    project1Image: file(relativePath: { eq: "projects/essential-gatsby.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    project2Image: file(relativePath: { eq: "projects/essential-node.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    project3Image: file(relativePath: { eq: "projects/question.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    project4Image: file(relativePath: { eq: "projects/react-blog.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    project5Image: file(relativePath: { eq: "projects/blog-admin.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    project6Image: file(relativePath: { eq: "projects/blackjack.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    project7Image: file(relativePath: { eq: "projects/portfolio-old.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object,
}

IndexPage.defaultProps = {
  data: {},
}
