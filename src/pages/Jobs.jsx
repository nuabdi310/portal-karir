import useTitle from "../hooks/useTitle";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams, useNavigate } from "react-router-dom";

function Jobs() {
  useTitle("Jobs");

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    role: searchParams.get("role") || "",
    location: searchParams.get("location") || "",
    type: searchParams.get("type") || "",
    department: searchParams.get("department") || "",
  });

  const fetchJobs = async (filters) => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const jobs = [
        {
          id: 1,
          title: "Frontend Developer",
          location: "Bandung",
          type: "Fulltime",
          department: "IT",
        },
        {
          id: 2,
          title: "Backend Developer",
          location: "Jakarta",
          type: "Fulltime",
          department: "IT",
        },
        {
          id: 3,
          title: "UI/UX Designer",
          location: "Bandung",
          type: "Contract",
          department: "Design",
        },
        {
          id: 4,
          title: "QA Engineer",
          location: "Jakarta",
          type: "Fulltime",
          department: "IT",
        },
        {
          id: 5,
          title: "HR Staff",
          location: "Bandung",
          type: "Fulltime",
          department: "HR",
        },
        {
          id: 6,
          title: "Recruitment Specialist",
          location: "Jakarta",
          type: "Contract",
          department: "HR",
        },
        {
          id: 7,
          title: "Project Manager",
          location: "Surabaya",
          type: "Fulltime",
          department: "Management",
        },
        {
          id: 8,
          title: "DevOps Engineer",
          location: "Bandung",
          type: "Fulltime",
          department: "IT",
        },
        {
          id: 9,
          title: "Mobile Developer",
          location: "Yogyakarta",
          type: "Fulltime",
          department: "IT",
        },
        {
          id: 10,
          title: "Graphic Designer",
          location: "Surabaya",
          type: "Internship",
          department: "Design",
        },
      ];

      const filteredJobs = jobs.filter((job) => {
        return (
          (!filters.role ||
            job.title.toLowerCase().includes(filters.role.toLowerCase())) &&
          (!filters.location ||
            job.location
              .toLowerCase()
              .includes(filters.location.toLowerCase())) &&
          (!filters.type ||
            job.type.toLowerCase().includes(filters.type.toLowerCase())) &&
          (!filters.department ||
            job.department
              .toLowerCase()
              .includes(filters.department.toLowerCase()))
        );
      });

      setJobs(filteredJobs);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const filters = {
      role: searchParams.get("role") || "",
      location: searchParams.get("location") || "",
      type: searchParams.get("type") || "",
      department: searchParams.get("department") || "",
    };

    fetchJobs(filters);
  }, [searchParams]);

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
              value={form.role}
              onChange={handleChange}
            />

            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
            />

            <input
              type="text"
              name="type"
              className="form-control"
              placeholder="Type"
              value={form.type}
              onChange={handleChange}
            />

            <input
              type="text"
              name="department"
              className="form-control"
              placeholder="Department"
              value={form.department}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-basic">
              <FaSearch /> Search
            </button>
          </form>

          {loading && <p>Loading...</p>}

          {!loading && jobs.length === 0 && <p>Tidak ada lowongan.</p>}

          {!loading && jobs.length > 0 && (
            <div className="row">
              {jobs.map((job) => (
                <div key={job.id} className="col-md-6 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5>{job.title}</h5>

                      <p className="mb-1">
                        <strong>Location:</strong> {job.location}
                      </p>

                      <p className="mb-1">
                        <strong>Type:</strong> {job.type}
                      </p>

                      <p>
                        <strong>Department:</strong> {job.department}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Jobs;
