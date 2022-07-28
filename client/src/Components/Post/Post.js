import React, { useState } from "react";
import "./post.css";
import avatar from "./avatar1.png";
import med from "./Photos GoMyCode Gabés 20.05.2022 (95).1.jpg";
import seat from "./seat.png";

const Post = () => {
  const [profile, setprofile] = useState(false);
  return (
    <div className="wrapper">
      <div className="overviewInfo">
        <div className="postinfo" >
          <h4 style={{ textAlign:'center'}}>30DT</h4>
          <div className="grouptext">
            <h3>Départ</h3>
            <p>Gabès</p>
          </div>
          <div className="grouptext">
            <h3>Arrivé</h3>
            <p>Tunis</p>
          </div>
          <div className="grouptext">
            <h3>Date</h3>
            <p>22/06/2022 à 10:00</p>
          </div>
          {/* <div className="productImage">
          <img src="https://i.imgur.com/ckSgzLQ.png" alt="product: ps5 controller image" />
        </div> */}
        </div>
        <div className="driver">
        <img src={med} onClick={() => setprofile(true)}/>

        {/* /Driver's Profile */}
        
            <div className="profileContainer">
              <div className="profile">
                <img src={med} onClick={() => setprofile(true)}/>
                <h5>Foulen Foulani</h5>
                <p>29 ans</p>
                <p>20452201</p>
                <p>Peugeot 3008</p>


              </div>
              <div className="latest">

              </div>
              <div className="opinions">

              </div>
            </div>


          <h5>Foulen Foulani</h5>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:'30px'}} >
          <path d="M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"/>
           </svg> Peugeot 3008
        </div>
      </div>

      <div className="options">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" > 
        <path d="M432 352h-384C21.5 352 0 373.5 0 400v64C0 490.5 21.5 512 48 512h384c8.75 0 16-7.25 16-16v-128C448 359.3 440.8 352 432 352zM400 464H224v-64h176V464zM536 352h-48C483.6 352 480 355.6 480 360v144c0 4.375 3.625 8 8 8h48c4.375 0 8-3.625 8-8v-144C544 355.6 540.4 352 536 352zM632 352h-48C579.6 352 576 355.6 576 360v144c0 4.375 3.625 8 8 8h48c4.375 0 8-3.625 8-8v-144C640 355.6 636.4 352 632 352zM553.3 87.13C547.6 83.25 544 77.12 544 70.25V8C544 3.625 540.4 0 536 0h-48C483.6 0 480 3.625 480 8v62.25c0 22 10.25 43.5 28.62 55.5C550.8 153 576 199.5 576 249.8V280C576 284.4 579.6 288 584 288h48C636.4 288 640 284.4 640 280V249.8C640 184.3 607.6 123.5 553.3 87.13zM487.8 141.6C463.8 125 448 99.25 448 70.25V8C448 3.625 444.4 0 440 0h-48C387.6 0 384 3.625 384 8v66.38C384 118.1 408.6 156 444.3 181.1C466.8 196.8 480 222.3 480 249.8V280C480 284.4 483.6 288 488 288h48C540.4 288 544 284.4 544 280V249.8C544 206.4 523 166.3 487.8 141.6z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
          <path d="M511.1 367.1c0 44.18-42.98 80-95.1 80s-95.1-35.82-95.1-79.1c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32.01 4.898V148.1L192 224l-.0023 208.1C191.1 476.2 149 512 95.1 512S0 476.2 0 432c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32 4.898V126.5c0-12.97 10.06-26.63 22.41-30.52l319.1-94.49C472.1 .6615 477.3 0 480 0c17.66 0 31.97 14.34 32 31.99L511.1 367.1z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M352.6 127.1c-28.12 0-54.13 4.5-77.13 12.88l12.38-123.1c1.125-10.5-8.125-18.88-18.5-17.63C189.6 10.12 127.1 77.62 127.1 159.4c0 28.12 4.5 54.13 12.88 77.13L17.75 224.1c-10.5-1.125-18.88 8.125-17.63 18.5c9.1 79.75 77.5 141.4 159.3 141.4c28.12 0 54.13-4.5 77.13-12.88l-12.38 123.1c-1.125 10.38 8.125 18.88 18.5 17.63c79.75-10 141.4-77.5 141.4-159.3c0-28.12-4.5-54.13-12.88-77.13l123.1 12.38c10.5 1.125 18.88-8.125 17.63-18.5C501.9 189.6 434.4 127.1 352.6 127.1zM255.1 287.1c-17.62 0-31.1-14.38-31.1-32s14.37-32 31.1-32s31.1 14.38 31.1 32S273.6 287.1 255.1 287.1z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M0 144v288C0 457.6 22.41 480 48 480H96V96H48C22.41 96 0 118.4 0 144zM336 0h-160C150.4 0 128 22.41 128 48V480h256V48C384 22.41 361.6 0 336 0zM336 96h-160V48h160V96zM464 96H416v384h48c25.59 0 48-22.41 48-48v-288C512 118.4 489.6 96 464 96z"/>
        </svg>
      </div>

      <div className="places">
      <span><img src={seat} /> 2 place(s) restante(s)</span>
      <button> Réserver </button>
      </div>
    </div>
  );
};

export default Post;
