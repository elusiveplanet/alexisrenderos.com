// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import YAML from "yaml";
import { SocialLink } from "../../components/socialLinkIcon";

const getAllVisibleSocialLinks = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const socialLinkDataRaw = fs.readFileSync("data/socials.yaml", "utf8");
  const socialLinkData = YAML.parse(socialLinkDataRaw);

  // Manual Data Mapping
  // Here we are flatMapping since we don't want to send over data that will not be displayed.
  const mappedSocialLinkData: SocialLink[] = socialLinkData.flatMap(
    (socialLink) => {
      // We have to explicitly state that we want to display a specific data entry.
      if (socialLink?.displayOnPage !== true) {
        return [];
      }
      // Otherwise, we can go ahead and just map it to the ProjectEntry type.
      const mappedSocialLink: SocialLink = {
        service: socialLink.service || "",
        url: socialLink?.url || "",
      };
      return mappedSocialLink;
    }
  );

  res.status(200).json(mappedSocialLinkData);
};

export default getAllVisibleSocialLinks;
