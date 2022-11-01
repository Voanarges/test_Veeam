import React from "react"
import { cancelReload } from "src/services/helpful"
import { StoreContext } from "src/store" 
import { createHTML } from "src/services/content"

type Click = {
  setClick: (clickBtn: boolean) => void;
};

const ResultForm = ({ setClick }: Click) => {
  const store = React.useContext(StoreContext);
  const inputBlocks = store?.inputData;

  return (
    <>
      <form action="" className="settings__resultForm" onSubmit={cancelReload}>
        {!inputBlocks ? (
          <h1>Please, input correct json data in "Config" tab</h1>
        ) : (
          inputBlocks.map((item, count) => {
            return (
              <React.Fragment key={`${count}block`}>
                {createHTML(item)}
              </React.Fragment>
            );
          })
        )}
        <div className="apply">
          <button
            className="apply__btn"
            onClick={() => [
              store?.sendData([{ label: "", type: "" }]),
              setClick(false),
            ]}
          >
            <p>Cancel</p>
          </button>
          <button className="apply__btn">
            <p>Save</p>
          </button>
        </div>
      </form>
    </>
  );
};
export default ResultForm