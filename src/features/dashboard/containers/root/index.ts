import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchCarbonIntensityRequest } from '../../actions';
import { State, CarbonIntensity } from '@types';
import Dashboard from '../../components/root';

type DispatchProps = {
  actions: {
    fetchCarbonIntensityRequest: () => void;
  };
}

const mapStateToProps = (state: State): CarbonIntensity => ({
  ...state.carbonIntensity,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  actions: {
    ...bindActionCreators({
      fetchCarbonIntensityRequest,
    }, dispatch),
  },
});

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export default ConnectedComponent;
