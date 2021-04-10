import React from 'react';
import Content from './Content';
import Footer from './Footer';
import LSide from './LSide';
import Top from './Top';

const styles = {
  middle: {
    display: 'flex',
    flex: 1,
    height: '600px',
    flexDirection: 'row',
  }
}

export default function Main () {
  return (
    <div>
      {/* top */}
      <Top />
      {/* middle */}
      <div style={styles.middle}>
        <LSide />
        <Content />
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}