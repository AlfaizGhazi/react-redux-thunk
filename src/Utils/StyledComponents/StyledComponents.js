import styled from "styled-components";

export const StyledDiv = styled.div`
  &.card__wrapper {
    display: flex;
    width: 100%;
    flex-flow: wrap;
  }

  &.card {
    border: 1px solid black;
    padding: 10px;
    margin: 10px 5px;
    width: 200px;
    height: 300px;
  }

  &.card__header {
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 20px;
  }

  &.card__content {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 230px;
  }

  &.card__title {
    border: 1px solid black;
    margin: 5px;
    padding: 3px;
  }

  &.card__body {
    overflow: scroll;
    border: 1px solid black;
    margin: 5px;
    padding: 3px;
  }

  &.home__buttonbar {
    display: flex;
    justify-content: center;
    margin: 10px 0px;
  }
`;

export const StyledSpan = styled.span``;

export const StyledB = styled.b``;

export const StyledButton = styled.button``;
