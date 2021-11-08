import styled from "styled-components";

export const modalConfigs = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "590px",
    height: "362px",
    border: 0,
    borderRadius: "8px"
  },
}

export const ModalWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;


  .close-text {
    text-align: center;

    h1 {
      margin-bottom: 14px;
      color: #29292E;
      font-weight: 700;
    }

    span {
      color: #737380;
    }
  }

  .buttons {
    display: flex;
    gap: 16px;
  }
`
