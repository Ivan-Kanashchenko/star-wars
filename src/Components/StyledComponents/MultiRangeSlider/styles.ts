import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

const Slider = styled.div`
  position: relative;
  width: 200px;
`;

const SliderTrack = styled.div`
  border-radius: 3px;
  height: 3px;
  background-color: #ced4da;
  width: 100%;
  position: absolute;
`;

const SliderRange = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 3px;
  background-color: var(--primary3);
`;

const SliderLeftValue = styled.div`
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
  left: 6px;
  position: absolute;
`;

const SliderRightValue = styled.div`
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
  right: -4px;
  position: absolute;
`;

const Input = styled.input`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
  &::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;

export const Styled = {
  Container,
  Slider,
  SliderTrack,
  SliderRange,
  SliderLeftValue,
  SliderRightValue,
  Input,
};
