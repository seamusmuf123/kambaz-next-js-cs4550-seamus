"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CardImg from "react-bootstrap/esm/CardImg";
import CardBody from "react-bootstrap/esm/CardBody";
import * as client from "../Courses/client";
import { addEnrollment, deleteEnrollment, setEnrollments } from "../Enrollments/reducer"; 
import { Button, Card, CardText, CardTitle, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../Courses/reducer";
export default function Dashboard() {
  type Course = {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    image: string;
    description: string;
  };

  type Enrollment = {
    _id: string;
    user: string;
    course: string;
  };

  

  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const defaultCourse: Course = {
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  };

  const [course, setCourse] = useState<Course>(defaultCourse);
  const [showAll, setShowAll] = useState<boolean>(false);

  

   const enrollIntoCourse = async (
  userId: string,
  courseId: string
) => {
  try {
    await client.enrollIntoCourse(userId, courseId);

    const updatedEnrollments =
      await client.findAllEnrollments();

    dispatch(setEnrollments(updatedEnrollments));
  } catch (error) {
    console.error("Unable to enroll:", error);
  }
};
   const unenrollFromCourse = async (
  enrollment: Enrollment
) => {
  try {
    await client.unenrollFromCourse(
      enrollment.user,
      enrollment.course
    );

    const updatedEnrollments =
      await client.findAllEnrollments();

    dispatch(setEnrollments(updatedEnrollments));
  } catch (error) {
    console.error("Unable to unenroll:", error);
  }
};
  const onAddNewCourse = async () => {
  try {
    const newCourse = await client.createCourse(course);

    dispatch(setCourses([...courses, newCourse]));

    const updatedEnrollments =
      await client.findAllEnrollments();

    dispatch(setEnrollments(updatedEnrollments));

    setCourse(defaultCourse);
  } catch (error) {
    console.error("Unable to create course:", error);
  }
};

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course: Course) => course._id !== courseId)));
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c: Course) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};

const fetchCourses = async () => {
    try {
      const courses = await client.fetchAllCourses();
      dispatch(setCourses(courses));
    } catch (e) {
      console.error("Failed to fetch courses", e);
    }
  };

  const fetchEnrollments = async () => {
  try {
    const enrollments =
      await client.findAllEnrollments();

    dispatch(setEnrollments(enrollments));
  } catch (error) {
    console.error(
      "Failed to fetch enrollments:",
      error
    );
  }
};

useEffect(() => {
  console.log("CURRENT USER:", currentUser);
  console.log("ENROLLMENTS:", enrollments);
}, [currentUser, enrollments]);
useEffect(() => {
  if (!currentUser) return;

  fetchCourses();
  fetchEnrollments();
}, [currentUser]);

  if (!currentUser) return <div>Please sign in</div>;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
        {currentUser?.role === "FACULTY" && (
          <>
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={onAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={onUpdateCourse} 
              id="wd-update-course-click"
            >
              Update
            </button>
          </>
        )}
      </h5>
      <br />
      <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as="textarea" value={course.description} rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      <hr />
      <div className="d-flex align-items-center">
        <h2 id="wd-dashboard-published" className="me-3">
  Published Courses (
  {(showAll
    ? courses
    : courses.filter((c: Course) =>
        enrollments.some(
          (en: Enrollment) =>
            String(en.user) === String(currentUser._id) &&
            String(en.course) === String(c._id)
        )
      )
  ).length}
  )
</h2>
        <button id="wd-enrollments-toggle" className="btn btn-primary ms-auto" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Enrolled" : "Show All"}
        </button>
      </div>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {(
  showAll
    ? courses
    : courses.filter((course: Course) =>
        enrollments.some(
          (en: Enrollment) =>
            String(en.user) === String(currentUser._id) &&
            String(en.course) === String(course._id)
        )
      )
).map((course: Course) => {
  const isEnrolled = enrollments.some(
    (en: Enrollment) =>
      String(en.user) === String(currentUser._id) &&
      String(en.course) === String(course._id)
  );

  const enrollment = enrollments.find(
    (en: Enrollment) =>
      String(en.user) === String(currentUser._id) &&
      String(en.course) === String(course._id)
  );

  return (
    <Col
      key={course._id}
      className="wd-dashboard-course"
      style={{ width: "300px" }}
    >
      <Card>
        <Link
          href={`/Courses/${course._id}/Home`}
          className="wd-dashboard-course-link text-decoration-none text-dark"
        >
          <CardImg
            variant="top"
            src="/images/reactjs.webp"
            width={200}
            height={150}
            alt="React JS Course"
          />

          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
              {course.name}
            </CardTitle>

            <CardText
              className="wd-dashboard-course-description overflow-hidden"
              style={{ height: "100px" }}
            >
              {course.description}
            </CardText>

            <Button variant="primary">Go</Button>
            </CardBody>
        </Link>
        <CardBody className="pt-0">
            {currentUser?.role === "FACULTY" && (
              <>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    onDeleteCourse(course._id);
                  }}
                  className="btn btn-danger float-end"
                  id="wd-delete-course-click"
                >
                  Delete
                </button>

                <button
                  id="wd-edit-course-click"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                  className="btn btn-warning me-2 float-end"
                >
                  Edit
                </button>
              </>
            )}

            {!isEnrolled ? (
              <button
                className="btn btn-success"
                id="wd-enroll-course-click"
                onClick={(event) => {
                  event.preventDefault();
                  enrollIntoCourse(currentUser._id, course._id);
                }}
              >
                Enroll
              </button>
            ) : (
              <button
                className="btn btn-danger ms-2"
                id="wd-unenroll-course-click"
                onClick={(event) => {
                  event.preventDefault();

                  if (enrollment) {
                    unenrollFromCourse(enrollment);
                  }
                }}
              >
                Unenroll
              </button>
            )}
          </CardBody>
      </Card>
    </Col>
  );
})}
        </Row>
      </div>
    </div>
    );
  }
