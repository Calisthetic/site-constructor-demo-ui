import { useRef, useState } from "react";
import s from "./Projects.module.css";

const Projects = () => {
  const [addOpen, setAddOpen] = useState(false);

  const addProjectButton = useRef();
  const addProjectField = useRef();

  function selectProject() {
    window.location.href = "/main";
  }
  function addProject() {
    if (!addOpen) {
      addProjectField.current.style.width = "214px";
      addProjectField.current.style.marginLeft = "20px";
      addProjectButton.current.style.transform = "rotate(45deg)";
      setAddOpen(!addOpen);
    } else {
      addProjectField.current.style.width = "0px";
      addProjectField.current.style.marginLeft = "0px";
      addProjectButton.current.style.transform = "rotate(0deg)";
      setAddOpen(!addOpen);
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
        <div ref={addProjectField} className={s.add_project}>
          <div className={s.add_title}>Новый проект</div>
          <input
            maxLength="32"
            placeholder="название проекта"
            type="text"
            className={s.add_input_name}
          ></input>
          <div className={s.add_button_back}>
            <div className={s.add_button}>Создать</div>
          </div>
        </div>
      </div>
      <div
        className={s.add_open_button}
        ref={addProjectButton}
        onClick={addProject}
      >
        +
      </div>
    </div>
  );
};
export default Projects;
