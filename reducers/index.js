import {RECEIVE_ENTRIES, ADD_ENTRY } from '../actions'

export  default function entries (state = {} ,action ){
	switch(action.type) {
	case RECEIVE_ENTRIES:
     	return {
		...state,
                  ...action.payload.entries
               }
	
        case ADD_ENTRY:
	      return {
		...state,
                ...action.payload.entry
	}


	default:
		return state
	
   }
}
