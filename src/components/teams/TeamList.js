import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Alert, Button } from "react-bootstrap";
import TeamCard from "./TeamCard";
import NewTeamButton from "./NewTeamButton";

function TeamList({ leagues, teams }) {
  const list = teams.map((team) => (
    <div key={team.id}>
      {
        <Link to={`/teams/${team.id}`}>
          <Row noGutters={true} className={"team-list"}>
            <Col>
              <TeamCard team={team} />
            </Col>
          </Row>
        </Link>
      }
    </div>
  ));

  return (
    <>
      {teams && teams.length >= 1 ? (
        list
      ) : (
        <>
          <br />
          <Alert className={"text-center "} variant={"primary"}>
            No teams, yet... 👻.
          </Alert>
        </>
      )}
    </>
  );
}

export default TeamList;
