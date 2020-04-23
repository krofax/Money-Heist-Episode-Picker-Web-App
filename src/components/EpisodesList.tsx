import React from 'react'
import { IEpisode, IProps } from '../types/interfaces'

const EpisodesList = (props: IProps): Array<JSX.Element> => {
  const { episodes, toggleFavAction, favourites, store } = props
  const { state, dispatch } = store
  
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className='episode-box'>
        <img src={episode.image ? episode.image.medium : ''} alt={`Money Heist - ${episode.name}`} />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Seasion: {episode.season} Number: {episode.number}
          </div>
          <button
            type='button'
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'Unfav'
              : 'Fav'}
          </button>
        </section>
      </section>
    )
  })
}

export default EpisodesList