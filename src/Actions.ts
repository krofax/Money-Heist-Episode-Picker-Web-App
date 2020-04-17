//Added IAction, IEpisode, IState,
import { IAction, IEpisode, Dispatch } from './types/interfaces'

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

//added togglefavaction code
export const toggleFavAction = (dispatch: any, episode: IEpisode | any): IAction => {
  let dispatchObj = {
    type: 'ADD_FAV',
    payload: episode
  }

  return dispatch(dispatchObj)
}