import Header from "../components/Header";
import { useParams } from "react-router-dom";

function ProfilePage() {
    const { name } = useParams();
    console.log(name)
  return (
    <section>
      <Header />
      <h1>Página de perfil {name}</h1>
    </section>
  );
}

export default ProfilePage;
