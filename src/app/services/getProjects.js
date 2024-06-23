export const getProjects = async () => {
    const res = await fetch("http://localhost:3000/projects/api/get-all");
    const projects = res.json();
    return projects;
  };