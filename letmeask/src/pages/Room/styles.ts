import styled from "styled-components";

type UserInfoProps = {
  color: string,
  weigth?: number;
}

export const PageRoom = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
  }

  .content {
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-height: 45px;
    }

    > div {
      display: flex;
      gap: 16px;

      button {
        height: 40px;
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 72px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poopins', sans-serif;
        font-size: 24px;
        color: #29292e;
      }

      span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 9999px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        min-height: 130px;
        resize: vertical;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        span {
          font-size: 14px;
          color: #737388;
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            text-decoration: underline;
            color: #835AFD;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 32px;

      :last-child {
        margin-bottom: 60px;
      }
    }
  }
`

export const UserInfo = styled.div<UserInfoProps>`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: ${props => props.color};
    font-weight: ${props => props.weigth || 0};
    font-size: 14px;
  }
` ;