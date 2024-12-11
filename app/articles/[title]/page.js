import React from 'react'
export const metadata = {
  title: "Dynamic Route"
}
function ShowArticlePage({params}) {
  console.log(params)

  return (
    <div>
      Show Article Page

      Dynamic Route Is ={">"} {params.title}
    </div>
  )
}

export default ShowArticlePage
