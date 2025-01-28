export default function AdminStaffItem(props) {
  return (
    <>
      <div className="admin-staff-item ">
        <img src={props.photo} alt="admin" className="admin-photo" />
        <div className="admin-info">
          <div className="admin-position">{props.position}</div>
          <div className="admin-name">{props.fullname}</div>
        </div>
      </div>
    </>
  );
}
