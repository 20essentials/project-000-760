import { useEffect } from "react"
import { createRoot } from "react-dom/client"
import "materialize-css/dist/css/materialize.min.css"

const App = () => {
  useEffect(() => {
    const d = document
    let amount = 300
    let i = 0
    const llover = () => {
      while (i < amount) {
        let container = d.createElement("article")
        let gota = d.createElement("div")
        container.appendChild(gota)
        container.style.setProperty("--s", `${Math.random() * 0.2 + 0.8}`)
        container.style.setProperty("--x", `${Math.random() * window.innerWidth}px`)
        container.style.animationDuration = `${Math.random() * 2 + 2}s`
        container.style.animationDelay = `-${Math.random() * 8 + 4}s`
        d.body.appendChild(container)
        i++
      }
    }
    llover()
  }, [])

  const bodyStyle = {
    height: "100vh",
    width: "100%",
    background: `linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%),
                 radial-gradient(at top center, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.4) 120%) #989898`,
    backgroundBlendMode: "multiply, multiply",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  const style = `
    article {
      width: 40px;
      height: 40px;
      background-color: transparent;
      animation: caer 7s linear infinite;
      position: absolute;
    }
    article div {
      position: absolute;
      width: 30px;
      height: 30px;
      box-shadow: inset 0 0 13px mediumturquoise;
      border-radius: 50%;
      border-bottom-right-radius: 2px;
      transform: rotate(-135deg) scale(var(--s));
      margin: 2rem;
    }
    article div::before {
      width: 55%;
      height: 40%;
      position: absolute;
      background-color: transparent;
      border-radius: 50%;
      border: 2px solid #fff4;
      border-color: transparent transparent transparent #fff4;
      content: '';
      transform: rotate(81deg);
      left: 20%;
      top: 19%;
    }
    @keyframes caer {
      0% { transform: scale(var(--s)) translate(var(--x), -300px); }
      100% { transform: scale(var(--s)) translate(var(--x), calc(100vh + 100px)); }
    }
  `

  return (
    <div style={bodyStyle} className="valign-wrapper">
      <style>{style}</style>
      <h4 className="white-text center-align">🌧️ Lluvia Animada</h4>
    </div>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
createRoot(root).render(<App />)
