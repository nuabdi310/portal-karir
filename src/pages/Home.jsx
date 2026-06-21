import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { FaArrowRight, FaSearch } from "react-icons/fa";

function Home() {
  useTitle("Home");

  const navigate = useNavigate();

  const [form, setForm] = useState({
    role: "",
    location: "",
    type: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(form);

    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <>
      <div className="banner">
        <div className="container">
          <h1>
            To Adapt is to move forward as we Accelerate to Achieve greater
            heights
          </h1>
          <Link to="/jobs" className="btn btn-basic">
            Explore Jobs
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <section className="section about">
        <div className="container">
          <h3>Job Opportunities</h3>
          <form
            className="d-flex flex-column flex-md-row gap-3 py-3 mb-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="role"
              className="form-control"
              placeholder="Role"
              onChange={handleChange}
            />

            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Location"
              onChange={handleChange}
            />

            <input
              type="text"
              name="type"
              className="form-control"
              placeholder="Type"
              onChange={handleChange}
            />

            <input
              type="text"
              name="department"
              className="form-control"
              placeholder="Department"
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-basic">
              <FaSearch /> Search
            </button>
          </form>

          <div className="row my-5">
            <div className="col-md-6">
              <h2>Discover your career journey with Sefas Group</h2>
            </div>
            <div className="col-md-6">
              <p className="text-justify">
                Sefas began its journey in 1997 as a distributor for Shell
                Lubricants. Over the years, the company has made its mark as one
                of the leading companies in Asia Pacific’s lubricants supply
                chain.
              </p>
              <p className="text-justify">
                Our focus is to achieve operational excellence by maximizing our
                potential through our coverage areas and sectors, raising next
                generation leaders, and continue delivering value to the world
                around us. If this mission speaks to you, join our team today.
              </p>
            </div>
          </div>

          <div className="intro-section">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/vp03XePIijM"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
