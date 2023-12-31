import { Component } from 'react';
import { Oval } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <Oval
        height={150}
        width={150}
        color="#374fdd"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#162aa6"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    );
  }
}

export default Loader;
