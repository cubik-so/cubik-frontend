import axios from 'axios';

export const createProject = async ({
  project_name,
  owner_publickey,
  long_description,
  short_description,
  project_link,
  logo,
  industry,
  twitter,
  github,
  discord,
}: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(process.env.NEXT_PUBLIC_BACKEND_URL + `/project/create`, {
        project_name,
        logo,
        short_description,
        project_link,
        long_description: JSON.stringify(long_description),
        industry: JSON.stringify(industry),
        socials: JSON.stringify([
          { name: 'Twitter', url: twitter },
          { name: 'Github', url: github },
          { name: 'Discord', url: discord },
        ]),
        owner_publickey: owner_publickey,
        total: 0,
      })
      .then((res) => {
        console.log('response from create project', res);
        resolve(res.data);
      })
      .catch((e) => {
        console.error('error from create project', e);
        reject(e);
      });
  });
};
export const getAllProjects = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_URL + `/project/find/all`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export const getProjectByID = async ({ project_id }: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        process.env.NEXT_PUBLIC_BACKEND_URL + `/project/find?id=` + project_id
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
