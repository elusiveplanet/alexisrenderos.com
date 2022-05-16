// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import YAML from "yaml";
import {
  WorkExperienceEntry,
  WorkExperienceTimeRange,
} from "../../components/workExperienceCard";

const getAllVisibleWorkExperience = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const experienceDataRaw = fs.readFileSync("data/experience.yaml", "utf8");
  const experienceData = YAML.parse(experienceDataRaw);

  // Manual Data Mapping
  // Here we are flatMapping since we don't want to send over data that will not be displayed.
  const mappedExperienceData: WorkExperienceEntry[] = experienceData.flatMap(
    (workExperienceEntry) => {
      // We have to explicitly state that we want to display a specific data entry.
      if (workExperienceEntry?.displayOnPage !== true) {
        return [];
      }
      // Otherwise, we can go ahead and just map it to the WorkExperienceEntry type.
      const mappedWorkExperienceEntryDates: WorkExperienceTimeRange = {
        startMonth: workExperienceEntry.dates.startMonth || "",
        startYear: workExperienceEntry.dates.startYear || "",
        endMonth: workExperienceEntry.dates.endMonth || "",
        endYear: workExperienceEntry.dates.endYear || "",
      };
      const mappedWorkExperienceEntry: WorkExperienceEntry = {
        company: workExperienceEntry.company || "",
        url: workExperienceEntry?.url || "",
        title: workExperienceEntry.title || "",
        dates: mappedWorkExperienceEntryDates,
        description: workExperienceEntry.description || "",
        location: workExperienceEntry?.location || "",
        additionalInfo: workExperienceEntry?.additionalInfo || "",
      };
      return mappedWorkExperienceEntry;
    }
  );

  res.status(200).json(mappedExperienceData);
};

export default getAllVisibleWorkExperience;
