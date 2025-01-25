import Link from 'next/link'
import React from 'react'

interface PropsCart {
  item: number
}


function ProdView({item}:PropsCart) {
  return (
    <>
        <Link href={`/${item}`}>
            Ver Mas
          </Link>
    </>
  )
}

export default ProdView