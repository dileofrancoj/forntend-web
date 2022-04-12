import MarkdownPreview from '@uiw/react-markdown-preview';

function Home() {

  const source = `
  <h1>Franco Di Leo</h1>
  
  `;
  return (
    <MarkdownPreview source={source} className="pageContainer" />
  )
}

export default Home
