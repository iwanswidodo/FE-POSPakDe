import { useEffect } from 'react'

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `${title} — POS Pak De Surya`
  }, [title])
}
