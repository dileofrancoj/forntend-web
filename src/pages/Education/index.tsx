import { Helmet } from 'react-helmet';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Footer from '../../components/Footer';

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
      <MarkdownPreview source={source} className='fullContainer' />
      <Footer />
    </>
  )
}

export default Education;
