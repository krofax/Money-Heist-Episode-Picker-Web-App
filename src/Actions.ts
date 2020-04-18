//Added IState,
import { IAction, IEpisode, IState, Dispatch } from './types/interfaces'

export const fetchDataAction = async (dispatch: Dispatch) => {
  const URL =
    'https://api.tvmaze.com/singlesearch/shows?q=la-casa-de-papel&embed=episodes'
  
  const data = await fetch(URL)
  const dataJSON = await data.json()
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  })
}

//Add IState withits type
export const toggleFavAction = (state: IState, dispatch: any, episode: IEpisode | any): IAction => {
  //const episodeInFav = state.favourites.includes(episode)
  const episodeInFav = state.favourites.includes(episode)
  let dispatchObj = {
    type: 'ADD_FAV',
    payload: episode
  }
  //add an if statement
  if (episodeInFav) {
    const favWithoutEpisode = state.favourites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    )
    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: favWithoutEpisode
    }
  }

  return dispatch(dispatchObj)
}