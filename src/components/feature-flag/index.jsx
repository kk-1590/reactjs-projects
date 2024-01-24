import Accordion from "../accordion";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";

const FeatureFlag = () => {

    const componentsToRender = [
      {
        key: "showAccordion",
        component: <Accordion />,
      },
      {
        key: "showLightAndDarkMode",
        component: <LightDarkMode />,
      },
      {
        key: "showRandomColorGenrator",
        component: <RandomColor />,
      },
      {
        key: "showTicTacToeBoard",
        component: <TicTacToe />,
      },
      {
        key: "showTreeView",
        component: <TreeView />,
      },
      //         showAccordion
      // :
      // false
      // showLightAndDarkMode
      // :
      // true
      // showRandomColorGenrator
      // :
      // true
      // showTicTacToeBoard
      // :
      // true
      // showTreeView
      // :
      // false
    ];

  return (
    <div>
      <h1>FeatureFlag</h1>
    </div>
  );
};

export default FeatureFlag;
