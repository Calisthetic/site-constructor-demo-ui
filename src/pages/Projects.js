import s from "./Pages.module.css";

const Projects = () => {
  function selectProject() {
    window.location.href = "/main";
  }
  function addProject() {
    document.getElementById("AddProjectField").style.width === "0px"
      ? (document.getElementById("AddProjectField").style.width = "200px")
      : (document.getElementById("AddProjectField").style.width = "0px");
    document.getElementById("AddProjectField").style.marginLeft === "0px"
      ? (document.getElementById("AddProjectField").style.marginLeft = "20px")
      : (document.getElementById("AddProjectField").style.marginLeft = "0px");
  }

  return (
    <div className={s.background_projects}>
      <div className={s.projects_field}>
        <div className={s.cages_back}>
          <div title="Click to edit your project" className={s.titlecage}>
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
        <div id="AddProjectField" className={s.add_project}></div>
      </div>
      <div className={s.add_button} onClick={addProject}>
        +
      </div>
    </div>
  );
};
export default Projects;
