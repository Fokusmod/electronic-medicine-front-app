export default function BackStep(props) {
  function returnBack(stage, section, prevStage, prevSection) {
    stage.current.classList.add("hide");
    section.current.classList.add("hide");
    prevStage.current.classList.remove("complete");
    prevSection.current.classList.remove("hide");
  }

  return (
    <>
      <div
        className="back-step"
        onClick={() =>
          returnBack(
            props.thisStage,
            props.thisSection,
            props.prevStage,
            props.prevSection
          )
        }
      >
        Предыдущий шаг
      </div>
    </>
  );
}
