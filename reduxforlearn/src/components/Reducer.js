import React from 'react'
let lastId = 0

const Reducer = (state = [],  action) => {
    switch(action.type){
        case "bugAdded" :
            return[
                ...state ,
                {
                    id: ++lastId,
                    description : action.payload.description,
                    resolved: false
                }
            ];
        case "bugRemoved":
            return state.filter(bug => bug.id !== action.payload.id)
        default:
            return state;
        }
  return (
    <div>Reducer</div>
  )
}

export default Reducer