import AdminStaffItem from "./AdminStaffItem";

export default function AdminStaff() {
  return (
    <>
      <div className="admin-staff-section">
        <AdminStaffItem
          photo="/temp/admin-1.png"
          fullname="Анна Смирнова"
          position="Администратор"
        />
        <AdminStaffItem
          photo="/temp/admin-2.png"
          fullname="Екатерина Иванова"
          position="Глав. Врач"
        />
        <AdminStaffItem
          photo="/temp/admin-3.png"
          fullname="Мария Петрова"
          position="Заведущий Глав. Врача"
        />
        <AdminStaffItem
          photo="/temp/admin-4.png"
          fullname="Ольга Васильева"
          position="Администратор"
        />
        <AdminStaffItem
          photo="/temp/admin-5.png"
          fullname="Наталья Кузнецова"
          position="Администратор"
        />
      </div>
    </>
  );
}
