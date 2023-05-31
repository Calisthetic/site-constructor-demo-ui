import s from "./AddBlock.module.css";
import { AddBlockClick } from "../Header/Header.js";
import { useRef } from "react";


const AddBlock = () => {
  let blockNameRef = useRef()

  async function AddElemClick() {
    AddBlockClick();
  }

  return (
    <div id="AddBlock" className={s.background}>
      <input type="text" placeholder="Название элемента" ref={blockNameRef} className={s.name_input}></input>
      <div id="AddSquare" className={s.add_element} onClick={AddElemClick}> Квадрат </div>
      <div id="AddCircle" className={s.add_element} onClick={AddElemClick}>Круг</div>
      <div id="AddLight" className={s.add_element} onClick={AddElemClick}>Свечение</div>
      <div id="AddButton" className={s.add_element} onClick={AddElemClick}>Кнопка</div>
      <div id="AddHeader" className={s.add_element} onClick={AddElemClick}>Шапка</div>
    </div>
  );
};

export default AddBlock;
