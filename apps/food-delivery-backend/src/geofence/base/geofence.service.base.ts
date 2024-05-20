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
  Geofence as PrismaGeofence,
  GeoLocation as PrismaGeoLocation,
} from "@prisma/client";

export class GeofenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GeofenceCountArgs, "select">): Promise<number> {
    return this.prisma.geofence.count(args);
  }

  async geofences<T extends Prisma.GeofenceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeofenceFindManyArgs>
  ): Promise<PrismaGeofence[]> {
    return this.prisma.geofence.findMany<Prisma.GeofenceFindManyArgs>(args);
  }
  async geofence<T extends Prisma.GeofenceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeofenceFindUniqueArgs>
  ): Promise<PrismaGeofence | null> {
    return this.prisma.geofence.findUnique(args);
  }
  async createGeofence<T extends Prisma.GeofenceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeofenceCreateArgs>
  ): Promise<PrismaGeofence> {
    return this.prisma.geofence.create<T>(args);
  }
  async updateGeofence<T extends Prisma.GeofenceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeofenceUpdateArgs>
  ): Promise<PrismaGeofence> {
    return this.prisma.geofence.update<T>(args);
  }
  async deleteGeofence<T extends Prisma.GeofenceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeofenceDeleteArgs>
  ): Promise<PrismaGeofence> {
    return this.prisma.geofence.delete(args);
  }

  async getGeoLocations(parentId: string): Promise<PrismaGeoLocation | null> {
    return this.prisma.geofence
      .findUnique({
        where: { id: parentId },
      })
      .geoLocations();
  }
}
