// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import YAML from "yaml";
import { StoryEntry } from "../../components/storyCard";

const getAllVisiblePersonalStoryEntries = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const personalStoryDataRaw = fs.readFileSync(
    "data/personalstory.yaml",
    "utf8"
  );
  const personalStoryData = YAML.parse(personalStoryDataRaw);

  // Manual Data Mapping
  // Here we are flatMapping since we don't want to send over data that will not be displayed.
  const mappedPersonalStoryData: StoryEntry[] = personalStoryData.flatMap(
    (storyEntry) => {
      // We have to explicitly state that we want to display a specific data entry.
      if (storyEntry?.displayOnPage !== true) {
        return [];
      }
      // Otherwise, we can go ahead and just map it to the ProjectEntry type.
      const mappedPersonalStoryEntry: StoryEntry = {
        order: storyEntry.order || 0,
        title: storyEntry.title || "",
        body: storyEntry.body || "",
        image: {
          imagePath: storyEntry.imagePath || "images/goldenGateWithDog.jpeg",
          imageAltText:
            storyEntry.imagePath ||
            "A medium sized dog is running on a beach towards the Golden Gate Bridge at midday.",
        },
      };
      return mappedPersonalStoryEntry;
    }
  );

  res.status(200).json(mappedPersonalStoryData);
};

export default getAllVisiblePersonalStoryEntries;
