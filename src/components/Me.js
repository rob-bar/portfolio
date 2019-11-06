import styled from "styled-components"
import React from "react"

const MeStyled = styled.div`
  .inback {
    opacity: 0.5;
    transform: translate3d(0, 0, -150px);
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    grid-gap: 0.625rem;
    margin-bottom: 1rem;
  }

  .hide {
    opacity: 0;
    transform: translate3d(0, -300px, -150px);
  }

  .pic {
    transform: translate3d(0, 0, 0);
    z-index: 1;
    background-color: white;
    width: 150px;
    height: 150px;
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
      background-color: #3d3d3d;

      .linkicon {
        color: #141414;
        font-size: 4rem;
        padding: 2.5rem;
        transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000) 0ms;
      }

      .text {
        font-family: "fut";
        font-size: 18px;
        color: #141414;
        font-weight: normal;
        font-style: normal;
        text-align: center;
        display: block;
        opacity: 0;
        transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000) 0ms;
      }

      &:hover .linkicon {
        transform: scale(0.9, 0.9);
        padding: 1.5rem 2.5rem;
      }

      &:hover .text {
        opacity: 1;
      }
    }
  }

.baloon {
  grid-column: 1 / 3;
  transform: translate3d(0, 0, 0);
  z-index: 2;

  .norm {
    width: 100%;
    height: 100%;
    padding: 1.3rem;
    border-radius: 5px;
    background: url('/images/layout/pat.png?1390329945'), linear-gradient(rgba(255, 255, 255, 0), #dfdfdf);
    background-color: white;

    .arrow {
      position: absolute;
      right: 165px;
      bottom: -30px;
      width: 30px;
      height: 30px;
      overflow: hidden;
      transform: scale(1, 1);
      transition: transform 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000) 0ms;

      .angle {
        position: absolute;
        left: 5px;
        top: -10px;
        width: 16px;
        height: 16px;
        transform: rotate(45deg);
        background: url('/images/layout/pat.png?1390329945'), linear-gradient(to left, #DFDFDF, #DEDEDE);
        background-color: #DFDFDF;
        box-shadow: rgba(0, 0, 0, 0.5) 0 0 4px 0;
      }

      @media screen and (min-width: 640px) {
        position: absolute;
        right: -20px;
        top: 20px;
        width: 20px;
        height: 30px;
        overflow: hidden;
        transform: scale(1, 1);
        transition: transform 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000) 0ms;

        .angle {
          position: absolute;
          left: -10px;
          top: 5px;
          width: 16px;
          height: 16px;
          transform: rotate(45deg);
          background: url('/images/layout/pat.png?1390329945'), linear-gradient(to left, #F7F7F7, #F4F4F4);
          background-color: white;
          box-shadow: rgba(0, 0, 0, 0.5) 0 0 4px 0;
        }
      }
    }
  }

  .hov {
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    background: url('/images/layout/pat.png?1390329945'), linear-gradient(rgba(62, 171, 233, 0), #0077bb);
    background-color: #3eabe9;

    .arrow {
      position: absolute;
      right: -16px;
      top: 100px;
      transform: scale(1, 1);
      transition: transform 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000) 0ms;
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

    p {
      margin: 0.3rem 0;
      font-family: "osl";
      font-size: 20px;
      color: black;
      font-weight: normal;
      font-style: normal;

      a {
        font-family: "futl";
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
const Me = () => (
  <MeStyled>
    <div id="me" className="intro perspective">
      <div className="wrapper">
        <div className="baloon">
          <div className="norm shade">
            <div className="arrow">
              <div className="angle"></div>
            </div>
            <h1>Robbie Bardijn</h1>
            <p>
              <a href="mailto:robbie.bardijn.works@gmail.com" className="mail">
                robbie.bardijn.works<span>@</span>gmail.com
              </a>
            </p>
            <p>
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

        <div className="pic shade">
          <img src="//www.gravatar.com/avatar/1a8ef93be6fa5e0c482ad44281f75770.jpg?s=150" alt="Robbie Bardijn" />
        </div>

        <div className="cv shade">
          <a href="/downloads/cv-robbie-bardijn.pdf" target="_blank">
            <span className="linkicon fal fa-link"></span>
            <span className="text">Curriculum Vitae</span>
          </a>
        </div>
      </div>
    </div>
  </MeStyled>
)

export default Me
