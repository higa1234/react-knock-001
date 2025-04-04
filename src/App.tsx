/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Wrapper = css `
          width: 100%;
          height: 100vh;
          /* 水平・垂直方向の中央揃え */
          display: flex;
          justify-content: center;
          align-items: center;
        `;

const pWrapper = css `
          font-family: arial;
          font-size: 24px;
        `

function App() {

  return (
      <div css={Wrapper}>
        <p css={pWrapper}>Hello World</p>
      </div>
  )
}

export default App
