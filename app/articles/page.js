import Link from 'next/link'
import React from 'react'
export const metadata = {
  title: "Articles Route"
}
function Articles() {
  return (
    <div>
      Articles
      <Link href="/articles//features-article">
          <button>features-article</button>
        </Link>
      <Link href="/articles/anything">
          <button>Dynamic Route</button>
        </Link>
    </div>
  )
}

export default Articles
