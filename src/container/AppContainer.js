import React from 'react';

export default function AppContainer(props) {
  return (
    <div className="app-container">
      {props.children}
    </div>
  )
}