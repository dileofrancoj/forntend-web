import MarkdownPreview from '@uiw/react-markdown-preview';

function Home() {

    const source = `
  <h1 color='red'>hola mundo</h1>
  
  `;
    return (
        <MarkdownPreview source={source} className="md" />
    )
}

export default Home
