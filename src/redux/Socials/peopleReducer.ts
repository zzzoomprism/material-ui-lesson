import {PeopleType} from "../../types/socials";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {InferActionTypes, RootStateType} from "../rootReducer";
import {serverAPI} from "../../api/api";
import {getUserByIdThunk} from "./profileReducer";


const initialState = {
    people: [] as Array<PeopleType>,
    followQueue: [] as Array<number>,
    loading: false as boolean,
    isCurrentUserFollowed: false,
};



type InitialStateType = typeof initialState;
const reducer = (state = initialState, action: ActionType): InitialStateType => {
    const newState = {...state};
    switch (action.type) {
        case "SET_PEOPLE_TO_STATE":
            newState.people = action.people;
            break;
        case "FOLLOW_ACTION":
            newState.people = state.people.map(el => {
                if (el.id === action.id)
                    return {...el, followed: true}
                return el;
            })
            newState.isCurrentUserFollowed = true;
            break;
        case "UNFOLLOW_ACTION":
            newState.people = state.people.map(el => {
                if (el.id === action.id)
                    return {...el, followed: false}
                return el;
            })
            newState.isCurrentUserFollowed = false;
            break;
        case "SET_PEOPLE_LOADING":
            newState.loading = action.data;
            break;
        case "GET_USER_BY_ID":
            let a;
            if(state.people.length !== 0) {
                a = state.people.find((item) => {
                    if (item.id === action.userId)
                        return item;
                });
                if(a)
                newState.isCurrentUserFollowed = a.followed;
                console.log(a);
                console.log(newState.isCurrentUserFollowed);
            }
            break;
        case "SET_FOLLOW_QUEUE":
            newState.followQueue = [...state.followQueue, action.id];
            break;
        case "DELETE_FOLLOW_QUEUE":
            newState.followQueue = state.followQueue.filter((el)=>{
                return el !== action.id;
            });
            break;

    }

    return newState;

};

export default reducer;



export const actions = {
    setPeopleToState: (people: Array<PeopleType>) => ({type: "SET_PEOPLE_TO_STATE", people} as const),
    followAction: (id: number) => ({type: "FOLLOW_ACTION", id: id}as const),
    unfollowAction: (id: number) => ({type: "UNFOLLOW_ACTION", id: id}as const),
    setPeopleLoading: (data: boolean) => ({type: "SET_PEOPLE_LOADING", data: data }as const),
    getUserById: (userId: number) => ({type: "GET_USER_BY_ID", userId} as const),
    setFollowQueue: (id: number) => ({type: "SET_FOLLOW_QUEUE", id} as const),
    deleteFollowQueue: (id: number) => ({type: "DELETE_FOLLOW_QUEUE", id} as const),
}

type ActionType = InferActionTypes<typeof actions>;


export const setPeopleThunk = (page: number) :ThunkAction<void, RootStateType, any, ActionType>=> async (dispatch) => {
    dispatch(actions.setPeopleLoading(true));
    let people = await serverAPI.users(page);
    dispatch(actions.setPeopleToState(people.items));
    dispatch(actions.setPeopleLoading(false));
}


export const followingThunk = (userId : number):ThunkAction<void, RootStateType, any, ActionType> => (dispatch: Dispatch<ActionType>) => {
    dispatch(actions.setFollowQueue(userId));
    serverAPI.follow(userId)
        .then(() => {
            dispatch(actions.followAction(userId));
            dispatch(actions.deleteFollowQueue(userId));
        });
}


export const unfollowingThunk = (userId : number):ThunkAction<void, RootStateType, any, ActionType> => (dispatch: Dispatch<ActionType>) => {
    dispatch(actions.setFollowQueue(userId));
    serverAPI.unfollow(userId)
        .then(() => {
            dispatch(actions.unfollowAction(userId));
            dispatch(actions.deleteFollowQueue(userId));
        })
}

export const getCurrentUserFollow = (userId: number): ThunkAction<void, RootStateType, any, ActionType> => (dispatch: Dispatch<ActionType>) => {
    dispatch(actions.getUserById(userId));
}