/* eslint-disable no-empty-character-class */
/* eslint-disable max-len */

export const emailValidationRegExp =
  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])/;
export const passwordValidationRegExp =
  /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;

/*
  PASSWORD = r"^.{6,34}$"
  NAME = r"^.{1,30}$"
*/
