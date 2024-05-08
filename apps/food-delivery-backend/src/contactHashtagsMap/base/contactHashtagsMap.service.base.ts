/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ContactHashtagsMap as PrismaContactHashtagsMap,
  ContactDetail as PrismaContactDetail,
  Hashtag as PrismaHashtag,
} from "@prisma/client";

export class ContactHashtagsMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContactHashtagsMapCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contactHashtagsMap.count(args);
  }

  async contactHashtagsMaps<T extends Prisma.ContactHashtagsMapFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactHashtagsMapFindManyArgs>
  ): Promise<PrismaContactHashtagsMap[]> {
    return this.prisma.contactHashtagsMap.findMany<Prisma.ContactHashtagsMapFindManyArgs>(
      args
    );
  }
  async contactHashtagsMap<T extends Prisma.ContactHashtagsMapFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactHashtagsMapFindUniqueArgs>
  ): Promise<PrismaContactHashtagsMap | null> {
    return this.prisma.contactHashtagsMap.findUnique(args);
  }
  async createContactHashtagsMap<T extends Prisma.ContactHashtagsMapCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactHashtagsMapCreateArgs>
  ): Promise<PrismaContactHashtagsMap> {
    return this.prisma.contactHashtagsMap.create<T>(args);
  }
  async updateContactHashtagsMap<T extends Prisma.ContactHashtagsMapUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactHashtagsMapUpdateArgs>
  ): Promise<PrismaContactHashtagsMap> {
    return this.prisma.contactHashtagsMap.update<T>(args);
  }
  async deleteContactHashtagsMap<T extends Prisma.ContactHashtagsMapDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContactHashtagsMapDeleteArgs>
  ): Promise<PrismaContactHashtagsMap> {
    return this.prisma.contactHashtagsMap.delete(args);
  }

  async getContactDetails(
    parentId: string
  ): Promise<PrismaContactDetail | null> {
    return this.prisma.contactHashtagsMap
      .findUnique({
        where: { id: parentId },
      })
      .contactDetails();
  }

  async getHashtags(parentId: string): Promise<PrismaHashtag | null> {
    return this.prisma.contactHashtagsMap
      .findUnique({
        where: { id: parentId },
      })
      .hashtags();
  }
}