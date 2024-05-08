import { ComplaintsPhotoWhereInput } from "./ComplaintsPhotoWhereInput";
import { ComplaintsPhotoOrderByInput } from "./ComplaintsPhotoOrderByInput";

export type ComplaintsPhotoFindManyArgs = {
  where?: ComplaintsPhotoWhereInput;
  orderBy?: Array<ComplaintsPhotoOrderByInput>;
  skip?: number;
  take?: number;
};
