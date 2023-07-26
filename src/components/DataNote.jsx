import { Link } from "react-router-dom";

const SecondComponents = () => {
  return (
    <div>
      <h1>Ini adalah halaman kedua</h1>
      <Link to={"/"}>Halaman Pertama</Link>
    </div>
  );
};

export default SecondComponents;
