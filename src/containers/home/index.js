import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
 

const Home = props => (
  <div>
   HOME PAGE
  </div>
);

const mapStateToProps = state => ({
  // count: state.counter.count,
  // isIncrementing: state.counter.isIncrementing,
  // isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // increment,
      // incrementAsync,
      // decrement,
      // decrementAsync,
      // changePage: () => push('/about-us'),
      // changePageConsultRecruitment: () => push('/consult-recruitment')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
