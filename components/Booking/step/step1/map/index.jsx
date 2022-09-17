import React from 'react';

export default function Map({ map }) {
  return (
    <div>
      <iframe
        src={map}
        width="100%"
        height="450"
        style={{ borderRadius: '10px', border: '1px solid #006c4e' }}
      ></iframe>
    </div>
  );
}
