import React, { useRef } from "react";
import s from "../EditBlock.module.css";
import { OpenEditors } from "../EditBlock.js";
import { SelectedElem } from "../EditBlock.js";

export default function EditColor() {
  function EditColorOpen() {
    if (OpenEditors.color === true) {
      document.getElementById("EditColorDetect").style.opacity = "0";
      document.getElementById("EditColorDetect").style.height = "0px";
      OpenEditors.color = false;
    } else {
      document.getElementById("EditColorDetect").style.opacity = "1";
      document.getElementById("EditColorDetect").style.height = "auto";
      OpenEditors.color = true;
    }
  }

  const exampleRef = React.createRef();
  const colorRef = useRef();
  const direction0Ref = useRef();
  const direction45Ref = useRef();
  const direction90Ref = useRef();
  const direction135Ref = useRef();
  const direction180Ref = useRef();
  const direction225Ref = useRef();
  const direction270Ref = useRef();
  const direction315Ref = useRef();
  const gradientCircleRef = useRef();
  const gradientColor1Ref = useRef();
  const gradientColor2Ref = useRef();
  
  const editShadowRangeOpacityRef = useRef();

  function ChangeColor() {
    if (gradientType === "ColorChange") {
      document.getElementById(SelectedElem).style.background = colorRef.current.value;
      exampleRef.current.style.background = colorRef.current.value;
    } else if (gradientType === "GradientCircle") {
      document.getElementById(SelectedElem).style.background =
        "radial-gradient(" +
        gradientColor1Ref.current.value +
        " 0%, " +
        gradientColor2Ref.current.value +
        " 100%)";
      exampleRef.current.style.background =
        "radial-gradient(" +
        gradientColor1Ref.current.value +
        " 0%, " +
        gradientColor2Ref.current.value +
        " 100%)";
    } else {
      document.getElementById(SelectedElem).style.background =
        "linear-gradient(" +
        gradientDirection +
        "deg, " +
        gradientColor1Ref.current.value +
        " 0%, " +
        gradientColor2Ref.current.value +
        " 100%)";
      exampleRef.current.style.background =
        "linear-gradient(" +
        gradientDirection +
        "deg, " +
        gradientColor1Ref.current.value +
        " 0%, " +
        gradientColor2Ref.current.value +
        " 100%)";
    }
  }
  
  function EditShadowOpacity() {
    document.getElementById(SelectedElem).style.opacity = editShadowRangeOpacityRef.current.value;
  }
  
  let gradientDirection = 0;
  let gradientType = "linear";
  function ChangeGradientDirection(event) {
    gradientDirection = event.target.id.slice(0, event.target.id.length - 3);
    gradientType = "Linear";
    ChangeColor();
  }
  function ChangeGradientType(event) {
    if (event.target.id === "" && gradientType === "ColorChange") {
      gradientType = "Linear";
    } else if (event.target.id !== "") {
      gradientType = event.target.id;
    } 
    ChangeColor();
  }

  return (
    <div id="EditColor" className={s.edit_prew}>
      <div className={s.edit_btn} onClick={EditColorOpen}>
        Цвет
      </div>
      <div id="EditColorDetect" className={s.detector}>
        <div className={s.container}>
          <div className={s.property_label}>Полная заливка</div>
          <input id="ColorChange" ref={colorRef} type="color" onChange={ChangeGradientType}></input>
        </div>
        <div className={s.title}>Прозрачность</div>
        <div className={s.container}>
          <input
            ref={editShadowRangeOpacityRef}
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            defaultValue="0.5"
            className={s.range}
            onChange={EditShadowOpacity}
          ></input>
        </div>
        <div>Направление градиента</div>
        <div className={s.table_container}>
          <div className={s.table_column}>
            <div
              id="315deg"
              className={s.edit_direction}
              onClick={ChangeGradientDirection}
              ref={direction315Ref}
            >
              <div className={s.arrow_background}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
            <div
              id="270deg"
              className={s.edit_direction}
              onClick={ChangeGradientDirection}
              ref={direction270Ref}
            >
              <div className={s.arrow_background315}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
            <div
              id="225deg"
              className={s.edit_direction}
              onClick={ChangeGradientDirection}
              ref={direction225Ref}
            >
              <div className={s.arrow_background270}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
          </div>
          <div className={s.table_column}>
            <div
              id="0deg"
              className={s.edit_direction}
              onClick={ChangeGradientDirection}
              ref={direction0Ref}
            >
              <div className={s.arrow_background45}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
            <div
              id="GradientCircle"
              className={s.edit_direction}
              onClick={ChangeGradientType}
              ref={gradientCircleRef}
            >
              <div className={s.circle_background}></div>
            </div>
            <div
              id="180deg"
              className={s.edit_direction}
              onClick={ChangeGradientDirection}
              ref={direction180Ref}
            >
              <div className={s.arrow_background225}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
          </div>
          <div className={s.table_column}>
            <div
              id="45deg"
              className={s.edit_direction}
              onClick={ChangeGradientDirection}
              ref={direction45Ref}
            >
              <div className={s.arrow_background90}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
            <div
              id="90deg"
              className={s.edit_direction}
              onClick={ChangeGradientDirection}
              ref={direction90Ref}
            >
              <div className={s.arrow_background135}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
            <div
              id="135deg"
              className={s.edit_direction}
              onClick={ChangeGradientDirection}
              ref={direction135Ref}
            >
              <div className={s.arrow_background180}>
                <div className={s.arrow_part1}></div>
                <div className={s.arrow_part2}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.container_gradient}>
          <div id="EditColorExample" ref={exampleRef} className={s.gradient_example}></div>
          <div className={s.edit_gradient}>
            <input
              type="color"
              defaultValue="#ffffff"
              ref={gradientColor1Ref}
              className={s.gradient_input}
              onChange={ChangeGradientType}
            ></input>
            <input
              type="color"
              defaultValue="#000000"
              ref={gradientColor2Ref}
              className={s.gradient_input}
              onChange={ChangeGradientType}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
