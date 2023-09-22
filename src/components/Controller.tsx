import { createSignal } from "solid-js";
import * as Tone from "tone";

const Controller = () => {
  const [active, setActive] = createSignal(false);

  const toggleActive = async () => {
    setActive(!active());
    await Tone.start();
    console.log('audio is ready');
  }

  return (
    <div>
      <button type="button" onClick={toggleActive}>
        Start / Stop
      </button>
      {active().toString()}
    </div>
  );
}

export default Controller;