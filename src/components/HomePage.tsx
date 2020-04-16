import React, { useEffect, lazy, Suspense } from 'react'

import App from '../App'
import { Store } from '../Store'
import { IEpisodeProps } from '../interface/interfaces'
import { fetchDataAction, toggleFavAction } from '../Actions'

const EpisodeList = lazy<any>(() => import('./EpisodesList'))

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store)

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  })

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  }

  return (
    <App>
      <Suspense fallback={<div>loading...</div>}>
        <section className='episode-layout'>
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </App>
  )
}
