import { useEffect } from "react";
import { useState } from "react";

const Pagination = ({ pages, setCurrentPage }) => {
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <>
      <div className="clearfix" style={{ float: "left" }}>
        <ul className="pagination">
          <li
            className={`${
              currentButton === 1 ? "page-item disabled" : "page-item"
            }`}
          >
            <a
              href="#!"
              className="page-link"
              onClick={() =>
                setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
              }
              style={{ fontSize: "23px" }}
            >
              <i
                className="fa-solid fa-angles-left"
                style={{ fontSize: "0.9rem" }}
              ></i>{" "}
            </a>
          </li>
          {numOfPages.map((page, index) => {
            return (
              <li
                key={index}
                className={`${
                  currentButton === page ? "page-item active" : "page-item"
                }`}
              >
                <a
                  href="#!"
                  className="page-link"
                  onClick={() => setCurrentButton(page)}
                  style={{ fontSize: "23px" }}
                >
                  {page}
                </a>
              </li>
            );
          })}

          <li
            className={`${
              currentButton === numOfPages.length
                ? "page-item disabled"
                : "page-item"
            }`}
          >
            <a
              href="#!"
              className="page-link"
              onClick={() =>
                setCurrentButton((prev) =>
                  prev === numOfPages.length ? prev : prev + 1
                )
              }
              style={{ fontSize: "23px" }}
            >
              {" "}
              <i
                className="fa-solid fa-angles-right "
                style={{ fontSize: "0.9rem" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
