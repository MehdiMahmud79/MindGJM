import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { getAllQuizzes } from "../utils/queries";
import SingleCard from "./SingleCard";
const AllQuizzes = (props) => {
  return (
    <div className="flex-row">
      {/* <SingleCard />
      {!data ? "your data" : data.getAllQuizzes[0].questions[0].type}{" "}
      {loading ? (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : null} */}
    </div>
  );
};

export default AllQuizzes;
