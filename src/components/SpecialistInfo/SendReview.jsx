import "./SpecialistInfo.css";

import Button from "../Button/Button";

export default function SendReview() {
  return (
    <>
      <div className="send-review-row">
        <textarea
          name="review-area"
          id="review-area"
          rows={5}
          cols={55}
          placeholder="Оставьте ваш отзыв"
          spellCheck="true"
          className="review-area"
        ></textarea>
        <Button name="Отправить" />
      </div>
    </>
  );
}
