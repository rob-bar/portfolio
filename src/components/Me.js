import styled from "styled-components"
import React, { useRef } from "react"

export const Me = () => {
  const baloon = useRef(null)

  const turnBalloon = () => {
    baloon.current.classList.toggle("--back-shown")
  }

  return (
    <>
      <div id="me"></div>
      <MeStyled>
        <div className="intro perspective">
          <div className="wrapper">
            <div className="baloon" ref={baloon}>
              <div className="norm shade">
                <div className="arrow">
                  <div className="angle"></div>
                </div>
                <h2>Hi, need a new website?</h2>
                <p>
                  <a
                    href="mailto:robbie.bardijn.works@gmail.com"
                    className="mail"
                  >
                    robbie.bardijn.works<span>@</span>gmail.com
                  </a>
                </p>
                <p>
                  or...{" "}
                  <a href="tel: 0032472798863" className="tel">
                    0472 / 79.88.63
                  </a>
                </p>
              </div>
              <div className="hov shade">
                <div className="arrow">
                  <div className="angle"></div>
                </div>
                <h1>Hire me...</h1>
                <p>I’m glad to help</p>
              </div>
            </div>

            <div className="pic shade" onMouseEnter={turnBalloon} onMouseLeave={turnBalloon}>
              <img src={`/images/me.jpg`} alt="Robbie Bardijn" />
            </div>
          </div>
        </div>
      </MeStyled>
    </>
  )
}

export const MeNotFound = () => {
  return (
    <>
      <div id="me"></div>
      <MeStyled>
        <div className="intro perspective">
          <div className="wrapper">
            <div className="baloon --back-shown">
              <div className="hov shade">
                <div className="arrow">
                  <div className="angle"></div>
                </div>
                <h1>Sorry...</h1>
                <p>I can't find this page</p>
              </div>
              <div className="norm shade">
                <div className="arrow">
                  <div className="angle"></div>
                </div>
                <h1>Robbie Bardijn</h1>
                <p>
                  <a
                    href="mailto:robbie.bardijn.works@gmail.com"
                    className="mail"
                  >
                    robbie.bardijn.works<span>@</span>gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel: 0032472798863" className="tel">
                    0472 / 79.88.63
                  </a>
                </p>
              </div>
            </div>

            <div className="pic shade">
              <img src={`/images/me.jpg`} alt="Robbie Bardijn" />
            </div>

            <div className="cv shade">
              <a href="/downloads/cv-robbie-bardijn.pdf" target="_blank">
                <span className="linkicon fal fa-link"></span>
              </a>
            </div>
          </div>
        </div>
      </MeStyled>
    </>
  )
}

const MeStyled = styled.div`
  outline: none;
  margin-bottom: 4.0625rem;

  .inback {
    opacity: 0.5;
    transform: translate3d(0, 0, -150px);
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    grid-gap: 0.625rem;
    margin-bottom: 1rem;
    transform-style: preserve-3d;
    perspective: 1000px;
    perspective-origin: 150px 50%;
  }

  .hide {
    opacity: 0;
    transform: translate3d(0, -300px, -150px);
  }

  .pic {
    transform: translate3d(0, 0, 0);
    z-index: 1;
    outline: none;
    background-color: white;
    width: 150px;
    height: 150px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .pic .shade {
    bottom: -14px !important;
  }

  .cv {
    transform: translate3d(0, 0, 0);
    width: 150px;
    height: 150px;
    z-index: 3;

    .shade {
      bottom: -14px;
    }

    a {
      width: 150px;
      height: 150px;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      text-decoration: none;
      background-color: #166362;

      .linkicon {
        color: #141414;
        font-size: 4rem;
        padding: 2.5rem;
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
      }

      &:hover .linkicon {
        transform: scale(0.9, 0.9) rotate(0.25turn);
      }
    }
  }

  .baloon {
    grid-column: 1 / 3;
    z-index: 2;
    transition: transform 0.7s cubic-bezier(0.25, 0.64, 0.46, 1.16);
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(0);

    @media screen and (min-width: 640px) {
      transition: transform 1s cubic-bezier(0.25, 0.64, 0.46, 1.16);
    }

    &.--back-shown {
      transform: rotateY(-180deg);

      @media screen and (min-width: 640px) {
        transform: rotateX(-180deg);
      }
    }

    .norm {
      width: 100%;
      height: 100%;
      padding: 1.3rem;
      border-radius: 5px;
      background: url("/images/layout/pat.png?1390329945"),
        linear-gradient(rgba(255, 255, 255, 0), #dfdfdf);
      background-color: white;
      transform-style: preserve-3d;
      backface-visibility: hidden;

      .arrow {
        position: absolute;
        right: 180px;
        bottom: -28px;
        width: 30px;
        height: 30px;
        overflow: hidden;
        transform-style: preserve-3d;
        backface-visibility: hidden;

        .angle {
          position: absolute;
          left: 5px;
          top: -8px;
          width: 16px;
          height: 16px;
          transform: rotate(45deg);
          backface-visibility: hidden;
          background: url("/images/layout/pat.png?1390329945"),
            linear-gradient(to left, #dfdfdf, #dedede);
          background-color: #dfdfdf;
          box-shadow: rgba(0, 0, 0, 0.5) 0 0 4px 0;
        }

        @media screen and (min-width: 640px) {
          position: absolute;
          right: -18px;
          top: 20px;
          width: 20px;
          height: 30px;
          overflow: hidden;

          .angle {
            position: absolute;
            left: -8px;
            top: 5px;
            width: 16px;
            height: 16px;
            transform: rotate(45deg);
            background: url("/images/layout/pat.png?1390329945"),
              linear-gradient(to left, #f7f7f7, #f4f4f4);
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.5) 0 0 4px 0;
          }
        }
      }
    }

    .hov {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      padding: 2.5rem;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border-radius: 5px;
      background: url("/images/layout/pat.png?1390329945"),
        linear-gradient(rgba(62, 171, 233, 0), #0077bb);
      background-color: #3eabe9;
      transform-style: preserve-3d;
      backface-visibility: hidden;
      transform: rotateY(180deg);

      @media screen and (min-width: 640px) {
        transform: rotateX(180deg);
      }

      .arrow {
        position: absolute;
        right: 180px;
        bottom: -28px;
        width: 30px;
        height: 30px;
        overflow: hidden;
        // backface-visibility: hidden;
        // transform-style: preserve-3d;

        .angle {
          position: absolute;
          left: 5px;
          top: -8px;
          width: 16px;
          height: 16px;
          transform: rotateZ(45deg);
          background: url("/images/layout/pat.png?1390329945");
          background-color: #0077bb;
          box-shadow: rgba(0, 0, 0, 0.5) 0 0 4px 0;
        }

        @media screen and (min-width: 640px) {
          position: absolute;
          right: -18px;
          top: 105px;
          width: 20px;
          height: 30px;

          .angle {
            position: absolute;
            left: -8px;
            top: 5px;
            width: 16px;
            height: 16px;
            transform: rotateZ(45deg);
            background: url("/images/layout/pat.png?1390329945"),
              linear-gradient(to top, #367ebd, #287dc7);
            background-color: #3c85c3;
            box-shadow: rgba(0, 0, 0, 0.5) 0 0 4px 0;
          }
        }
      }
    }

    > div {
      h1 {
        margin: 0;
        font-family: "chunk5";
        font-size: 30px;
        color: black;
        font-weight: normal;
        font-style: normal;
        line-height: 1em;
      }

      h2 {
        margin: 0;
        margin-bottom: 1rem;
        font-family: "chunk5";
        font-size: 1.4rem;
        color: black;
        font-weight: normal;
        font-style: normal;
        line-height: 1em;
      }

      p {
        margin: 0;
        margin-bottom: 0.125rem;
        font-family: "osl";
        font-size: 20px;
        color: black;
        font-weight: normal;
        font-style: normal;

        a {
          font-size: 21px;
          color: black;
          font-weight: normal;
          font-style: normal;
          color: black;
          text-decoration: none;

          &.mail {
            font-size: 18px;
            span {
              font-size: 16px;
            }
          }

          &.tel {
            font-size: 18px;
          }
        }
      }
    }
  }
`
