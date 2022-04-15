import MarkdownPreview from '@uiw/react-markdown-preview'

function Education() {
  const source = `
    # Education
  
  `
  return <MarkdownPreview source={source} className="fullContainer" />
}

export default Education
