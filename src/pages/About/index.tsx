import { Helmet } from 'react-helmet';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { ContentContainer } from '../../components/Container.styled'

function Home() {
  const source = `
  # Franco Di Leo
  ## About me 
  I'm passionate about programming, physics and mathematics.
I have fun with technology, I love challenges and
entrepreneurship. </br>
I have vast experience in IT education. You can see all the courses in courses tab
  ## Work Experience
 ### - Fullstack Engineer at Pedidos Ya (Nov 2021 - Current)
  ### - Tech leader en Municipalidad de San Nicolas</b> (Jan 2021 - Nov 2021)
  <h4> Job description</h4>
  IT Consultant helping teams across projects. Experience
managing IoT projects. Experience working with NodeJS
and ReactJS. Solid experience working with Netlify.

<li>Help new developers into projects.</li>
<li>Help teams architecture new projects.</li>
<li>Help develop a website to monitor IoT appliances.</li>

 ### Fullstack Engineer at Mercado Libre Arg (Jan 2021 - Nov 2021)
 Developer working across projects and initiatives.
 Experience managing whole Front-End initiatives from UX
 conception to developing. Great organization skills.

 <li>Helped refactor several pages in order to correctly make
form validations and stop multiple glitches.</li>
<li>Create project documentation to enable innersource
project initiative.</li>
<li>Enhance testing quality by standardizing how we do
them.</li>
<li>Create changelog by standardizing committing messages. </li>

### CEO Chaak Argentina (Feb 2019 Dec 2020)
Sales manager, Software analyst and developer of a small self made business. <br/>
Chaak was a cultivation system that allows you
to control all your plants from a mobile application.
<br/>
Responsible for the application and electronic development.
Experience in C, Angular, AWS, IoT, NodeJS and electronics.

### CTO Solwin Argentina (August 2016 - 2021)
Sales manager, Software analyst and developer of a small self made business. 
Responsible for all company projects (E-
commerce platform, implementation, WebServers, MailServers,

AWS infrastructure).
Responsible for the analysis, design and development of all
projects. Experience in JIRA, Angular, AWS, Docker and
WebServers.
  `;
  return (
    <>
      <Helmet>
        <title>
          About me
        </title>
      </Helmet>
      <ContentContainer>
        <MarkdownPreview source={source} className='pageContainer' />
      </ContentContainer>

    </>
  )
}

export default Home;
