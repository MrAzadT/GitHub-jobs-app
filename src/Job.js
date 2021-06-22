import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="md-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.title>
              {job.title} -
              <span className="text-muted font-weight-light"> </span>
            </Card.title>
            <Card.Subtitle className="text-muted md-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge>{job.type}</Badge>
            <Badge>{job.location}</Badge>
            <div style={{ wordBreak: "break-all" }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            alt={job.company}
            src={Job.company_logo}
          />
        </div>

        <Card.text>
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant="primary"
          >
            {open ? "Hide Details" : "view Details"}
          </Button>
          <Collapse in={open}>
            <div className="mt-4">
              <ReactMarkdown source={job.description} />
            </div>
          </Collapse>
        </Card.text>
      </Card.Body>
    </Card>
  );
}
