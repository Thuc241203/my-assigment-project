import instance from "./config";

const getProjects = () => {
    return instance.get("/projects");
};

const getProject = (id) => {
    return instance.get(`/projects/${id}`);
};

const addProject = (projects) => {
    return instance.post("/projects", projects);
};

const deleteProject = (id) => {
    return instance.delete(`/projects/${id}`);
};

const updateProject = (projects) => {
    return instance.put(`/projects/${projects.id}`, projects);
};

export { getProjects, getProject, addProject, deleteProject, updateProject };


