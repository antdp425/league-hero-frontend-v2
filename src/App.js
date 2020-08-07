import React from 'react';
import { connect } from 'react-redux';

function App() {
  return (
    <div>
      Hi
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    leagues: state.leagues,
    teams: state.teams
  }
}

export default connect(mapStateToProps)(App)
