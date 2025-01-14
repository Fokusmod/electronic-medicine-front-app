/* import { useEffect, useState, useCallback } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  function openModal() {
    setModal(true);
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque
          nisi. Quas quasi corrupti ullam culpa. Labore hic iure pariatur ea
          quidem quasi enim beatae, mollitia blanditiis quaerat at sed.
        </p>
        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>

      {loading && <p>loading...</p>}
      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
 */
