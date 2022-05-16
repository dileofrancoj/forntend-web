import { Helmet } from 'react-helmet';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { ContentContainer } from '../../components/Container.styled';

function Courses() {
  const source = `
  # IT Trainer
  ## UTN (2016 - 2022)
  I have been a professor of web technologies at UTN for five years.
  ### Initial Web Developer
  It is an introductory course that explains web development from the skratch. Starting with HTML5, CSS3, javascript and getting into NodeJS with MySQL
  </br>
  Course duration: 75hs
  ### Advanced Web Developer
  It is a course oriented to the business world. <br/>This course focuses on javascript-based technologies starting with NodeJS and MongoDB and using Angular as a frontend framework.
  </br>
  Course duration: 75hs 
  </br>
  
  ### React JS Developer
  This course is 100% oriented to learn the use of react, focusing on hooks, good practices, performance and scalability of frontend applications.
  </br>
  Course duration: 75hs 

  ## PUNCHIT (Personal entrepreneurship) - (2020 - Actually)
  Punchit is a free online academy of web development courses that aims to bring knowledge to interested people for free

  ### Javascript
  ### Fullstack developer (React & NodeJS)
  ### Algorithms
  `;

  return (
    <>
      <Helmet>
        <title>
          Courses
        </title>
      </Helmet>
      <ContentContainer>
        <MarkdownPreview source={source} className='pageContainer' />
      </ContentContainer>
    </>
  )
}

export default Courses;
