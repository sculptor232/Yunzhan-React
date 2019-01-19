import * as ActionTypes from './ActionTypes';
import RequestProcessors from '../../../../../RequestProcessors';
import NAMESPACE from '../../../../../Namespace';

export function getScreenList()
{
    return async dispatch =>
    {
        return RequestProcessors.sendGetScreenListRequestAsync(dispatch, getScreenListSucceed, getScreenListFailed);
    };
}


export function selectScreen(id)
{
    return {
        type: ActionTypes.SELECT_SCREEN,
        id
    };
}

export function unselectScreen(id)
{
    return {
        type: ActionTypes.UNSELECT_SCREEN,
        id
    };
}

export function selectAllScreens(screenIdSet)
{
    return {
        type: ActionTypes.SELECT_ALL_SCREENS,
        screenIdSet
    };
}

export function unselectAllScreens()
{
    return {
        type: ActionTypes.UNSELECT_ALL_SCREENS
    };
}

export function getScreenListSucceed(screenList)
{
    return {
        type: ActionTypes.GET_SCREEN_LIST_SUCCEED,
        [NAMESPACE.SCREEN_MANAGEMENT.LIST.SCREEN]: screenList
    };
}

export function getScreenListFailed()
{
    return {
        type: ActionTypes.GET_SCREEN_LIST_FAILED
    };
}
