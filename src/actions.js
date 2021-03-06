//this file can be called actionCreator.js as it has functions which are creating actions/objects for us
import * as actions from './actionTypes';

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
});

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id
    }
});

// Different syntax
// export function bugAdded(description) {
//     return {
//         type: actions.BUG_REMOVED,
//         payload: {
//             description: 'Bug1'
//         }
//     };
// }