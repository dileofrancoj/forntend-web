import MarkdownPreview from '@uiw/react-markdown-preview'

function NotFound() {
    const source = `
    # Página no encontrada
  
  `
    return <MarkdownPreview source={source} className="md" />
}

export default NotFound
