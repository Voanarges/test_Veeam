
import React, { useState } from "react"
import ResultForm from "./ResultFrom"
import { cancelReload } from "src/services/helpful"
import { Params } from "src/types/Alltypes"
import { StoreContext } from "src/store"

const ConfigForm = () => {
    const [clickBtn, setClick] = useState<boolean>(false)
    const [inputText, setInput] = useState<Params>()
    const store = React.useContext(StoreContext)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(JSON.parse(e.currentTarget.value));
    };

    return (
      <>
        <section className="settings">
          <div className="settings__btns">
            <button
              className={`btn ${!clickBtn ? "click" : "standart"}`}
              onClick={() => setClick(!clickBtn)}
            >
              <p>Configs</p>
            </button>
            <button
              className={`btn ${clickBtn ? "click" : "standart"}`}
              onClick={() => setClick(!clickBtn)}
            >
              <p>Result</p>
            </button>
          </div>
          {!clickBtn ? (
            <form action="" onSubmit={cancelReload} className="settings__form">
              <textarea onChange={handleChange}></textarea>

              <div className="apply">
                <button
                  className="apply__btn"
                  onClick={() => [
                    inputText && store?.sendData(inputText.items),
                    setClick(true),
                  ]}
                >
                  <p>Apply</p>
                </button>
              </div>
            </form>
          ) : (
            <ResultForm setClick={setClick} />
          )}
        </section>
      </>
    );
}
export default ConfigForm
