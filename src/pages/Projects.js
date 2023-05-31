import s from "./Pages.module.css"

const Projects = () => {

  function selectProject() {
    window.location.href = "/main";
  }

  return (
    <div className={s.background}>
      <div className={s.cages}>
        <div className={s.cage} onClick={selectProject}>Project1</div>
        <div className={s.cage} onClick={selectProject}>Project2</div>
        <div className={s.cage} onClick={selectProject}>Project3</div>
        <div className={s.cage} onClick={selectProject}>Project4</div>
        <div className={s.cage} onClick={selectProject}>Project5</div>
      </div>
    </div>
  )   
}
export default Projects