import MarkdownPreview from '@uiw/react-markdown-preview'

function Courses() {
    const source = `
    # Cursos
  
  `
    return <MarkdownPreview source={source} className="notFoundContainer" />
}

export default Courses
