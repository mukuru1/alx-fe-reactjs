import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>{{ color: 'blue', fontSize: '1.5em', margin: '5px 0' }}{props.name}</h2>
      <p>Age:<span style={{ fontWeight: 'bold' }}></span> {props.age}</p>
      <p>Bio:{{ marginTop: '5px' }} {props.bio}</p>
    </div>
  );
};

export default UserProfile;