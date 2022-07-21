import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync, selectar } from '../../app/mySlice'

export function Counter() {
  const ar = useSelector(selectar);
  const dispatch = useDispatch();

  return (
    <div>
      
      <button
        onClick={() => dispatch(incrementAsync())}
      >
        my Async
      </button>
      {ar.length}
      {ar.map(user=><div>{user.name}</div>)}
    </div>
  );
}
