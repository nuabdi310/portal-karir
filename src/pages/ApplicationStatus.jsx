import useTitle from "../hooks/useTitle";
import { FaSearch } from "react-icons/fa";

function ApplicationStatus() {
  useTitle("Application Status");
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h3 className="text-center">Check Your Application Status</h3>
              <p className="text-center mb-4">
                Enter the email address you used when applying to track your
                progress.
              </p>

              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="example@email.com"
                      />
                    </div>
                    <button type="submit" className="btn btn-basic w-100">
                      <FaSearch /> Search Appication
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationStatus;
