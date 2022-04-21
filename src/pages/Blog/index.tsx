import MarkdownPreview from '@uiw/react-markdown-preview';

function Blog() {
  const source = `
    # En construcción
  
  `;
  return <MarkdownPreview source={source} className='fullContainer' />;
}

export default Blog;
