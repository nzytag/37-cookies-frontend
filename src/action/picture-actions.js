"use strict";

import superagent from "superagent";
import * as routes from "../routes";

export const createAction = picture => ({
  type: "CLIENT_PICTURE_CREATE",
  payload: picture
});

export const createActionRequest = picture => dispatch => {
  //Here we could get it from the cookie as well
  let token = localStorage.getItem("token");
  return superagent
    .post(`${__API_URL__}${routes.PICTURES_ROUTE}`)
    .set("Authorization", `Bearer${token}`)
    .field("Description", picture.description)
    .attach("photo", picture.picture)
    .then(response => {
      return dispatch(createAction(response.body)); //'closing' the chain
    });
};
