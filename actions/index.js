const export RECEIVE_ENTRIES = 'ADD_ENTRIES'
const export ADD_ENTRY = 'ADD_ENTRY'


export function receiveEntries(entries) {
	return {
	type: RECEIVE_ENTRIES,
	payload: entries
	}
}

export function addEntry (entry) {
  return {
    type: ADD_ENTRY,
    payload: entry,
  }
}


