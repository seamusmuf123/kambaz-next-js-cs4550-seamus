"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addModule as addModuleAction, editModule as editModuleAction, updateModule as updateModuleAction, 
  deleteModule as deleteModuleAction, setModules } from "./reducer";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "next/navigation";
import ModulesControls from "./ModulesControls";
import Breadcrumb from "../Breadcrumb";
import { FormControl } from "react-bootstrap";
import * as client from "../../client";

type Lesson = { _id: string; name: string };
type Module = {
  editing?: boolean;
  _id: string;
  name: string;
  lessons: Lesson[];
  course: string;
};

export default function Modules() {

  const { cid } = useParams();
  const dispatch = useDispatch();
  

  const modules: any[] = useSelector((state: any) => state.modulesReducer?.modules ?? []);
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await client.createModuleForCourse(cid as string, newModule);
    dispatch(setModules([...modules, module]));
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(cid as string, moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };
  const onUpdateModule = async (module: any) => {
    await client.updateModule(cid as string, module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m );
    dispatch(setModules(newModules));
  };

const currentUser = useSelector((state: any) => state.accountReducer?.currentUser);
  const course = useSelector((state: any) => (state.coursesReducer?.courses ?? []).find((c: any) => c._id === cid));

  const [moduleName, setModuleName] = React.useState("");

  const addModule = () => {
    if (!cid) return;
    dispatch(addModuleAction({ name: moduleName, course: cid }));
    setModuleName("");
  };

  const deleteModule = (moduleId: string) => {
    dispatch(deleteModuleAction(moduleId));
  };

  const editModule = (moduleId: string) => {
    dispatch(editModuleAction(moduleId));
  };

  const updateModule = (module: any) => {
    dispatch(updateModuleAction(module));
  };

  const fetchModules = async () => {
    console.log("Fetching modules for course", cid);
    const modules = await client.findModulesForCourse(cid as string);
    console.log(modules);
    dispatch(setModules(modules));
  };
    useEffect(() => {
    fetchModules();
  }, []);
  
  

  return (
    <div>
      <div className="mb-3">
        <h1 className="mb-4"><Breadcrumb course={course} /></h1>
      </div>
      
      {currentUser?.role === "FACULTY" && (
        <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={onCreateModuleForCourse} />
      )}
      

  <ListGroup id="wd-modules" className="rounded-0 mt-3">
        {modules
          .map((module) => (
            <ListGroupItem key={module._id} className="wd-module p-0 mb-4 fs-5 border-start border-3 
            border-success rounded-3 overflow-hidden">
              {!module.editing && (
                <div className="wd-title p-3 ps-3 bg-light d-flex align-items-center border-bottom">
                  <div className="flex-grow-1 d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3 text-muted" />
                    <div className="fw-semibold">{module.name}</div>
                  </div>
                  {currentUser?.role === "FACULTY" && (
                    <ModuleControlButtons
                      moduleId={module._id}
                      deleteModule={(moduleId) => onRemoveModule(moduleId)}
                      editModule={() => editModule(module._id)}
                    />
                  )}
                </div>
              )}

              {module.editing && (
                <div className="p-3">
                  <FormControl
                    className="w-50 d-inline-block mb-2"
                    defaultValue={module.name}
                    onChange={(e) => updateModule({ ...module, name: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onUpdateModule({ ...module, editing: false });
                      }
                    }}
                  />
                </div>
              )}
              {module.lessons?.length ? (
                <ListGroup id="wd-lessons" className="rounded-0">
                  {module.lessons!.map((lesson: any) => (
                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-3 d-flex align-items-center border-top-0">
                      <div className="flex-grow-1 d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-4 text-muted" />
                        <div>{lesson.name}</div>
                      </div>
                      {currentUser?.role === "FACULTY" && <LessonControlButtons />}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              ) : null}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}