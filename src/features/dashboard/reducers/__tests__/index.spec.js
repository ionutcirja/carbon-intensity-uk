import reducer from '..';

describe('Carbon intensity reducer', () => {
  it('should return the default state if the action type is not defined', () => {
    const initialState = { someProp: 'some value' };
    expect(reducer(initialState, { type: 'UNDEFINED_ACTION' })).toEqual(initialState);
  });

  it('should return a new state containing a loading prop equal with true'
    + ' if the action type is FETCH_CARBON_INTENSITY_REQUEST', () => {
    const initialState = {
      loading: false,
    };
    expect(reducer(initialState, { type: 'FETCH_CARBON_INTENSITY_REQUEST' })).toEqual({
      loading: true,
    });
  });

  it('should return a new state containing the payload data and a loading prop equal with false'
    + ' if the action type is FETCH_CARBON_INTENSITY_SUCCESS', () => {
    const initialState = {
      loading: true,
    };
    const data = {
      from: '27/11/2019',
      to: '28/11/2019',
      generationmix: [
        {
          fuel: 'type1',
          perc: 1,
        },
        {
          fuel: 'type2',
          perc: 2,
        }
      ]
    };
    expect(reducer(initialState, { type: 'FETCH_CARBON_INTENSITY_SUCCESS', payload: { data } })).toEqual({
      loading: false,
      data,
    });
  });

  it('should return a new state containing a loading prop equal with false and an error prop equal with true'
    + ' if the action type is FETCH_CARBON_INTENSITY_ERROR', () => {
    const initialState = {
      loading: true,
    };
    expect(reducer(initialState, { type: 'FETCH_CARBON_INTENSITY_ERROR' })).toEqual({
      loading: false,
      error: true,
    });
  });
});
