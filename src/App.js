import React, { useEffect, useState } from "react";
import "./App.css";
import { Preview } from "./components/Preview";
import { Title } from "./components/Title";
import { Description } from "./components/Description";
import { Agreements } from "./components/Agreements";
import { MadeIn } from "./components/MadeIn";
import axios from "axios";
import { Form } from "./components/Form";

const idLanding = window.location.href.split("/").pop();

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    axios.get(`https://dev.api.lp.chatforma.com/landing/${idLanding}`)
      .then((resp) => {
        setData(resp.data)
      })
      .catch((err) => setError(err.message))
  }, [])

  return (
    data.id ?
      (<div className="container">
        <Preview
          previewVideo={data["preview_video"]}
          previewImage={data["preview_image"]}
        />
        <Title title={data.title} />
        <Description description={data.description} />
        <Form
          bots={data.bots}
          isEmail={data["collect_email"]}
          isPhone={data["collect_phone"]}
          idLanding={idLanding}
          tag={data.tag}
        />
        <Agreements />
        <MadeIn />
      </div>) :
      error ?
        <div className="message">{error}</div> :
        <div className="message">Loading...</div>
  );
}

export default App;
