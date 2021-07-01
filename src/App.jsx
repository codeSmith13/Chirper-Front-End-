import React, { Component} from "react";

let OneChirp = (props) => {
  return (
    <>
      <div className="card m-4 text-center w-25">
        <div className="card-body">
          <h5 className="card-title">{props.chirp.name}</h5>
          <p className="card-text">{props.chirp.text}</p>
        </div>
      </div>
    </>
  );
};

let ChirpList = (props) => {return props.chirps.map((oneChirp) => (<OneChirp chirp={oneChirp} />));};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      text: "",
      chirpArr: [
        {
          name: "Oscar Wilde",
          text: "Anyone who lives within their means suffers from a lack of imagination",
        },
        {
          name: "Bobby Boucher",
          text: "My Mama says that alligators are ornery because they got all them teeth and no toothbrush",
        },
        {
          name: "Sheldon Cooper",
          text: "I’m not insane. My mother had me tested",
        },
      ],
    };
  }

  chirpName = (e) => {this.setState({ name: e.target.value });};

  chirpText = (e) => {this.setState({ text: e.target.value });};

  chirpInfo() {
    let newChirp = {
      name: this.state.name,
      text: this.state.text,
    };

    this.setState({ chirpArr: [...this.state.chirpArr, newChirp] });
  }
  render() {
    return (
      <>
           <h1 className="text-white text-center ">Chirper (Front End)</h1>
        <input type="text"className="m-2 "placeholder="Username"onChange={(e) => this.chirpName(e)}value={this.state.name}/>
        <input type="text"  className="m-2" placeholder="Your thoughts" onChange={(e) => this.chirpText(e)}value={this.state.text}/>
        <button className="btn btn-warning m-1" onClick={() => this.chirpInfo()}>Chirp Chirp</button>
        <ChirpList chirps={this.state.chirpArr}/>
      </>
    );
  }

}

export default App;
