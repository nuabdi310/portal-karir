import useTitle from "../hooks/useTitle";
import Computer from "../assets/computer.png";

function NotFound() {
  useTitle("Not Found");
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 offset-md-4 text-center">
            <img src={Computer} className="w-100 mb-5" alt="Not Found" />
            <h1>Page Not Found</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
