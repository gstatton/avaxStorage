import React from "react";

// 1. Importing other modules

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      account: null,
      contract: null,
    };
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    // 2. Load web3
    // 3. Load Account
    // 4. Load Smart-Contract instance
  }

  render() {
    return (
      <div>
        <font color="white">Distributed File Manager</font>
        {/* 5. Navbar */}

        {/* 6. IPFS Viewer component */}

        {/* 7. IPFS Uploader component */}
      </div>
    );
  }
}
export default App;