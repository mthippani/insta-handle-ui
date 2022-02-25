import { TypedAction } from "@ngrx/store/src/models";
import { OperatorFunction } from "rxjs";

/**
 * Interface for the 'ProfileSearch' data
 */
export interface ProfileSearchEntity {
  id: string | number; // Primary ID
  name: string;
}

export interface ProfileInfo {
  pipe(arg0: OperatorFunction<unknown, { profile: ProfileInfo | null; } & TypedAction<"[ProfileSearch/API] Load ProfileSearch Success">>): any;
  dateAndTime: Date;
  biography: string;
  fullName: String;
  followersCount: number;
  post:Post;
}

export interface Post {
  url:String;
  mediaURL:string;
  numberOfLikes:number;
  numberOfComments:number;
  type: PostType
}

enum PostType{
  CAROUSEL = "carousel",
  IMAGE= 'image',
  VIDEO ='video'
}
