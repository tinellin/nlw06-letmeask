import styled from "styled-components";

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  background: #fefefe;
  border-radius: 8px;
  border: 1px solid #835afd;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  padding: 15px;

  &.answered {
    background: #dbdcdd;
    border: 0;
  }
  
  h4 {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #835afd;
  }

  p {
    color: 29292e;
    word-break: break-all;
    
    margin-bottom: 12px;
    margin-top: 12px;
  }

  form {
    display: flex;
    flex-direction: column;

    .answer-box {
      resize: none;
      outline: none;
      
      &::-webkit-scrollbar {
        background: #f0f1f4;
        width: 13px;
        border-radius: 2px;
      }
  
      &::-webkit-scrollbar-thumb {
        background: #835afd;
        border-radius: 2px;
      }
    }

    > div {
      align-self: flex-end;
      margin-top: 18px;
    }
  }

`;
