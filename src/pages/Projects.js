import { useRef, useState } from "react";
import s from "./Projects.module.css";

const Projects = () => {
  const [addOpen, setAddOpen] = useState(false);

  const addProjectButtonRef = useRef();
  const addProjectOpenButtonRef = useRef();
  const addProjectFieldRef = useRef();
  const addProjectNameRef = useRef();

  function selectProject() {
    window.location.href = "/main";
  }
  function addProjectButtonClick() {
    if (!addOpen) {
      addProjectFieldRef.current.style.width = "214px";
      addProjectFieldRef.current.style.marginLeft = "30px";
      addProjectOpenButtonRef.current.textContent = "−";
      addProjectOpenButtonRef.current.style.transform = "rotate(180deg)";
      addProjectOpenButtonRef.current.style.color = "#ff0000";
      setAddOpen(!addOpen);
    } else {
      addProjectFieldRef.current.style.width = "0px";
      addProjectFieldRef.current.style.marginLeft = "0px";
      addProjectOpenButtonRef.current.textContent = "+";
      addProjectOpenButtonRef.current.style.transform = "rotate(0deg)";
      addProjectOpenButtonRef.current.style.color = "#00ff00";
      setAddOpen(!addOpen);
    }
  }
  function addProject() {
    if (addProjectNameRef.current.value.length > 2) {
      addProjectNameRef.current.value = "";
      addProjectButtonClick();
    } else {
      addProjectButtonRef.current.style.color = "#ff0000";
      setTimeout(() => {
        addProjectButtonRef.current.style.color = "lime";
      }, 500);
    }
  }

  return (
    <div className={s.background_projects}>
      <div className={s.projects_field}>
        <div className={s.cages_back}>
          <div title="Click to edit your project" className={s.cage_title}>
            ВАШИ ПРОЕКТЫ
          </div>
          <div className={s.cages}>
            <div className={s.cage_back}>
              <div className={s.cage} onClick={selectProject}>
                <div className={s.cage_name}>Projectiiisxcccvvvv</div>
                <div className={s.cage_blocks_count}>22</div>
              </div>
            </div>
            <div className={s.cage_back}>
              <div className={s.cage} onClick={selectProject}>
                <div className={s.cage_name}>Project2sxcccvvvvv</div>
                <div className={s.cage_blocks_count}>122</div>
              </div>
            </div>
            <div className={s.cage_back}>
              <div className={s.cage} onClick={selectProject}>
                <div className={s.cage_name}>Project3</div>
                <div className={s.cage_blocks_count}>1</div>
              </div>
            </div>
            <div className={s.cage_back}>
              <div className={s.cage} onClick={selectProject}>
                <div className={s.cage_name}>Project4</div>
                <div className={s.cage_blocks_count}>14</div>
              </div>
            </div>
            <div className={s.cage_back}>
              <div className={s.cage} onClick={selectProject}>
                <div className={s.cage_name}>Project5</div>
                <div className={s.cage_blocks_count}>0</div>
              </div>
            </div>
          </div>
        </div>
        <div ref={addProjectFieldRef} className={s.add_project}>
          <div className={s.add_title}>НОВЫЙ ПРОЕКТ</div>
          <input
            maxLength="32"
            placeholder="название проекта"
            type="text"
            ref={addProjectNameRef}
            className={s.add_input_name}
          ></input>
          <div
            className={s.add_button}
            ref={addProjectButtonRef}
            onClick={addProject}
          >
            Создать
          </div>
        </div>
      </div>
      <div
        className={s.add_open_button}
        ref={addProjectOpenButtonRef}
        onClick={addProjectButtonClick}
      >
        +
      </div>
    </div>
  );
};
export default Projects;
