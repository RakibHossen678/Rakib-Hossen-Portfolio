export const getProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects/api/get-all`
    );
    const projects = res.json();
    return projects;
  } catch (error) {
    console.log(error);
    return [];
  }
};
