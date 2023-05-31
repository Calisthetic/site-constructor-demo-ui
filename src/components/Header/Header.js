import s from "./Header.module.css";
import React from "react";

let IsAddBlockActive = false;
let IsCopyButtonActive = false;
//let IsDownloadButtonActive = false;

export function AddBlockClick() {
  if (IsAddBlockActive) {
    // off
    document.getElementById("AddBlockButton").style.transform = "rotate(0deg)";
    document.getElementById("AddBlock").style.left = "-264px";
    IsAddBlockActive = false;
  } else {
    // on
    document.getElementById("AddBlock").style.left = "0px";
    document.getElementById("AddBlockButton").style.transform = "rotate(135deg)";
    IsAddBlockActive = true;
  }
}

const Header = () => {
  const Developers = {
    Vladimir: "Калашников Владимир"
  };
  const DevLinks = {
    Dasha: "https://github.com/mysorniypaket",
    Yan: "https://github.com/PiF-0-PaF",
    Vladimir: "https://github.com/Calisthetic",
    Ivan: "https://github.com/SlTRiX",
    Kristina: "https://github.com/Klpsnex",
  };

  const CopyCSS = async () => {
    let text = "CopyCSS"
    
    await navigator.clipboard.writeText(text);
    if (IsCopyButtonActive === true) {
      document.getElementById("CopyCSSButton").style.backgroundPosition = "0%";
      IsCopyButtonActive = false;
    } else {
      document.getElementById("CopyCSSButton").style.backgroundPosition = "150%";
      IsCopyButtonActive = true;
    }
  };

  const CopyAllCSS = async () => {
    let text = "CopyAllCSS";
    
    await navigator.clipboard.writeText(text);
    if (IsCopyButtonActive === true) {
      document.getElementById("CopyAllCSSButton").style.backgroundPosition = "0%";
      IsCopyButtonActive = false;
    } else {
      document.getElementById("CopyAllCSSButton").style.backgroundPosition = "150%";
      IsCopyButtonActive = true;
    }
  };

  const CopyHTML = async () => {
    let text = "CopyHTML"
    
    await navigator.clipboard.writeText(text);
    if (IsCopyButtonActive === true) {
      document.getElementById("CopyHTMLButton").style.backgroundPosition = "0%";
      IsCopyButtonActive = false;
    } else {
      document.getElementById("CopyHTMLButton").style.backgroundPosition = "150%";
      IsCopyButtonActive = true;
    }
  };

  const CopyAllHTML = async () => {
    let text = "CopyAllHTML"
    
    await navigator.clipboard.writeText(text);
    if (IsCopyButtonActive === true) {
      document.getElementById("CopyAllHTMLButton").style.backgroundPosition = "0%";
      IsCopyButtonActive = false;
    } else {
      document.getElementById("CopyAllHTMLButton").style.backgroundPosition = "150%";
      IsCopyButtonActive = true;
    }
  };

  return (
    <div className={s.background}>
      <div
        title="Добавить элемент"
        id="AddBlockButton"
        className={s.add_block}
        onClick={AddBlockClick}
      >
        <div id="p1" className={s.p1}></div>
        <div id="p2" className={s.p2}></div>
      </div>
      <div className={s.container}>
        <div className={s.dropdown}>
          <div className={s.btn }>Разработчики</div>
          <div className={s.dropdowncontent}>
            <a href={DevLinks.Vladimir}>{Developers.Vladimir}</a>
            {/* <a href={DevLinks.Dasha}>{Developers.Dasha}</a>
            <a href={DevLinks.Yan}>{Developers.Yan}</a>
            <a href={DevLinks.Ivan}>{Developers.Ivan}</a>
            <a href={DevLinks.Kristina}>{Developers.Kristina}</a> */}
          </div>
        </div>
        <div className={s.btn}>Инструкция</div>
        <div className={s.dropdown}>
          <div className={s.btn}>Код</div>
          <div className={s.dropdowncontent}>
            <div id="CopyCSSButton" className={s.code_button} onClick={CopyCSS}>
              Скопировать блок в css
            </div>
            <div id="CopyAllCSSButton" className={s.code_button} onClick={CopyAllCSS} >
              Скопировать всё в css
            </div>
            <div id="CopyHTMLButton" className={s.code_button} onClick={CopyHTML} >
              Скопировать блок в html
            </div>
            <div id="CopyAllHTMLButton" className={s.code_button} onClick={CopyAllHTML} >
              Скопировать всё в html
            </div>
          </div>
        </div>
        <div className={s.btn}>Связаться с нами</div>
      </div>
    </div>
  );
};

export default Header;
