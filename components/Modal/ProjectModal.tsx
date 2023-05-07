import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type props = any;

const ProjectModal = (props: props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h2 className="text-uppercase">Project Name</h2>
          <p className="item-intro text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body">
         
          <img
            className="img-fluid d-block mx-auto"
            src="assets/img/portfolio/1.jpg"
            alt="..."
          />
          <p>
            Use this area to describe your project. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt
            minus dignissimos deserunt repellat aperiam quasi sunt officia
            expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis
            facere nemo!
          </p>
          <ul className="list-inline">
            <li>
              <strong>Client:</strong>
              Threads
            </li>
            <li>
              <strong>Category:</strong>
              Illustration
            </li>
          </ul>
        
        </div>
      </Modal.Body>
      <Modal.Footer>

      <button
            className="btn btn-primary btn-xl text-uppercase"
            onClick={props.onHide}          >
            <i className="fas fa-xmark me-1"></i>
            Close Project
          </button>
        
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
