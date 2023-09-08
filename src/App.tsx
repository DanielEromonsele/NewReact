import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import  pix  from "./assets/Vector-removebg-preview.png";
import  pix2  from "./assets/vv-removebg-preview.png";
import  pix3  from "./assets/v-removebg-preview.png";
import  pix4  from "./assets/v4-removebg-preview.png";

const App = () => {
  const [state, setState] = useState<string>("");

  const getRandomSpeed = (max: number, min: number) => {
    return Math.floor(Math.random() * (6 - 1 )+1) + 1;
  };

  useEffect(() => {
    if (state) {
      window.location.reload();
    }
  }, [state]);
  const [car, setCar] = useState<string>("");

  const getRandSpeed = (max: number, min: number) => {
    return Math.floor(Math.random() * (6 - 1 )+1) + 1;
  };

  useEffect(() => {
    if (car) {
      window.location.reload();
    }
  }, [car]);

  return (
    <div>
      <Container>
        <Choice>
          <Hold>
            <label>Red</label>
            <input
              type="radio"
              value={"Red"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);
              }}
            />
          </Hold>
          <Hold>
            <label>Blue</label>
            <input
              type="radio"
              value={"Blue"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);
              }}
            />
          </Hold>
          <Hold>
            <label>White</label>
            <input
              type="radio"
              value={"White"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);
              }}
            />
          </Hold>
        </Choice>
        <TrackField>
          <BallHolder>
            <Ball bg="red" sp={`${getRandomSpeed(6, 1)}s`} />
            <Ball bg="blue" sp={`${getRandomSpeed(6, 1)}s`} />
            <Ball bg="white" sp={`${getRandomSpeed(6, 1)}s`} />
            <Ball bg="green" sp={`${getRandomSpeed(6, 1)}s`} />
          </BallHolder>
          <Line />
        </TrackField>

        <Choice1>
          <Hold>
            <label>Car1</label>
            <input
              type="checkbox"
              value={"Red1"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // setCar(e.target.value);
              }}
            />
          </Hold>
          <Hold1>
            <label>Car2</label>
            <input
              type="checkbox"
              value={"Blue1"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // setState(e.target.value);
              }}
            />
          </Hold1>
          <Hold>
            <label>Car3</label>
            <input
              type="checkbox"
              value={"White1"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // setCar(e.target.value);
              }}
            />
          </Hold>
          <Hold>
            <label>Car4</label>
            <input
              type="checkbox"
              value={"White1"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // setCar(e.target.value);
              }}
            />
          </Hold>
        </Choice1>
        <TrackField1>
          <BallHolder1>
            <Image1 src= {pix} sp={`${getRandSpeed(6, 1)}s`} />
            <Image1 src= {pix2} sp={`${getRandSpeed(6, 1)}s`} />
            <Image1  src= {pix3} sp={`${getRandSpeed(6, 1)}s`} />
            < Image1 src= {pix4}sp={`${getRandSpeed(6, 1)}s`} />
          </BallHolder1>
          <Line1 />
        </TrackField1>
      </Container>
    </div>
  );
};

export default App;

const Choice = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0;
  display: flex;
`;

const Hold = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0 20px;
`;

const BallHolder = styled.div`
  position: absolute;
`;



const Ball = styled.div<{ bg?: string; sp?: string }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  margin: 8px;

  animation-name: ball;
  animation-duration: ${({ sp }) => sp};
  /* animation-iteration-count: infinite; */

  @keyframes ball {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(1170px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

const Line = styled.div`
  border-bottom: 1px solid white;
  width: 100%;
  height: 2px;
`;

const TrackField = styled.div`
  width: 1200px;
  height: 250px;
  background-color: #545454;
  border: 2px solid silver;
  display: flex;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: green;
  margin: 0;
`;


const Choice1 = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0;
  display: flex;
`;

const Hold1 = styled.div`
  flex-direction: column;
  display: flex;
  margin: 0 20px;
`;

const BallHolder1 = styled.div`
  display: flex;
  position: absolute;
    flex-direction: column;
`;

const Image1 = styled.img<{sp?: string }>`
  width: 70px;
  height: 60px;
  border-radius: 50%;
  
  margin: 5px;

  animation-name: car;
  animation-duration: ${({ sp }) => sp};
  /* animation-iteration-count: infinite; */
  @keyframes car {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    25% {
      transform: translateX(1120px) rotate(0deg);
    }
    50% {
      transform: translateX(1120px) rotateY(180deg);
    }
    75% {
      transform: translateX(0) rotateY(180deg);
    }
    95% {
      transform: translateX(0) rotateY(180deg);
    }
    100% {
      transform: translateX(0) rotate(0);
    }
  }
`;


const Line1 = styled.div`
  border-bottom: 1px solid white;
  width: 100%;
  height: 2px;
`;

const TrackField1 = styled.div`
  width: 1200px;
  height: 250px;
  background-color: blue;
  border: 2px solid silver;
  display: flex;
  align-items: center;
  position: relative;
`;

