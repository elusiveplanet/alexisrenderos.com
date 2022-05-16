// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import YAML from "yaml";
import { ProjectEntry } from "../../components/projectCard";

const getAllVisibleProjects = (req: NextApiRequest, res: NextApiResponse) => {
  const projectDataRaw = fs.readFileSync("data/projects.yaml", "utf8");
  const projectData = YAML.parse(projectDataRaw);

  // Manual Data Mapping
  // Here we are flatMapping since we don't want to send over data that will not be displayed.
  const mappedProjectData: ProjectEntry[] = projectData.flatMap(
    (projectEntry) => {
      // We have to explicitly state that we want to display a specific data entry.
      if (projectEntry?.displayOnPage !== true) {
        return [];
      }
      // Otherwise, we can go ahead and just map it to the ProjectEntry type.
      const mappedProjectEntry: ProjectEntry = {
        name: projectEntry.name || "",
        url: projectEntry?.url || "",
        code: projectEntry?.code || "",
        cad: projectEntry?.cad || "",
        description: projectEntry.description || "",
        used: projectEntry?.used || [""],
      };
      return mappedProjectEntry;
    }
  );

  res.status(200).json(mappedProjectData);
};

export default getAllVisibleProjects;
