import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em', margin: '5px 0' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ marginTop: '5px' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
