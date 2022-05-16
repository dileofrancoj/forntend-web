import { Helmet } from 'react-helmet';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { ContentContainer } from '../../components/Container.styled';

function Education() {
  const source = `
  # Academic training
  ## UTN (2012 - 2018)
  ### Mechanical Engineer
 ## Universidad de Palermo
  
  ### Bachelor of Mathematics (2021 - Current)
  ## Courses
  <ul>
  <li> Initial Web Developer (UTN)</li>
  <li> Advanced Web Developer (UTN)</li>
  <li> React JS (UTN)</li>
  <li> Testing en Javascript (Kent C. Dodds)</li>
  <li> Algorithms and Data structures (UTN)</li>
  <li> IoT (UTN)</li>
  </ul>   
  `;
  return (
    <>
      <Helmet>
        <title>
          Education
        </title>
      </Helmet>
      <ContentContainer>
        <MarkdownPreview source={source} className='fullContainer' />
      </ContentContainer>
    </>
  )
}

export default Education;
