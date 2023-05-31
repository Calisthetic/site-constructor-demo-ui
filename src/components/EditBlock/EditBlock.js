import s from "./EditBlock.module.css";
import React, { useRef } from "react";
import EditShasows from "./EditPanels/EditShasows";
import EditSize from "./EditPanels/EditSize";
import EditColor from "./EditPanels/EditColor";
import EditPosition from "./EditPanels/EditPosition";
import EditBorder from "./EditPanels/EditBorder";
import EditRadius from "./EditPanels/EditRadius";
import EditText from "./EditPanels/EditText";
//import EditImage from "./EditPanels/EditImage";
import Barrier from "./Barrier.js"; 
import delete_logo from "./../../icons/delete_481.png"

// ! CSS: appearance

export let SelectedElem = 0;
export let OpenEditors = {
  shadow: false,
  size: false,
  color: false,
  position: false,
  border: false,
  radius: false,
  text: false,
  image: false,
  effects: false,
  textShadow: false,
};

const EditBlock = () => {
  const editBlockList = useRef();

  function OnSelectionChange() {
    SelectedElem = editBlockList.current.value;
    console.log(editBlockList.current.value);
  }
  !!document.getElementById("SaveButton") && (document.getElementById("SaveButton").onmouseover = () => {document.getElementById("SaveButton").style.border = "2px solid white";})
  !!document.getElementById("SaveButton") && (document.getElementById("SaveButton").onmouseleave = () => {document.getElementById("SaveButton").style.border = "2px solid red";})
  
  async function DeleteBlock() {}

  function SaveClick() {
    document.getElementById("SaveButton").style.border = "2px solid lime";
    setTimeout(() => {
      document.getElementById("SaveButton").style.border = "2px solid red";
    }, 600);
  }

  return (
    <div className={s.background}>
      <div className={s.editors}>
        <div className={s.blocks_list}>
          <div className={s.edit_btn}>Список</div>
          <div className={s.list}>
            <select className={s.select_list} ref={editBlockList} onChange={OnSelectionChange}>
              <option>Font1</option>
              <option>Font2</option>
              <option>Font3</option>
              <option>Font4</option>
              <option>Font5</option>
            </select>
            <img id="DeleteBlockButton" src={delete_logo} alt="Удалить" onClick={DeleteBlock} className={s.delete_button}></img>
          </div>
        </div>
        <Barrier />
        <EditShasows />
        <Barrier />
        <EditSize />
        <Barrier />
        <EditColor />
        <Barrier />
        <EditPosition />
        <Barrier />
        <EditBorder />
        <Barrier />
        <EditRadius />
        <Barrier />
        <EditText />
        {/* <Barrier />
        <EditImage />
        <Barrier />
        <EditEffects /> */}
        <div id="SaveButton" className={s.save_button} onClick={SaveClick}>Сохранить</div>
      </div>
      <div className={s.style_list}> </div>
    </div>
  );
};

export default EditBlock;
