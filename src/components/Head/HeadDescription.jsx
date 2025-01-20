import { description } from "/src/components/Head/dataHead.js";

export default function HeadDescription() {
  return (
    <>
      <div className="info">
        <div className="infoHead">{description.title}</div>
        <div className="infoHeadDescription">{description.description}</div>
      </div>
    </>
  );
}
