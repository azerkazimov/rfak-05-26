import { useNavigate } from "react-router-dom";

export default function UserCard({ user }) {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className="user-card" onClick={handleUserClick}>
      <div className="card-top-content">
        {/* Header section */}
        <div className="card-header">
          <div className="avatar-badge">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="user-info">
            <h2>{user.name}</h2>
            <p className="company-name">
              {user.company?.name || "Contributor"}
            </p>
          </div>
        </div>

        <hr className="card-divider" />

        {/* Details Section */}
        <div className="card-body">
          <div className="contact-item">
            <svg
              className="contact-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="contact-text">{user.email}</span>
          </div>

          <div className="contact-item">
            <svg
              className="contact-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="contact-text">{user.phone}</span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="card-footer">
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="website-link"
        >
          <span>Visit website</span>
          <svg
            className="link-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
