import styled from "styled-components";

export const DirectoryBodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  border-radius: 0.55rem;

  h2 {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 6px 0;
    font-size: 22px;
    color: #212;
  }

  p {
    font-weight: 250;
    font-size: 14px;
    color: #fdc400;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 35vh;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  border-radius: 0.35rem;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${DirectoryBodyContainer} {
      opacity: 0.85;
    }
  }

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
`;
