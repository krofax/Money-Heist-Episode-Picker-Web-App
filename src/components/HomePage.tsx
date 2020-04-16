import React, { useContext, useEffect, lazy, Suspense } from 'react'

import App from '../App'
import { Store } from '../Store'
import { IEpisodeProps } from '../types/interfaces'
import { fetchDataAction } from '../Actions'

const EpisodeList = lazy<any>(() => import('./EpisodesList'))

  const HomePage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  })

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch }
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

export default HomePage
